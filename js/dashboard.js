function renderPlants(plants) {
    const list = document.getElementById('plant-list');
    if (!list) return;

    if (!Array.isArray(plants) || plants.length === 0) {
        list.innerHTML = `<p>कोई पौधा उपलब्ध नहीं है।</p>`;
        return;
    }

    list.innerHTML = plants.map((plant) => {
        const name = String(plant.name || "").trim();
        return `
            <div class="plant-card">
                <h3>${name}</h3>
                <p>श्रेणी: ${plant.category || 'General'}</p>
            </div>
        `;
    }).join("");
}

async function loadPlantCatalogue() {
    const list = document.getElementById('plant-list');
    if (!list) return;
    try {
        const response = await fetch('/data/plants.json', { cache: 'no-store' });
        if (!response.ok) throw new Error();
        renderPlants(await response.json());
    } catch (error) {
        renderPlants([]);
    }
}

document.addEventListener("DOMContentLoaded", loadPlantCatalogue);
