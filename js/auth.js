// Authentication boundary for future secure provider integration.

async function login() {
  throw new Error("Authentication provider is not configured.");
}

async function logout() {
  return false;
}

async function sessionCheck() {
  return false;
}