function o(e){const t=document.getElementById("plant-list");if(t){if(!Array.isArray(e)||e.length===0){t.innerHTML=`
      <div class="empty-state">
        <strong>No plants are currently listed.</strong>
        <p>Contact Shri Ram Nursery for current availability.</p>
      </div>
    `;return}t.innerHTML=e.map(n=>{const r=String(n.name||n.title||"").trim(),a=String(n.description||"").trim(),s=encodeURIComponent(String(n.id||r));return`
        <article class="plant-card">
          <h2>${i(r||"Plant")}</h2>
          ${a?`<p class="plant-meta">${i(a)}</p>`:""}
          <a class="button button-primary" href="./plant.html?id=${s}">View details</a>
        </article>
      `}).join("")}}function i(e){return e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}async function l(){const e=document.getElementById("plant-list");if(e)try{const t=await fetch("./data/plants.json",{cache:"no-store"});if(!t.ok)throw new Error("Plant data request failed.");o(await t.json())}catch{e.innerHTML=`
      <div class="empty-state">
        <strong>Plant availability is temporarily unavailable.</strong>
        <p>Please contact Shri Ram Nursery directly.</p>
      </div>
    `}}document.addEventListener("DOMContentLoaded",l);
