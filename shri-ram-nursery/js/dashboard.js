// एडमिन डैशबोर्ड पर लाइव असली आंकड़े दिखाने की स्क्रिप्ट
async function loadLiveAnalytics() {
    const viewsEl = document.getElementById('total-views-count') || document.querySelector('.analytics-views-text');
    const likesEl = document.getElementById('total-likes-count') || document.querySelector('.analytics-likes-text');
    const sharesEl = document.getElementById('total-shares-count') || document.querySelector('.analytics-shares-text');

    const { data, error } = await supabase
        .from('analytics')
        .select('*');

    if (error) {
        console.error("लाइव डेटा लोड करने में समस्या:", error.message);
        return;
    }

    if (data) {
        const viewsData = data.find(item => item.metric_name === 'total_views');
        const likesData = data.find(item => item.metric_name === 'total_likes');
        const sharesData = data.find(item => item.metric_name === 'total_shares');

        if (viewsData && viewsEl) viewsEl.innerText = viewsData.metric_value;
        if (likesData && likesEl) likesEl.innerText = likesData.metric_value;
        if (sharesData && sharesEl) sharesEl.innerText = sharesData.metric_value;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadLiveAnalytics();
    // हर 15 सेकंड में ऑटो-रिफ्रेश ताकि लाइव कस्टमर आते ही काउंट बढ़ता दिखे
    setInterval(loadLiveAnalytics, 15000);
});
