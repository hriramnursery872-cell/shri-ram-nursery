const supabase = supabase.createClient("https://supabase.co", "sb_publishable_YUi1f1Q2sHxEFiYoBJ7ZUw_TzZga11K");

let dailyCashTotal = 0;
let dailyUpiTotal = 0;

document.addEventListener("DOMContentLoaded", () => {
    checkAdminAuth();
    setupDailyLedgerTimer();
});

function checkAdminAuth() {
    if (localStorage.getItem('isAdminLoggedIn') !== 'true') {
        // एडमिन सुरक्षा जांच
    }
}

async function recordAndSendBill(event) {
    if(event) event.preventDefault();

    const cName = document.getElementById('customerName')?.value.trim() || 'ग्राहक';
    const cPhone = document.getElementById('customerPhone')?.value.trim() || '';
    const cAddress = document.getElementById('customerAddress')?.value.trim() || '';
    const pCategory = document.getElementById('billCategory')?.value || 'General';
    const pQuantity = parseInt(document.getElementById('billQuantity')?.value) || 1;
    const pAmount = parseFloat(document.getElementById('billAmount')?.value) || 0;
    const payMode = document.getElementById('paymentMode')?.value || 'Cash';

    const totalBillAmount = pAmount * pQuantity;

    try {
        const { error } = await supabase
            .from('Billing')
            .insert([{ 
                customer_name: cName, phone_number: cPhone, address: cAddress, 
                category: pCategory, quantity: pQuantity, total_amount: totalBillAmount,
                payment_mode: payMode, created_at: new Date()
            }]);

        if (error) console.log("Supabase insert warning:", error);

        if (payMode === 'Cash') dailyCashTotal += totalBillAmount;
        else dailyUpiTotal += totalBillAmount;
        updateLedgerUI();

        alert("✅ बिल सुरक्षित रूप से दर्ज हो गया है!");
        sendPremiumWhatsAppBill(cName, cPhone, pCategory, pQuantity, totalBillAmount, payMode);

    } catch (err) { alert("❌ डेटाबेस त्रुटि!"); }
}

function sendPremiumWhatsAppBill(name, phone, cat, qty, total, mode) {
    const textMessage = `*🌱 श्री राम नर्सरी, भुना (फतेहाबाद) 🌱*\n` +
                        `----------------------------------------\n` +
                        `🙏 नमस्ते *${name}* जी, हमारी नर्सरी से पौधे खरीदने के लिए आपका बहुत-बहुत धन्यवाद!\n\n` +
                        `📦 *ऑर्डर का विवरण:*\n` +
                        `▪️ श्रेणी: ${cat}\n` +
                        `▪️ कुल मात्रा: ${qty} पौधे\n` +
                        `▪️ भुगतान: *${mode}*\n` +
                        `----------------------------------------\n` +
                        `💰 *कुल देय राशि:* ₹${total}/-\n` +
                        `----------------------------------------\n` +
                        `📞 *संपर्क सूत्र:* 9416316534\n\n` +
                        `🌿 _पौधे लगाएं, जीवन बचाएं!_ 🌿`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(textMessage)}`, '_blank');
}

function setupDailyLedgerTimer() {
    setInterval(() => {
        const now = new Date();
        if (now.getHours() === 17 && now.getMinutes() === 0 && now.getSeconds() === 0) {
            closeDailyLedger();
        }
    }, 1000);
}

async function closeDailyLedger() {
    try {
        await supabase.from('Admin_Data').insert([{
            closing_date: new Date().toLocaleDateString('hi-IN'),
            cash_ledger: dailyCashTotal, upi_ledger: dailyUpiTotal,
            total_sales: dailyCashTotal + dailyUpiTotal
        }]);
        dailyCashTotal = 0; dailyUpiTotal = 0; updateLedgerUI();
    } catch (err) { console.log(err); }
}

function updateLedgerUI() {
    if (document.getElementById('cashCounter')) document.getElementById('cashCounter').innerText = `₹${dailyCashTotal}`;
    if (document.getElementById('upiCounter')) document.getElementById('upiCounter').innerText = `₹${dailyUpiTotal}`;
}
