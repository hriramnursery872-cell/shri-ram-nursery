// Defines the authentication boundary for future secure auth integration.
// TODO: Connect these functions to the production authentication provider.

/**
 * Starts an authentication flow.
 * Authentication must be connected to a trusted provider before use.
 */
async function login() {
  throw new Error("Authentication provider is not configured.");
}

/**
 * Ends the current authenticated session.
 * This is intentionally a no-op until the auth provider is connected.
 */
async function logout() {
  return false;
}

/**
 * Checks whether the current session is valid.
 * A real implementation must validate the session with the auth provider.
 */
async function sessionCheck() {
  return false;
}