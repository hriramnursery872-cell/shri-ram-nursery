// ==========================================
// 🌱 श्री राम नर्सरी (भुना) - प्रीमियम फीचर्स मॉड्यूल
// ==========================================

// --- 1. WHATSAPP CART/LIST MODULE ---
window.customerCart = [];

window.addPlantToCartList = function(plantName, quantity) {
    if (!plantName) return alert("कृपया पौधा चुनें!");
    const existingItem = window.customerCart.find(item => item.name === plantName);
    if (existingItem) {
        existingItem.qty += parseInt(quantity);
    } else {
        window.customerCart.push({ name: plantName, qty: parseInt(quantity) });
    }
    alert(`✅ ${plantName} (${quantity} मात्रा) आपकी लिस्ट में जुड़ गया है!`);
    if (typeof window.renderCustomerCartUI === 'function') window.renderCustomerCartUI();
};

window.renderCustomerCartUI = function() {
    const cartContainer = document.getElementById('customer-cart-list-preview');
    if (!cartContainer) return;
    
    if (window.customerCart.length === 0) {
        cartContainer.innerHTML = "<p style='color:gray; font-size:13px;'>आपकी लिस्ट अभी खाली है।</p>";
        return;
    }
    
    let html = '<ul style="list-style:none; padding:0; font-size:14px;">';
    window.customerCart.forEach((item, index) => {
        html += `<li style="margin-bottom:8px; border-bottom:1px dashed #ccc; padding-bottom:4px;">
            🍀 <b>${item.name}</b> - मात्रा: ${item.qty} पीस
            <button onclick="window.customerCart.splice(${index},1); window.renderCustomerCartUI();" style="background:none; border:none; color:red; float:right; cursor:pointer;">❌</button>
        </li>`;
    });
    html += '</ul>';
    cartContainer.innerHTML = html;
};

window.shareCartToMyWhatsApp = function() {
    if (window.customerCart.length === 0) {
        alert("WhatsApp पर शेयर करने के लिए पहले लिस्ट में पौधे जोड़ें!");
        return;
    }
    let message = "🌱 *श्री राम नर्सरी (भुना) - मेरी पसंदीदा पौधों की लिस्ट* 🌱\n\n";
    window.customerCart.forEach((item, i) => {
        message += `${i + 1}. ${item.name} → *${item.qty} पीस*\n`;
    });
    message += "\n📍 याद रखने के लिए सुरक्षित सहेजें!";
    const whatsappUrl = `https://whatsapp.com{encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
};

// --- 2. PREMIUM SMART VOICE SEARCH MODULE ---
window.startVoiceSearch = function() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("🎤 क्षमा करें, आपके ब्राउज़र में वॉइस सर्च सपोर्ट नहीं करता है।");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'hi-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    const searchInput = document.getElementById('plant-search-input') || document.querySelector('.search-bar-input');
    if (searchInput) searchInput.placeholder = "🎤 सुन रहा हूँ... बोलिए...";

    recognition.start();

    recognition.onresult = (event) => {
        const speechToText = event.results[0].transcript.toLowerCase().trim();
        if (searchInput) {
            searchInput.value = speechToText;
            searchInput.placeholder = "पौधे खोजें...";
            if (typeof filterPlants === 'function') filterPlants(speechToText);
            else if (typeof loadPlants === 'function') loadPlants(speechToText);
        }
        alert(`🔍 आपने बोला: "${speechToText}"`);
    };

    recognition.onerror = () => {
        if (searchInput) searchInput.placeholder = "पौधे खोजें...";
    };
    recognition.onend = () => {
        if (searchInput && searchInput.placeholder === "🎤 सुन रहा हूँ... बोलिए...") searchInput.placeholder = "पौधे खोजें...";
    };
};

// --- 3. PWA AUTO-INSTALL PROMPT & ANALYTICS ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').catch(err => console.log(err));
    });
}

async function incrementAnalyticsMetric(metricName) {
    try {
        if (typeof supabase !== 'undefined') {
            const { data: currentData } = await supabase.from('analytics').select('metric_value').eq('metric_name', metricName).single();
            if (currentData) {
                await supabase.from('analytics').update({ metric_value: currentData.metric_value + 1 }).eq('metric_name', metricName);
            }
        }
    } catch (err) { console.error(err); }
}

document.addEventListener("DOMContentLoaded", () => {
    if (!window.location.pathname.includes('admin') && !window.location.pathname.includes('dashboard')) {
        incrementAnalyticsMetric('total_views');
    }
});

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    setTimeout(() => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt = null;
        }
    }, 4000);
});
