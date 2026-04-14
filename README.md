# 🗓️ Yogesh Automation — Calendar Popup Cypress Tests

Cypress E2E automation suite for the **React DatePicker** calendar popup app.

---

## 📁 Project Structure

```
Calendar-popup/
├── cypress/
│   ├── e2e/
│   │   └── calendar_popup.cy.js   ← 🔥 All 7 test cases
│   └── support/
│       ├── commands.js             ← Custom commands
│       └── e2e.js                  ← Global support entry
├── cypress.config.js               ← Cypress config (baseUrl: localhost:5173)
└── package.json
```

---

## ✅ Test Cases

| ID     | Test Case                              | Selector Used                              |
|--------|----------------------------------------|--------------------------------------------|
| TC_01  | Calendar is visible                    | `.react-datepicker`                        |
| TC_02  | Current month is April 2026            | `.react-datepicker__current-month`         |
| TC_03  | Select available date (15)             | `.react-datepicker__day` (non-disabled)    |
| TC_04  | Disabled dates are not clickable       | `.react-datepicker__day--disabled`         |
| TC_05  | Navigate to next month (May 2026)      | `.react-datepicker__navigation--next`      |
| TC_06  | Today's date is highlighted            | `.today-day` + `--today`                   |
| TC_07  | PRO: Navigate & select May 10          | Navigation + day click + `#result-display` |

---

## 🚀 How to Run

### Step 1 — Start the React app (in a separate terminal)

```bash
cd d:\M65\Cypress\custom-website-by-yogesh
npm run dev
```

> App runs on **http://localhost:5173**

### Step 2 — Run Cypress

```bash
cd d:\M65\Cypress\Calendar-popup

# Interactive (GUI) mode — recommended for learning
npm run cy:open

# Headless mode — fastest
npm run cy:run

# Headed + stays open after run
npm run cy:run:headed
```

---

## 🧠 DOM Reference (Real Selectors)

```
.react-datepicker                    → Entire calendar widget
.react-datepicker__header            → Header (month + nav)
.react-datepicker__current-month     → "April 2026" text
.react-datepicker__navigation--next  → ▶ next month button
.react-datepicker__navigation--prev  → ◀ prev month button
.react-datepicker__month             → Days grid container
.react-datepicker__day               → Each day cell
.react-datepicker__day--disabled     → Disabled days (past)
.react-datepicker__day--today        → Today's date (lib class)
.today-day                           → Today (custom class from App)
#result-display                      → Selected date result box
```

---

## 🛠️ Custom Commands

```javascript
// Select a calendar day by number
cy.selectCalendarDay(15)

// Navigate calendar (direction: 'next' | 'prev', times: number)
cy.navigateCalendar('next', 1)
cy.navigateCalendar('prev', 2)
```
