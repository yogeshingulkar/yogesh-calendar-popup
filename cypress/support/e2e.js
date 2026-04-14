// ============================================================
// Cypress Support — e2e.js
// ============================================================
// This file runs before every E2E spec file.
// Import commands and global configurations here.
// ============================================================

import "./commands";

Cypress.on("uncaught:exception", (err) => {

  if (
    err.message.includes("ResizeObserver") ||
    err.message.includes("transition")
  ) {
    return false;
  }
});
