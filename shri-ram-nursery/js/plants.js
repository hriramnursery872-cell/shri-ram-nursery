// पौधों को होम स्क्रीन पर दिखाने और मैनेज करने की स्क्रिप्ट
function renderPlantCards(plantsList) {
    const container = document.getElementById('plants-container');
    if (!container) return;
    container.innerHTML = '';

    plantsList.forEach(plant => {
        const card = document.createElement('div');
        card.className = 'plant-card';
        
        // कार्ड का नया स्ट्रक्चर (बिना WhatsApp बटन के)
        card.innerHTML = `
            <div class="plant-image-container">
                <img src="${plant.image_url || 'assets/logo.png'}" alt="${plant.name_variety || 'पौधा'}" class="plant-image">
                <span class="availability-badge ${plant.availability === 'उपलब्ध है' ? 'available' : 'unavailable'}">
                    ● ${plant.availability || 'उपलब्ध है'}
                </span>
            </div>
            <div class="plant-info">
                <span class="category-tag">${plant.category || 'फलदार पौधे'}</span>
                <h3>${plant.name_variety || 'पौधे का नाम'}</h3>
                <p class="tip"><strong>🌱 देखभाल की टिप:</strong> ${plant.care_tip || 'नियमित पानी दें।'}</p>
                <p class="use"><strong>💊 औषधीय उपयोग:</strong> ${plant.medical_use || 'स्वास्थ्य के लिए लाभकारी।'}</p>
            </div>
            <div class="card-actions">
                <button class="btn-details" onclick="viewPlantDetails('${plant.id}')">★ Details</button>
            </div>
            <div class="card-foot-actions">
                <button class="btn-like" onclick="toggleLike('${plant.id}')">♡ Like</button>
                <button class="btn-share" onclick="sharePlant('${plant.id}', '${plant.name_variety}')">🔗 Share</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// बाकी के सहायक फंक्शन को चालू रखना
function viewPlantDetails(id) {
    window.location.href = `plant.html?id=${id}`;
}

function toggleLike(id) {
    alert('पौधा आपकी पसंदीदा लिस्ट में जोड़ा गया!');
}

function sharePlant(id, name) {
    if (navigator.share) {
        navigator.share({
            title: name,
            url: window.location.origin + `/plant.html?id=${id}`
        });
    } else {
        alert(`लिंक कॉपी करें: ${window.location.origin}/plant.html?id=${id}`);
    }
}

// असली कस्टमर एक्टिविटी (Views, Likes, Shares) को ट्रैक करने का लाइव लॉजिक
async function incrementAnalyticsMetric(metricName) {
    try {
        const { data: currentData, error } = await supabase
            .from('analytics')
            .select('metric_value')
            .eq('metric_name', metricName)
            .single();
            
        if (currentData && !error) {
            await supabase
                .from('analytics')
                .update({ metric_value: currentData.metric_value + 1 })
                .eq('metric_name', metricName);
        }
    } catch (err) {
        console.error("एनालिटिक्स डेटाबेस अपडेट त्रुटि:", err);
    }
}

// वेबसाइट ओपन होते ही रियल व्यू काउंट करना
document.addEventListener("DOMContentLoaded", () => {
    if (!window.location.pathname.includes('admin') && !window.location.pathname.includes('dashboard')) {
        incrementAnalyticsMetric('total_views');
    }
});

// रियल लाइक को डेटाबेस में काउंट करना
if (typeof toggleLike !== 'undefined') {
    toggleLike = function(id) {
        incrementAnalyticsMetric('total_likes');
        alert('पौधा आपकी पसंदीदा लिस्ट में जोड़ा गया!');
    };
}

// रियल शेयर को डेटाबेस में काउंट करना
if (typeof sharePlant !== 'undefined') {
    sharePlant = function(id, name) {
        incrementAnalyticsMetric('total_shares');
        if (navigator.share) {
            navigator.share({
                title: name,
                url: window.location.origin + `/plant.html?id=${id}`
            });
        } else {
            alert(`लिंक कॉपी करें: ${window.location.origin}/plant.html?id=${id}`);
        }
    };
}

// PWA सर्विस वर्कर रजिस्ट्रेशन
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(reg => console.log('Service Worker Registered!', reg))
            .catch(err => console.log('Service Worker Setup Failed!', err));
    });
}

// "Add to Home Screen" पॉप-अप (Install Prompt) कैप्चर करना
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    // ब्राउज़र के डिफ़ॉल्ट पॉप-अप को रोकें ताकि हम इसे सही समय पर दिखा सकें
    e.preventDefault();
    deferredPrompt = e;
    
    // ग्राहकों को स्क्रीन पर एक सुंदर पॉप-अप या बैनर दिखाने के लिए यहाँ लॉजिक एक्टिवेट कर सकते हैं
    console.log('PWA Install prompt ready to show.');
    
    // आप चाहें तो 3 सेकंड बाद ऑटोमैटिक इंस्टॉल प्रॉम्प्ट ट्रिगर कर सकते हैं:
    setTimeout(() => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('Customer accepted the install prompt');
                }
                deferredPrompt = null;
            });
        }
    }, 3000); // होम पेज पर आने के 3 सेकंड बाद पॉप-अप दिखेगा
});
