// Shri Ram Nursery
// Admin Authentication Client
// Registered Admin Mobile: 9416316534
//
// IMPORTANT:
// OTP, PIN verification and the 2-device limit MUST be enforced
// by the server. Never store the real PIN or OTP in this file.

const ADMIN_PHONE = "9416316534";
const MAX_ADMIN_SESSIONS = 2;

const API_BASE = "/api/auth";

function normalizePhone(phone) {
  return String(phone || "").replace(/\D/g, "");
}

function isRegisteredAdminPhone(phone) {
  return normalizePhone(phone) === ADMIN_PHONE;
}

async function request(url, options = {}) {
  const response = await fetch(`${API_BASE}${url}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  });

  let data = {};

  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw new Error(
      data.message || "Authentication request failed."
    );
  }

  return data;
}

/**
 * Send OTP to the ONLY registered Admin number.
 */
async function sendAdminOTP(phone) {
  if (!isRegisteredAdminPhone(phone)) {
    throw new Error(
      "यह मोबाइल नंबर Admin के लिए अधिकृत नहीं है।"
    );
  }

  return request("/send-otp", {
    method: "POST",
    body: JSON.stringify({
      phone: ADMIN_PHONE
    })
  });
}

/**
 * Verify OTP.
 */
async function verifyAdminOTP(phone, otp) {
  if (!isRegisteredAdminPhone(phone)) {
    throw new Error(
      "यह मोबाइल नंबर Admin के लिए अधिकृत नहीं है।"
    );
  }

  if (!otp || String(otp).length < 4) {
    throw new Error("कृपया सही OTP डालें।");
  }

  return request("/verify-otp", {
    method: "POST",
    body: JSON.stringify({
      phone: ADMIN_PHONE,
      otp: String(otp)
    })
  });
}

/**
 * Login using the personal Admin PIN.
 *
 * PIN is NEVER stored in this JavaScript file.
 */
async function login(phone, pin) {
  if (!isRegisteredAdminPhone(phone)) {
    throw new Error(
      "केवल registered Admin mobile number से login किया जा सकता है।"
    );
  }

  if (!pin) {
    throw new Error("कृपया अपना Admin PIN डालें।");
  }

  return request("/login", {
    method: "POST",
    body: JSON.stringify({
      phone: ADMIN_PHONE,
      pin: String(pin),
      maxSessions: MAX_ADMIN_SESSIONS
    })
  });
}

/**
 * Check whether the current browser has a valid Admin session.
 */
async function sessionCheck() {
  try {
    const result = await request("/session", {
      method: "GET"
    });

    return Boolean(result.authenticated);
  } catch {
    return false;
  }
}

/**
 * Logout current Admin device/session.
 */
async function logout() {
  try {
    await request("/logout", {
      method: "POST"
    });

    return true;
  } catch {
    return false;
  }
}

/**
 * Forgot PIN:
 * OTP must be sent to the registered Admin number.
 */
async function forgotPIN(phone) {
  if (!isRegisteredAdminPhone(phone)) {
    throw new Error(
      "PIN केवल registered Admin number से ही recover किया जा सकता है।"
    );
  }

  return request("/forgot-pin", {
    method: "POST",
    body: JSON.stringify({
      phone: ADMIN_PHONE
    })
  });
}

/**
 * Set a new PIN after successful OTP verification.
 */
async function resetPIN(phone, otp, newPin) {
  if (!isRegisteredAdminPhone(phone)) {
    throw new Error(
      "यह मोबाइल नंबर Admin के लिए अधिकृत नहीं है।"
    );
  }

  if (!otp) {
    throw new Error("OTP जरूरी है।");
  }

  if (!newPin || String(newPin).length < 4) {
    throw new Error("नया PIN कम से कम 4 अंकों का होना चाहिए।");
  }

  return request("/reset-pin", {
    method: "POST",
    body: JSON.stringify({
      phone: ADMIN_PHONE,
      otp: String(otp),
      newPin: String(newPin)
    })
  });
}

/**
 * Ask the server how many Admin sessions are active.
 */
async function getAdminSessionInfo() {
  return request("/sessions", {
    method: "GET"
  });
}

/**
 * Export functions for admin.html/admin.js
 */
export {
  ADMIN_PHONE,
  MAX_ADMIN_SESSIONS,
  sendAdminOTP,
  verifyAdminOTP,
  login,
  sessionCheck,
  logout,
  forgotPIN,
  resetPIN,
  getAdminSessionInfo
};