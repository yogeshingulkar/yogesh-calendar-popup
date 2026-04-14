describe("Calendar Popup", () => {
  beforeEach(() => {
    cy.visit("https://calendar-yogesh.vercel.app/");
    cy.get(".react-datepicker", { timeout: 8000 }).should("be.visible");
  });

  it("TC_01 — Verify calendar is visible", () => {
    cy.get(".react-datepicker").should("be.visible");

    cy.get(".react-datepicker__header").should("exist");
    cy.get(".react-datepicker__month").should("exist");

    cy.log("TC_01 PASSED — Calendar is visible");
  });

  it("TC_02 — Verify current month shows April 2026", () => {
    cy.get(".react-datepicker__current-month")
      .should("be.visible")
      .and("contain", "April 2026");

    cy.log("TC_02 PASSED - Correct month displayed: April 2026");
  });

  it("TC_03 — Select available date (15)", () => {
    cy.get(".react-datepicker__day")
      .not(".react-datepicker__day--disabled")
      .not(".react-datepicker__day--outside-month")
      .contains(/^15$/)
      .click();

    cy.get("#result-display")
      .should("be.visible")
      .and("contain", "15");

    cy.log("TC_03 PASSED - Date 15 selected and shown in result display");
  });

  it("TC_04 — Disabled dates are not clickable", () => {
    cy.get(".react-datepicker__day--disabled").should("exist");

    cy.get(".react-datepicker__day--disabled").each(($day) => {
      cy.wrap($day).should("have.attr", "aria-disabled", "true");
    });

    cy.get(".react-datepicker__day--disabled")
      .not(".react-datepicker__day--outside-month")
      .first()
      .click({ force: false });

    cy.get("#result-display").should("contain", "No date selected yet");

    cy.log("TC_04 PASSED - Disabled dates are not clickable");
  });

  it("TC_05 — Navigate to next month (May 2026)", () => {
    cy.get(".react-datepicker__current-month").should("contain", "April 2026");

    cy.get(".react-datepicker__navigation--next")
      .should("be.visible")
      .click();

    cy.get(".react-datepicker__current-month")
      .should("not.contain", "April")
      .and("contain", "May 2026");

    cy.log("TC_05 PASSED - Navigated to May 2026");
  });

  it("TC_06 — Verify today is highlighted", () => {
    cy.get(".today-day")
      .should("exist")
      .and("be.visible");

    cy.get(".today-day").should(
      "have.class",
      "react-datepicker__day--today"
    );

    cy.log("TC_06 PASSED - Today is highlighted with .today-day class");
  });

  it("TC_07 — PRO: Navigate next month and select date 10 dynamically", () => {
    const day = 10;

    cy.get(".react-datepicker__navigation--next").click();

    cy.get(".react-datepicker__current-month")
      .should("not.contain", "April")
      .and("contain", "May 2026");

    cy.get(".react-datepicker__day")
      .not(".react-datepicker__day--outside-month")
      .contains(new RegExp(`^${day}$`))
      .click();

    cy.get("#result-display")
      .should("be.visible")
      .and("contain", `${day}`);

    cy.log(`TC_07 PASSED - Navigated to May and selected day ${day}`);
  });
});
