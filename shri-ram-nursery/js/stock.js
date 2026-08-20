// Provides the client-side stock storage boundary without creating stock data.
// TODO: Replace localStorage persistence with the approved production data source.

const STOCK_STORAGE_KEY = "shri-ram-nursery-stock";

async function loadStock() {
  const response = await fetch("./data/stock.json", { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Unable to load stock.");
  }
  return response.json();
}

function saveStock(stock) {
  if (!Array.isArray(stock)) {
    throw new TypeError("Stock must be an array.");
  }
  localStorage.setItem(STOCK_STORAGE_KEY, JSON.stringify(stock));
  return stock;
}

function updateStock(stock, itemId, changes) {
  if (!Array.isArray(stock)) {
    throw new TypeError("Stock must be an array.");
  }

  return stock.map((item) =>
    item && item.id === itemId ? { ...item, ...changes } : item
  );
}

function getStock() {
  const storedStock = localStorage.getItem(STOCK_STORAGE_KEY);
  if (!storedStock) {
    return [];
  }

  const stock = JSON.parse(storedStock);
  if (!Array.isArray(stock)) {
    throw new TypeError("Stored stock must be an array.");
  }
  return stock;
}