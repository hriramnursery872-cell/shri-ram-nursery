// एडमिन लॉगिन ऑथेंटिकेशन स्क्रिप्ट
function handleAdminLogin(enteredPhone, enteredPin) {
    const officialPhone = "9416316534";
    const correctPin = "941631";

    if (enteredPhone.trim() === officialPhone && enteredPin.trim() === correctPin) {
        localStorage.setItem('isAdminAuthenticated', 'true');
        localStorage.setItem('adminPhone', officialPhone);
        alert('लॉगिन सफल! एडमिन डैशबोर्ड पर भेजा जा रहा है।');
        window.location.href = 'dashboard.html';
    } else {
        alert('त्रुटि: गलत आधिकारिक मोबाइल नंबर या सुरक्षा पिन!');
    }
}

function checkAdminRouteProtection() {
    const isAuthenticated = localStorage.getItem('isAdminAuthenticated');
    if (isAuthenticated !== 'true' && window.location.pathname.includes('dashboard.html')) {
        alert('सुरक्षा जांच: कृपया पहले लॉगिन करें!');
        window.location.href = 'admin.html';
    }
}
// पेज लोड होने पर रूट प्रोटेक्शन चालू रखें
if (window.location.pathname.includes('dashboard.html')) {
    checkAdminRouteProtection();
}
