// Order loading and localStorage boundary without creating order data.

const ORDERS_STORAGE_KEY = "shri-ram-nursery-orders";

async function loadOrders() {
  const response = await fetch("./data/orders.json", { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Unable to load orders.");
  }
  return response.json();
}

function saveOrders(orders) {
  if (!Array.isArray(orders)) {
    throw new TypeError("Orders must be an array.");
  }
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
  return orders;
}

function getOrders() {
  const storedOrders = localStorage.getItem(ORDERS_STORAGE_KEY);
  if (!storedOrders) {
    return [];
  }
  const orders = JSON.parse(storedOrders);
  if (!Array.isArray(orders)) {
    throw new TypeError("Stored orders must be an array.");
  }
  return orders;
}