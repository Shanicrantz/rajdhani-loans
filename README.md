# Rajdhani Smart Loan & Debt Portfolio Tracker

A high-performance web application designed to track bank loans, monthly EMI auto-deductions across debit accounts, prepayment schedules, and private commitments.

## Features
- **Dual View Modes**:
  - **Internal View**: Full access to bank loans + private commitments + total combined cash outflow.
  - **Shareable View (`?mode=share`)**: Public mode that automatically hides sensitive "Other Commitments" and private payouts.
- **Debit Account Wise EMI Breakup**: Automated aggregation for Debit Accounts (`3981`, `4919`, `7491`, `3162`).
- **Amortization Schedule Engine**: Month-by-month principal vs interest breakdown with CSV export.
- **Prepayment & Early Payoff Simulator**: Calculate interest and tenure saved by extra EMI or lump-sum prepayments.

## Deployment & Usage
- Open `index.html` in any modern web browser.
- Append `?mode=share` to the URL when sharing with third parties or external reviewers.
