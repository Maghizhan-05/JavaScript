const input = document.getElementById("search-input");
const button = document.getElementById("search-button");

const nameEl = document.getElementById("creature-name");
const idEl = document.getElementById("creature-id");
const weightEl = document.getElementById("weight");
const heightEl = document.getElementById("height");
const typesEl = document.getElementById("types");
const descriptionEl = document.getElementById("description");

const hpEl = document.getElementById("hp");
const attackEl = document.getElementById("attack");
const defenseEl = document.getElementById("defense");
const specialAttackEl = document.getElementById("special-attack");
const specialDefenseEl = document.getElementById("special-defense");
const speedEl = document.getElementById("speed");

button.addEventListener("click", async () => {
  const query = input.value.trim();
  if (!query) return;

  const url = `https://rpg-creature-api.freecodecamp.rocks/api/creature/${query}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Creature not found");

    const data = await res.json();

    // Fill basic info
    nameEl.textContent = data.name.toUpperCase();
    idEl.textContent = `#${data.id}`;
    weightEl.textContent = data.weight;
    heightEl.textContent = data.height;

    // Special ability description
    descriptionEl.textContent = data.special?.description || "";

    // Clear and fill types
    typesEl.innerHTML = "";
    data.types.forEach(typeObj => {
      const span = document.createElement("span");
      const typeName = typeObj.name.toUpperCase();
      span.className = `type ${typeName}`;
      span.textContent = typeName;
      typesEl.appendChild(span);
    });

    // Map stats for easy lookup
    const statMap = {};
    data.stats.forEach(stat => {
      statMap[stat.name.toLowerCase()] = stat.base_stat;
    });

    // Set all stat values
    hpEl.textContent = statMap["hp"];
    attackEl.textContent = statMap["attack"];
    defenseEl.textContent = statMap["defense"];
    specialAttackEl.textContent = statMap["special-attack"];
    specialDefenseEl.textContent = statMap["special-defense"];
    speedEl.textContent = statMap["speed"];

  } catch (error) {
    alert("Creature not found");
  }
});