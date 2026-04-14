// ============================================================
// Cypress Support — commands.js
// ============================================================
// Add custom Cypress commands here.
// Examples: cy.login(), cy.selectDate(), etc.
// ============================================================

Cypress.Commands.add("selectCalendarDay", (dayNumber) => {
  cy.get(".react-datepicker__day")
    .not(".react-datepicker__day--disabled")
    .not(".react-datepicker__day--outside-month")
    .contains(new RegExp(`^${dayNumber}$`))
    .click();
});

Cypress.Commands.add("navigateCalendar", (direction, times = 1) => {
  const selector =
    direction === "next"
      ? ".react-datepicker__navigation--next"
      : ".react-datepicker__navigation--previous";

  for (let i = 0; i < times; i++) {
    cy.get(selector).click();
  }
});
