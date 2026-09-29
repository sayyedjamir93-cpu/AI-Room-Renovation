const photoLibrary = {
  living: {
    room: "Living room",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    after: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=90"
  },
  bedroom: {
    room: "Bedroom",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
    after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90"
  },
  kitchen: {
    room: "Kitchen",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    after: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90"
  }
};

const variationCatalog = {
  Scandinavian: [
    { name: "Soft & natural", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=90" },
    { name: "Light & layered", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90" },
    { name: "Clean slate", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90" },
    { name: "Warm minimal", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90" }
  ],
  Japandi: [
    { name: "Quiet balance", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=90" },
    { name: "Natural textures", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90" },
    { name: "Low & restful", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90" },
    { name: "Earth tones", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90" }
  ],
  "Modern luxury": [
    { name: "Quiet luxury", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90" },
    { name: "Polished contrast", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90" },
    { name: "Sculptural calm", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=90" },
    { name: "Rich materials", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90" }
  ],
  Minimalist: [
    { name: "Clear & calm", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90" },
    { name: "Soft geometry", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90" },
    { name: "Open space", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=90" },
    { name: "Warm white", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90" }
  ],
  Industrial: [
    { name: "Raw & refined", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90" },
    { name: "Urban warmth", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90" },
    { name: "Steel & timber", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90" },
    { name: "Collected loft", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=90" }
  ],
  Bohemian: [
    { name: "Collected home", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=90" },
    { name: "Sun-washed", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90" },
    { name: "Pattern & patina", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90" },
    { name: "Lived-in layers", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90" }
  ]
};

const budgetCatalog = {
  affordable: {
    label: "AFFORDABLE",
    message: "Budget-friendly updates using what you already own, with simple swaps that make a visible difference.",
    directions: ["Smart refresh", "Low-cost layers", "Easy weekend", "Secondhand charm"]
  },
  "mid-range": {
    label: "MID-RANGE",
    message: "A practical family-friendly plan: reuse the layout, prioritize the biggest wins, and spend carefully where it shows.",
    directions: ["Best-value refresh", "Comfort upgrade", "Worthwhile swap", "Balanced plan"]
  },
  flexible: {
    label: "FLEXIBLE",
    message: "A considered plan with room for a few statement pieces, while keeping the overall result livable and intentional.",
    directions: ["Polished refresh", "Statement comfort", "Layered finish", "Collected look"]
  }
};

const fileInput = document.querySelector("#file-input");
const dropzone = document.querySelector("#upload-dropzone");
const roomPreview = document.querySelector("#room-preview");
const originalImage = document.querySelector("#compare-original");
const afterImage = document.querySelector("#compare-after");
const errorMessage = document.querySelector("#upload-error");
const resultSection = document.querySelector("#results");
const compareRange = document.querySelector("#compare-range");
const compareBefore = document.querySelector("#compare-before");
const compareDivider = document.querySelector("#compare-divider");
const toast = document.querySelector("#toast");
const variationGrid = document.querySelector("#variation-grid");
const variationCount = document.querySelector(".variation-count");
const notesInput = document.querySelector("#custom-notes");
const resultBrief = document.querySelector("#result-brief");

let currentImage = photoLibrary.living.image;
let currentStyle = "Scandinavian";
let currentRoom = "Living room";
let currentObjectUrl = null;
let toastTimer;
let generationNumber = 0;
let activeVariations = variationCatalog.Scandinavian;
let currentBudget = "mid-range";

function setRoomImage(image, room) {
  currentImage = image;
  currentRoom = room;
  roomPreview.src = image;
  originalImage.src = image;
  const roomButton = [...document.querySelectorAll(".room-option")].find(button => button.dataset.room.toLowerCase() === room.toLowerCase());
  if (roomButton) selectRoom(roomButton);
}

function selectRoom(button) {
  document.querySelectorAll(".room-option").forEach(option => option.classList.toggle("is-selected", option === button));
  currentRoom = button.dataset.room;
}

function selectStyle(button) {
  document.querySelectorAll(".style-option").forEach(option => option.classList.toggle("is-selected", option === button));
  currentStyle = button.dataset.style;
}

function selectBudget(button) {
  document.querySelectorAll(".budget-option").forEach(option => option.classList.toggle("is-selected", option === button));
  currentBudget = button.dataset.budget;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2700);
}

function useSample(key) {
  const sample = photoLibrary[key];
  if (!sample) return;
  setRoomImage(sample.image, sample.room);
  errorMessage.hidden = true;
  resultSection.hidden = true;
  document.querySelector("#studio").scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleFiles(files) {
  const file = files?.[0];
  if (!file) return;
  const supportedTypes = ["image/jpeg", "image/png", "image/webp"];
  if (!supportedTypes.includes(file.type)) {
    errorMessage.textContent = "That file type isn't supported. Choose a JPG, PNG, or WEBP image.";
    errorMessage.hidden = false;
    document.querySelector("#studio").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  if (file.size > 15 * 1024 * 1024) {
    errorMessage.textContent = "This photo is a little too large. Please choose an image under 15 MB.";
    errorMessage.hidden = false;
    document.querySelector("#studio").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  if (currentObjectUrl) URL.revokeObjectURL(currentObjectUrl);
  currentObjectUrl = URL.createObjectURL(file);
  setRoomImage(currentObjectUrl, currentRoom);
  errorMessage.hidden = true;
  resultSection.hidden = true;
  document.querySelector("#studio").scrollIntoView({ behavior: "smooth", block: "start" });
}

function setComparePosition(value) {
  compareBefore.style.width = `${value}%`;
  compareDivider.style.left = `${value}%`;
}

function selectVariation(index) {
  const variation = activeVariations[index];
  if (!variation) return;
  document.querySelectorAll(".variation-card").forEach((card, cardIndex) => card.classList.toggle("is-selected", cardIndex === index));
  afterImage.src = variation.image;
  variationCount.innerHTML = `${String(index + 1).padStart(2, "0")} <i>/</i> ${String(activeVariations.length).padStart(2, "0")}`;
}

function renderVariations(selectedIndex = 0) {
  const budget = budgetCatalog[currentBudget];
  activeVariations = (variationCatalog[currentStyle] || variationCatalog.Scandinavian).map((variation, index) => ({
    ...variation,
    name: budget.directions[index]
  }));
  variationGrid.innerHTML = activeVariations.map((variation, index) => `
    <button class="variation-card${index === selectedIndex ? " is-selected" : ""}" type="button" data-variation="${index}">
      <img src="${variation.image.replace("w=1800", "w=600")}" alt="${variation.name} interior variation" />
      <span>${variation.name} <i>↗</i></span>
    </button>
  `).join("");
  variationGrid.querySelectorAll(".variation-card").forEach((button, index) => button.addEventListener("click", () => selectVariation(index)));
  selectVariation(selectedIndex);
}

function startGeneration() {
  const button = document.querySelector("#generate-button");
  const overlay = document.querySelector("#generating-overlay");
  const loadingMessage = document.querySelector("#loading-message");
  const budget = budgetCatalog[currentBudget];
  const notes = notesInput.value.trim();
  const messageSet = ["Reading the light in your room...", `Planning a ${budget.label.toLowerCase()} ${currentStyle} direction...`, notes ? "Applying your personal priorities..." : "Putting the finishing touches on..."];
  const messageTimers = messageSet.map((message, index) => setTimeout(() => { loadingMessage.textContent = message; }, index * 850));
  const selectedVariation = generationNumber % activeVariations.length;
  generationNumber += 1;

  button.classList.add("is-loading");
  button.querySelector("span").textContent = "Finding your fresh perspective...";
  overlay.hidden = false;
  resultSection.hidden = false;
  renderVariations(selectedVariation);
  originalImage.src = currentImage;
  document.querySelector("#result-style-tag").textContent = `${currentStyle.toUpperCase()} · ${budget.label}`;
  resultBrief.textContent = notes ? `${budget.message} Focus: ${notes}` : budget.message;
  document.querySelector("#results-title").innerHTML = `A fresh take on <em>${currentRoom.toLowerCase()}.</em>`;
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });

  setTimeout(() => {
    messageTimers.forEach(clearTimeout);
    overlay.hidden = true;
    button.classList.remove("is-loading");
    button.querySelector("span").textContent = "Let’s see the possibilities";
    setComparePosition(compareRange.value);
  }, 2800);
}

document.querySelector("#upload-button").addEventListener("click", () => fileInput.click());
document.querySelector("#change-photo").addEventListener("click", () => fileInput.click());
dropzone.addEventListener("click", () => fileInput.click());
dropzone.addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    fileInput.click();
  }
});
fileInput.addEventListener("change", event => handleFiles(event.target.files));
document.querySelectorAll(".sample-button").forEach(button => button.addEventListener("click", () => useSample(button.dataset.sample)));
document.querySelectorAll(".room-option").forEach(button => button.addEventListener("click", () => selectRoom(button)));
document.querySelectorAll(".style-option").forEach(button => button.addEventListener("click", () => selectStyle(button)));
document.querySelectorAll(".budget-option").forEach(button => button.addEventListener("click", () => selectBudget(button)));
document.querySelectorAll("[data-pick-style]").forEach(button => button.addEventListener("click", () => {
  const styleButton = [...document.querySelectorAll(".style-option")].find(option => option.dataset.style === button.dataset.pickStyle);
  if (styleButton) selectStyle(styleButton);
  document.querySelector("#studio").scrollIntoView({ behavior: "smooth", block: "start" });
}));
document.querySelector("#generate-button").addEventListener("click", startGeneration);
compareRange.addEventListener("input", event => setComparePosition(event.target.value));
document.querySelector("#try-again").addEventListener("click", () => {
  resultSection.hidden = true;
  document.querySelector("#studio").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#download-result").addEventListener("click", async () => {
  try {
    const response = await fetch(afterImage.src);
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "roomrevamp-concept.jpg";
    link.click();
    URL.revokeObjectURL(link.href);
  } catch {
    showToast("Image download isn't available for this preview.");
  }
});

document.querySelector("#share-result").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href.split("#")[0] + "#results");
    showToast("Share link copied to clipboard.");
  } catch {
    showToast("Your concept is ready to share from this page.");
  }
});

const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  document.querySelector(".main-nav").classList.toggle("is-open", !isOpen);
});
document.querySelectorAll(".main-nav a").forEach(link => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  document.querySelector(".main-nav").classList.remove("is-open");
}));

for (const eventName of ["dragenter", "dragover"]) {
  dropzone.addEventListener(eventName, event => {
    event.preventDefault();
    dropzone.classList.add("is-dragging");
  });
}
for (const eventName of ["dragleave", "drop"]) {
  dropzone.addEventListener(eventName, event => {
    event.preventDefault();
    dropzone.classList.remove("is-dragging");
  });
}
dropzone.addEventListener("drop", event => handleFiles(event.dataTransfer.files));

setComparePosition(compareRange.value);
renderVariations();