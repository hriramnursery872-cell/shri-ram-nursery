// Defines ledger operations for future sales and expense persistence.
// TODO: Connect ledger persistence to the approved production data source.

const LEDGER_STORAGE_KEY = "shri-ram-nursery-ledger";

function readLedger() {
  const storedLedger = localStorage.getItem(LEDGER_STORAGE_KEY);
  if (!storedLedger) {
    return [];
  }

  const ledger = JSON.parse(storedLedger);
  if (!Array.isArray(ledger)) {
    throw new TypeError("Stored ledger must be an array.");
  }
  return ledger;
}

function writeLedger(ledger) {
  if (!Array.isArray(ledger)) {
    throw new TypeError("Ledger must be an array.");
  }
  localStorage.setItem(LEDGER_STORAGE_KEY, JSON.stringify(ledger));
  return ledger;
}

function addSale(sale) {
  return writeLedger([...readLedger(), { ...sale, type: "sale" }]);
}

function addExpense(expense) {
  return writeLedger([...readLedger(), { ...expense, type: "expense" }]);
}

function getDailyReport(date = new Date().toISOString().slice(0, 10)) {
  return readLedger().filter((entry) => entry.date === date);
}