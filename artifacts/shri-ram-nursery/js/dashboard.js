// Loads the real plants JSON data and renders the current catalogue.

function renderPlants(plants) {
  const list = document.getElementById("plant-list");
  if (!list) {
    return;
  }

  if (!Array.isArray(plants) || plants.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <strong>No plants are currently listed.</strong>
        <p>Contact Shri Ram Nursery for current availability.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = plants
    .map((plant) => {
      const name = String(plant.name || plant.title || "").trim();
      const description = String(plant.description || "").trim();
      const id = encodeURIComponent(String(plant.id || name));
      return `
        <article class="plant-card">
          <h2>${escapeHtml(name || "Plant")}</h2>
          ${description ? `<p class="plant-meta">${escapeHtml(description)}</p>` : ""}
          <a class="button button-primary" href="./plant.html?id=${id}">View details</a>
        </article>
      `;
    })
    .join("");
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

async function loadPlantCatalogue() {
  const list = document.getElementById("plant-list");
  if (!list) {
    return;
  }

  try {
    const response = await fetch("./data/plants.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Plant data request failed.");
    }
    renderPlants(await response.json());
  } catch (error) {
    list.innerHTML = `
      <div class="empty-state">
        <strong>Plant availability is temporarily unavailable.</strong>
        <p>Please contact Shri Ram Nursery directly.</p>
      </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", loadPlantCatalogue);