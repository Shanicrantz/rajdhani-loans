/**
 * Rajdhani Smart Loan & Debt Portfolio Tracker
 * Pre-populated with User's Exact Google Sheet Data
 * DEFAULT: Shareable Public View (Other Commitments 100% Hidden)
 * OWNER UNLOCK: Require PIN (Default: 786) or ?key=786 to view Internal Commitments
 */

// User's Exact Loans Master Dataset
const RAW_GSHEET_LOANS = [
    {
        id: 'loan_bajaj',
        name: 'Bajaj Finance (P4E7PHF9186638)',
        category: 'Personal Loan',
        loanAmount: 744836,
        alreadyRunning: 744836,
        balanceAmt: 672980,
        debitAccount: '3981',
        emi: 19404,
        dueDate: '2nd',
        tenure: '51 months remaining',
        interestRate: 19.2,
        remarks: 'Bajaj Flexi Statement updated as on 24-Jul-2026 (Utilized ₹6.73L)',
        status: 'Active'
    },
    {
        id: 'loan_aditya_birla',
        name: 'Aditya Birla',
        category: 'Personal Loan',
        loanAmount: 1922000,
        alreadyRunning: 0,
        balanceAmt: 2000000,
        debitAccount: '4919',
        emi: 74328,
        dueDate: '2/6/25',
        tenure: '36 months',
        interestRate: 13.0,
        remarks: '',
        status: 'Active'
    },
    {
        id: 'loan_poonawala_1',
        name: 'Poonawala',
        category: 'Business Loan',
        startDate: '10/3/25',
        loanAmount: 2925160,
        alreadyRunning: 0,
        balanceAmt: 3045049,
        debitAccount: '4919',
        emi: 109324,
        dueDate: '3/5/25',
        tenure: '36 months',
        interestRate: 12.5,
        remarks: 'advance emi paid on 1/1/26',
        status: 'Active'
    },
    {
        id: 'loan_tata_capital',
        name: 'Tata Capital',
        category: 'Personal Loan',
        startDate: '29/3/25',
        loanAmount: 1441897,
        alreadyRunning: 0,
        balanceAmt: 1500000,
        debitAccount: '7491',
        emi: 54089,
        dueDate: '5/5/25',
        tenure: '48 months',
        interestRate: 13.5,
        remarks: '',
        status: 'Active'
    },
    {
        id: 'loan_car_loan',
        name: 'Car Loan',
        category: 'Car Loan',
        startDate: '10/3/22',
        loanAmount: 0,
        alreadyRunning: 0,
        balanceAmt: 0,
        debitAccount: '7491',
        emi: 0,
        dueDate: '5/5',
        tenure: 'Closed',
        interestRate: 9.0,
        remarks: 'Closed',
        status: 'Closed'
    },
    {
        id: 'loan_hdfc_lap',
        name: 'HDFC LAP (801428107 - 45% Share)',
        category: 'Home Loan / LAP',
        loanAmount: 8910000,
        alreadyRunning: 8910000,
        balanceAmt: 8496728,
        debitAccount: '3981',
        emi: 93040,
        dueDate: '7th',
        tenure: '166 months',
        interestRate: 9.5,
        remarks: 'Total Loan ₹1.98 Cr, EMI ₹2.06L. User Share 45% (Dad Share 55% Excluded)',
        status: 'Active'
    },
    {
        id: 'loan_yes_bank',
        name: 'YES Bank',
        category: 'Personal Loan',
        startDate: '28/12/23',
        loanAmount: 1980000,
        alreadyRunning: 1899075,
        balanceAmt: 340399,
        debitAccount: '3981',
        emi: 71086,
        dueDate: '8/8/26',
        tenure: '6 months remaining',
        interestRate: 17.5,
        remarks: 'Statement updated till July 2026 (30/36 EMIs paid)',
        status: 'Active'
    },
    {
        id: 'loan_kotak_bank',
        name: 'Kotak Bank',
        category: 'Personal Loan',
        startDate: '12/3/25',
        loanAmount: 1191292,
        alreadyRunning: 834392,
        balanceAmt: 1201000,
        debitAccount: '4919',
        emi: 42969,
        dueDate: '10/4/25',
        tenure: '36 months',
        interestRate: 12.5,
        remarks: '',
        status: 'Active'
    },
    {
        id: 'loan_limit_od',
        name: 'Limit (OD Credit)',
        category: 'Overdraft / Limit',
        loanAmount: 950000,
        alreadyRunning: 9500000,
        balanceAmt: 8300000,
        debitAccount: '3162',
        emi: 80000,
        dueDate: '31/3/25',
        tenure: 'OD Limit',
        interestRate: 11.0,
        remarks: 'OD Limit',
        status: 'Active'
    },
    {
        id: 'loan_icici_personal',
        name: 'ICICI Personal',
        category: 'Personal Loan',
        startDate: '17/12/22',
        loanAmount: 710000,
        alreadyRunning: 710000,
        balanceAmt: 710000,
        debitAccount: '7491',
        emi: 12608,
        dueDate: '5/5/25',
        tenure: '57 months',
        interestRate: 12.0,
        remarks: '',
        status: 'Active'
    },
    {
        id: 'loan_new_hdfc_lap',
        name: 'New HDFC LAP Increased',
        category: 'Home Loan / LAP',
        loanAmount: 2900000,
        alreadyRunning: 0,
        balanceAmt: 2900000,
        debitAccount: '3981',
        emi: 0,
        dueDate: 'not increased',
        tenure: 'Pending',
        interestRate: 9.5,
        remarks: 'EMI not increased yet',
        status: 'Pending'
    },
    {
        id: 'loan_poonawala_2',
        name: 'Poonawala (Nov)',
        category: 'Business Loan',
        startDate: 'Nov 30',
        loanAmount: 1518799,
        alreadyRunning: 0,
        balanceAmt: 1518799,
        debitAccount: '4919',
        emi: 36182,
        dueDate: '10/12/25',
        tenure: '60 months',
        interestRate: 13.0,
        remarks: '',
        status: 'Active'
    }
];

// User's Other Monthly Commitments Dataset (Internal Only)
const RAW_GSHEET_COMMITMENTS = [
    { id: 'c1', name: 'D', amount: 25000, remarks: 'Monthly payout' },
    { id: 'c2', name: 'saim', amount: 18000, remarks: 'Monthly payout' },
    { id: 'c3', name: 'Rt2', amount: 50000, remarks: 'Monthly payout' },
    { id: 'c4', name: 'ele', amount: 15000, remarks: 'Monthly payout' },
    { id: 'c5', name: 'rt1', amount: 12000, remarks: 'Monthly payout' },
    { id: 'c6', name: 'nj', amount: 18000, remarks: 'Monthly payout' },
    { id: 'c7', name: 'nz', amount: 20000, remarks: 'Monthly payout' },
    { id: 'c8', name: 'asd', amount: 12000, remarks: 'Monthly payout' },
    { id: 'c9', name: 'ac', amount: 10000, remarks: 'Monthly payout' },
    { id: 'c10', name: 'sw', amount: 13500, remarks: 'Monthly payout' },
    { id: 'c11', name: 'ak', amount: 18000, remarks: 'Monthly payout' }
];

const OWNER_PIN = '786';

// App State (Default SHAREABLE MODE = TRUE)
let loans = [];
let commitments = [];
let selectedLoanId = null;
let currencySymbol = '₹';
let isShareableMode = true;
let chartDebtBreakdown = null;
let chartAccountEMI = null;
let chartCalcComparison = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkUrlMode();
    loadDataFromStorage();
    initEventListeners();
    renderAll();
});

function checkUrlMode() {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');
    const key = params.get('key');

    if (mode === 'internal' || key === OWNER_PIN) {
        isShareableMode = false;
    } else {
        isShareableMode = true; // Default for public URL
    }
}

function updateViewModeUI() {
    const badge = document.getElementById('viewModeBadgeTag');
    const toggleBtnText = document.getElementById('textToggleViewMode');
    const toggleIcon = document.getElementById('iconViewMode');

    const privateEls = document.querySelectorAll('.private-element');

    if (isShareableMode) {
        document.body.classList.add('shareable-mode');
        if (badge) {
            badge.innerText = 'Public Shareable View';
            badge.className = 'mode-badge shareable';
        }
        if (toggleBtnText) toggleBtnText.innerText = 'Owner Unlock (Internal)';
        if (toggleIcon) toggleIcon.className = 'fa-solid fa-lock';

        privateEls.forEach(el => {
            el.style.setProperty('display', 'none', 'important');
        });
    } else {
        document.body.classList.remove('shareable-mode');
        if (badge) {
            badge.innerText = 'Internal Owner View';
            badge.className = 'mode-badge internal';
        }
        if (toggleBtnText) toggleBtnText.innerText = 'Lock Shareable Mode';
        if (toggleIcon) toggleIcon.className = 'fa-solid fa-lock-open';

        privateEls.forEach(el => {
            if (el.tagName === 'SECTION') el.style.display = 'block';
            else if (el.tagName === 'BUTTON') el.style.display = 'flex';
            else el.style.display = 'flex';
        });
    }
}

function loadDataFromStorage() {
    const storedLoans = localStorage.getItem('rajdhani_loans_v7');
    const storedComm = localStorage.getItem('rajdhani_commitments_v7');

    if (storedLoans) {
        try {
            const parsed = JSON.parse(storedLoans);
            if (Array.isArray(parsed) && parsed.length > 0) {
                loans = parsed;
                // Auto-sync default loans with latest statement master data
                RAW_GSHEET_LOANS.forEach(rawLoan => {
                    const idx = loans.findIndex(l => l.id === rawLoan.id);
                    if (idx !== -1) {
                        const userPrep = loans[idx].prepayments || [];
                        loans[idx] = { ...rawLoan, prepayments: userPrep };
                    } else {
                        loans.push({ ...rawLoan });
                    }
                });
            } else {
                loans = [...RAW_GSHEET_LOANS];
            }
        } catch (e) {
            loans = [...RAW_GSHEET_LOANS];
        }
    } else {
        loans = [...RAW_GSHEET_LOANS];
        saveLoansToStorage();
    }

    if (storedComm) {
        try {
            const parsed = JSON.parse(storedComm);
            if (Array.isArray(parsed) && parsed.length > 0) {
                commitments = parsed;
            } else {
                commitments = [...RAW_GSHEET_COMMITMENTS];
            }
        } catch (e) {
            commitments = [...RAW_GSHEET_COMMITMENTS];
        }
    } else {
        commitments = [...RAW_GSHEET_COMMITMENTS];
        saveCommitmentsToStorage();
    }

    if (!selectedLoanId && loans.length > 0) {
        selectedLoanId = loans[0].id;
    }
}

function saveLoansToStorage() {
    localStorage.setItem('rajdhani_loans_v7', JSON.stringify(loans));
}

function saveCommitmentsToStorage() {
    localStorage.setItem('rajdhani_commitments_v7', JSON.stringify(commitments));
}

function formatCurrency(val) {
    const num = Math.round(Number(val) || 0);
    return currencySymbol + ' ' + num.toLocaleString('en-IN');
}

function generateAmortizationSchedule(loan) {
    const schedule = [];
    if (!loan) return schedule;
    let balance = Number(loan.balanceAmt || loan.loanAmount);
    if (balance <= 0 || loan.status === 'Closed' || loan.emi <= 0) return schedule;

    const rate = loan.interestRate || 12;
    const monthlyRate = (rate / 12) / 100;
    const regularEmi = Number(loan.emi);
    const startDate = new Date();

    let month = 1;
    const maxMonths = 360;

    while (balance > 1 && month <= maxMonths) {
        const dateStr = new Date(startDate.getFullYear(), startDate.getMonth() + month - 1, 1)
            .toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

        const openingBalance = balance;
        let interestPaid = openingBalance * monthlyRate;
        let principalPaid = regularEmi - interestPaid;

        let extraPaid = 0;
        if (loan.prepayments && loan.prepayments.length > 0) {
            loan.prepayments.forEach(prep => {
                const prepMonth = Number(prep.monthNo);
                const prepAmt = Number(prep.amount);
                if (prep.recurrence === 'once' && month === prepMonth) extraPaid += prepAmt;
                else if (prep.recurrence === 'monthly' && month >= prepMonth) extraPaid += prepAmt;
                else if (prep.recurrence === 'yearly' && month >= prepMonth && (month - prepMonth) % 12 === 0) extraPaid += prepAmt;
            });
        }

        let totalPayment = regularEmi + extraPaid;

        if (openingBalance <= totalPayment) {
            totalPayment = openingBalance + interestPaid;
            principalPaid = openingBalance;
            balance = 0;
        } else {
            balance = openingBalance - (principalPaid + extraPaid);
        }

        schedule.push({
            monthNo: month,
            date: dateStr,
            openingBalance: Math.round(openingBalance),
            emiPayment: Math.round(regularEmi),
            interestPaid: Math.round(interestPaid),
            principalPaid: Math.round(principalPaid),
            extraPaid: Math.round(extraPaid),
            closingBalance: Math.max(0, Math.round(balance))
        });

        if (balance <= 0) break;
        month++;
    }

    return schedule;
}

// Master Render
function renderAll() {
    updateViewModeUI();
    renderSummaryCards();
    renderDebitAccountBreakup();
    renderSummaryTable();
    if (!isShareableMode) renderCommitmentsTable();
    renderLoanSidebarList();
    renderSelectedLoanDetails();
    renderDashboardCharts();
    initCalculatorDefault();
}

// Summary Cards
function renderSummaryCards() {
    let totalBalance = 0;
    let totalRunning = 0;
    let totalBankEMI = 0;

    loans.forEach(loan => {
        if (loan.status !== 'Closed') {
            totalBalance += Number(loan.balanceAmt || 0);
            totalRunning += Number(loan.alreadyRunning || 0);
            totalBankEMI += Number(loan.emi || 0);
        }
    });

    let totalOtherComm = commitments.reduce((sum, c) => sum + Number(c.amount || 0), 0);
    let totalMonthlyCombined = totalBankEMI + totalOtherComm;

    const elBal = document.getElementById('valTotalPrincipal');
    const elSub = document.getElementById('subtextOriginalDebt');
    const elEmi = document.getElementById('valTotalBankEMI');
    const elActive = document.getElementById('subtextActiveLoans');
    const elOther = document.getElementById('valTotalOtherCommitment');
    const elComb = document.getElementById('valTotalMonthlyCombined');

    if (elBal) elBal.innerText = formatCurrency(totalBalance);
    if (elSub) elSub.innerText = `Already Running: ${formatCurrency(totalRunning)}`;

    if (elEmi) elEmi.innerText = formatCurrency(totalBankEMI);
    if (elActive) elActive.innerText = `${loans.filter(l=>l.status!=='Closed').length} active bank loan(s)`;

    if (elOther) elOther.innerText = formatCurrency(totalOtherComm);
    if (elComb) elComb.innerText = formatCurrency(totalMonthlyCombined);
}

function renderDebitAccountBreakup() {
    const container = document.getElementById('debitAccountGrid');
    if (!container) return;
    container.innerHTML = '';

    const accountMap = {};

    loans.forEach(loan => {
        if (loan.status !== 'Closed' && loan.debitAccount) {
            const ac = loan.debitAccount;
            if (!accountMap[ac]) accountMap[ac] = { account: ac, emi: 0, count: 0, balance: 0 };
            accountMap[ac].emi += Number(loan.emi || 0);
            accountMap[ac].balance += Number(loan.balanceAmt || 0);
            accountMap[ac].count += 1;
        }
    });

    Object.values(accountMap).forEach(acInfo => {
        const div = document.createElement('div');
        div.className = 'account-card';
        div.style.cssText = `
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-md);
            padding: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;
        div.innerHTML = `
            <div>
                <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">DEBIT A/C</span>
                <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--primary);">${acInfo.account}</h3>
                <small style="color: var(--text-secondary);">${acInfo.count} loan(s) mapped</small>
            </div>
            <div style="text-align: right;">
                <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">MONTHLY DEDUCTION</span>
                <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--accent-purple);">${formatCurrency(acInfo.emi)}</h3>
                <small style="color: var(--text-secondary);">Balance: ${formatCurrency(acInfo.balance)}</small>
            </div>
        `;
        container.appendChild(div);
    });
}

function renderSummaryTable() {
    const tbody = document.getElementById('summaryTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    loans.forEach(loan => {
        const tr = document.createElement('tr');
        if (loan.status === 'Closed') tr.style.opacity = '0.4';

        tr.innerHTML = `
            <td class="font-bold">${loan.name} ${loan.startDate ? `<br><small class="text-muted">${loan.startDate}</small>` : ''}</td>
            <td>${formatCurrency(loan.loanAmount)}</td>
            <td>${formatCurrency(loan.alreadyRunning)}</td>
            <td class="font-bold text-success">${formatCurrency(loan.balanceAmt)}</td>
            <td><span class="badge badge-primary">A/C ${loan.debitAccount}</span></td>
            <td class="font-bold">${formatCurrency(loan.emi)}</td>
            <td>${loan.dueDate || '-'}</td>
            <td>${loan.tenure || '-'}</td>
            <td>
                <button class="btn btn-sm btn-outline btn-select-loan" data-id="${loan.id}">
                    <i class="fa-solid fa-eye"></i> View
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    document.querySelectorAll('.btn-select-loan').forEach(btn => {
        btn.addEventListener('click', (e) => {
            selectedLoanId = e.currentTarget.dataset.id;
            switchTab('loans');
            renderSelectedLoanDetails();
            renderLoanSidebarList();
        });
    });
}

function renderCommitmentsTable() {
    if (isShareableMode) return;
    const tbody = document.getElementById('commitmentsTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    let total = 0;
    commitments.forEach((comm, idx) => {
        total += Number(comm.amount || 0);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="font-bold">${comm.name}</td>
            <td class="font-bold highlight-accent">${formatCurrency(comm.amount)}</td>
            <td class="text-muted">${comm.remarks || 'Monthly Recurring Payout'}</td>
            <td>
                <button class="btn btn-sm btn-danger-outline btn-del-comm" data-idx="${idx}">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    const footTotal = document.getElementById('footOtherCommitmentTotal');
    if (footTotal) footTotal.innerText = formatCurrency(total);

    document.querySelectorAll('.btn-del-comm').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = e.currentTarget.dataset.idx;
            commitments.splice(idx, 1);
            saveCommitmentsToStorage();
            renderAll();
            showToast('Commitment deleted');
        });
    });
}

function renderLoanSidebarList() {
    const container = document.getElementById('loanItemsContainer');
    if (!container) return;
    container.innerHTML = '';

    loans.forEach(loan => {
        const div = document.createElement('div');
        div.className = `loan-item-card ${loan.id === selectedLoanId ? 'active' : ''}`;
        div.dataset.id = loan.id;
        div.innerHTML = `
            <div class="lic-title">
                <span>${loan.name}</span>
                <small>A/C ${loan.debitAccount}</small>
            </div>
            <div class="lic-sub">
                ${formatCurrency(loan.balanceAmt)} • EMI: ${formatCurrency(loan.emi)}
            </div>
        `;
        div.addEventListener('click', () => {
            selectedLoanId = loan.id;
            renderLoanSidebarList();
            renderSelectedLoanDetails();
        });
        container.appendChild(div);
    });
}

function renderSelectedLoanDetails() {
    const noLoanState = document.getElementById('noLoanSelected');
    const contentState = document.getElementById('loanDetailContent');

    const loan = loans.find(l => l.id === selectedLoanId) || loans[0];

    if (!loan) {
        if (noLoanState) noLoanState.style.display = 'block';
        if (contentState) contentState.style.display = 'none';
        return;
    }

    if (noLoanState) noLoanState.style.display = 'none';
    if (contentState) contentState.style.display = 'block';

    const elCat = document.getElementById('detCategory');
    const elName = document.getElementById('detLoanName');
    const elAc = document.getElementById('detDebitAccount');
    const elOrig = document.getElementById('detOriginalVal');
    const elRun = document.getElementById('detRunningVal');
    const elOut = document.getElementById('detOutstandingVal');
    const elEmi = document.getElementById('detEmiVal');
    const elTen = document.getElementById('detTenureVal');

    if (elCat) elCat.innerText = loan.category;
    if (elName) elName.innerText = loan.name;
    if (elAc) elAc.innerText = loan.debitAccount || '3981';

    if (elOrig) elOrig.innerText = formatCurrency(loan.loanAmount);
    if (elRun) elRun.innerText = formatCurrency(loan.alreadyRunning);
    if (elOut) elOut.innerText = formatCurrency(loan.balanceAmt);
    if (elEmi) elEmi.innerText = formatCurrency(loan.emi);
    if (elTen) elTen.innerText = `${loan.dueDate || ''} (${loan.tenure || 'N/A'})`;

    const schedule = generateAmortizationSchedule(loan);
    renderAmortizationTable(schedule);
    renderPrepaymentList(loan);
}

function renderAmortizationTable(schedule) {
    const tbody = document.getElementById('amortizationTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    if (schedule.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center text-muted" style="padding: 24px; text-align: center;">No schedule available (Loan is either closed or pending).</td></tr>`;
        return;
    }

    schedule.forEach(row => {
        const tr = document.createElement('tr');
        if (row.extraPaid > 0) tr.style.background = 'rgba(16, 185, 129, 0.05)';

        tr.innerHTML = `
            <td>#${row.monthNo}</td>
            <td>${row.date}</td>
            <td>${formatCurrency(row.openingBalance)}</td>
            <td>${formatCurrency(row.emiPayment)}</td>
            <td class="font-bold">${formatCurrency(row.principalPaid)}</td>
            <td class="text-muted">${formatCurrency(row.interestPaid)}</td>
            <td class="${row.extraPaid > 0 ? 'text-success' : ''}">${formatCurrency(row.extraPaid)}</td>
            <td class="font-bold">${formatCurrency(row.closingBalance)}</td>
        `;
        tbody.appendChild(tr);
    });
}

function renderPrepaymentList(loan) {
    const ul = document.getElementById('prepaymentList');
    if (!ul) return;
    ul.innerHTML = '';

    if (!loan || !loan.prepayments || loan.prepayments.length === 0) {
        ul.innerHTML = `<li class="text-muted" style="padding: 8px 0;">No prepayments added yet.</li>`;
        return;
    }

    loan.prepayments.forEach((prep, idx) => {
        const li = document.createElement('li');
        li.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--border-color);';
        li.innerHTML = `
            <div>
                <strong>${formatCurrency(prep.amount)}</strong> (${prep.recurrence})
                <br><small class="text-muted">Starting Month #${prep.monthNo}</small>
            </div>
            <button class="btn btn-sm btn-danger-outline btn-del-prep" data-idx="${idx}">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;
        ul.appendChild(li);
    });

    document.querySelectorAll('.btn-del-prep').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = e.currentTarget.dataset.idx;
            loan.prepayments.splice(idx, 1);
            saveLoansToStorage();
            renderAll();
            showToast('Prepayment rule removed');
        });
    });
}

function renderDashboardCharts() {
    const activeLoans = loans.filter(l => l.status !== 'Closed' && l.balanceAmt > 0);
    if (activeLoans.length === 0) return;

    const el1 = document.getElementById('chartDebtBreakdown');
    if (el1) {
        const ctx1 = el1.getContext('2d');
        const labels = activeLoans.map(l => l.name);
        const balances = activeLoans.map(l => l.balanceAmt);
        const colors = ['#6366f1', '#a855f7', '#3b82f6', '#10b981', '#f59e0b', '#f43f5e', '#14b8a6', '#ec4899', '#8b5cf6'];

        if (chartDebtBreakdown) chartDebtBreakdown.destroy();
        chartDebtBreakdown = new Chart(ctx1, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: balances,
                    backgroundColor: colors.slice(0, activeLoans.length),
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'right', labels: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 11 } } }
                }
            }
        });
    }

    const el2 = document.getElementById('chartAccountEMI');
    if (el2) {
        const ctx2 = el2.getContext('2d');
        const acMap = {};
        activeLoans.forEach(l => {
            const ac = l.debitAccount || 'Other';
            acMap[ac] = (acMap[ac] || 0) + Number(l.emi || 0);
        });

        if (chartAccountEMI) chartAccountEMI.destroy();
        chartAccountEMI = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: Object.keys(acMap).map(a => `Debit A/C ${a}`),
                datasets: [{
                    label: 'Monthly EMI Auto-Deduction',
                    data: Object.values(acMap),
                    backgroundColor: '#a855f7',
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { ticks: { color: '#94a3b8' }, grid: { display: false } },
                    y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } }
                },
                plugins: { legend: { labels: { color: '#94a3b8' } } }
            }
        });
    }
}

function initCalculatorDefault() {
    runPayoffSimulation();
}

function runPayoffSimulation() {
    const elP = document.getElementById('calcPrincipal');
    if (!elP) return;
    const P = parseFloat(elP.value) || 0;
    const r = parseFloat(document.getElementById('calcRate').value) || 0;
    const tenureYears = parseFloat(document.getElementById('calcTenureYears').value) || 0;
    const extraEMI = parseFloat(document.getElementById('calcExtraEMI').value) || 0;
    const annualPrepay = parseFloat(document.getElementById('calcAnnualPrepay').value) || 0;

    const n = tenureYears * 12;
    const mRate = (r / 12) / 100;
    const regEMI = P * mRate * (Math.pow(1 + mRate, n)) / (Math.pow(1 + mRate, n) - 1);
    document.getElementById('calcRegularEMI').value = Math.round(regEMI);

    let regBalance = P;
    let regTotalInterest = 0;
    let regMonths = 0;

    while (regBalance > 1 && regMonths < 600) {
        const intPaid = regBalance * mRate;
        const prinPaid = regEMI - intPaid;
        regBalance -= prinPaid;
        regTotalInterest += intPaid;
        regMonths++;
    }

    let prepBalance = P;
    let prepTotalInterest = 0;
    let prepMonths = 0;

    while (prepBalance > 1 && prepMonths < 600) {
        prepMonths++;
        const intPaid = prepBalance * mRate;
        let extra = extraEMI;
        if (prepMonths % 12 === 0) extra += annualPrepay;

        let prinPaid = (regEMI + extra) - intPaid;
        if (prepBalance <= (regEMI + extra)) {
            prinPaid = prepBalance;
            prepBalance = 0;
        } else {
            prepBalance -= prinPaid;
        }
        prepTotalInterest += intPaid;
    }

    const interestSaved = regTotalInterest - prepTotalInterest;
    const monthsSaved = regMonths - prepMonths;
    const yearsSaved = (monthsSaved / 12).toFixed(1);

    document.getElementById('calcInterestSaved').innerText = formatCurrency(interestSaved);
    document.getElementById('calcTimeSaved').innerText = `${yearsSaved} Years (${monthsSaved} Mos)`;

    document.getElementById('calcRegTotal').innerText = formatCurrency(P + regTotalInterest);
    document.getElementById('calcNewTotal').innerText = formatCurrency(P + prepTotalInterest);

    document.getElementById('calcRegInterest').innerText = formatCurrency(regTotalInterest);
    document.getElementById('calcNewInterest').innerText = formatCurrency(prepTotalInterest);

    document.getElementById('calcRegTime').innerText = `${regMonths} Months (${(regMonths/12).toFixed(1)} Yrs)`;
    document.getElementById('calcNewTime').innerText = `${prepMonths} Months (${(prepMonths/12).toFixed(1)} Yrs)`;

    const elChart = document.getElementById('chartCalcComparison');
    if (elChart) {
        const ctx = elChart.getContext('2d');
        if (chartCalcComparison) chartCalcComparison.destroy();

        chartCalcComparison = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Interest Cost Comparison'],
                datasets: [
                    { label: 'Regular Interest', data: [regTotalInterest], backgroundColor: '#f59e0b', borderRadius: 6 },
                    { label: 'With Prepayment Savings', data: [prepTotalInterest], backgroundColor: '#10b981', borderRadius: 6 }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { ticks: { color: '#94a3b8' }, grid: { display: false } },
                    y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } }
                },
                plugins: { legend: { labels: { color: '#94a3b8' } } }
            }
        });
    }
}

function initEventListeners() {
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', (e) => switchTab(e.currentTarget.dataset.tab));
    });

    const btnToggle = document.getElementById('btnToggleViewMode');
    if (btnToggle) {
        btnToggle.addEventListener('click', () => {
            if (isShareableMode) {
                const modal = document.getElementById('modalPasscode');
                document.getElementById('inputPasscode').value = '';
                if (modal) modal.classList.add('active');
            } else {
                isShareableMode = true;
                const activeTab = document.querySelector('.tab-content.active');
                if (activeTab && activeTab.id === 'tab-commitments') {
                    switchTab('dashboard');
                }
                renderAll();
                showToast('Locked to Shareable View');
            }
        });
    }

    const btnClosePass = document.getElementById('btnClosePasscodeModal');
    const btnCancelPass = document.getElementById('btnCancelPasscodeModal');
    const btnSubPass = document.getElementById('btnSubmitPasscode');
    const inPass = document.getElementById('inputPasscode');

    if (btnClosePass) btnClosePass.addEventListener('click', () => document.getElementById('modalPasscode').classList.remove('active'));
    if (btnCancelPass) btnCancelPass.addEventListener('click', () => document.getElementById('modalPasscode').classList.remove('active'));
    if (btnSubPass) btnSubPass.addEventListener('click', verifyPasscodeAndUnlock);
    if (inPass) {
        inPass.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') verifyPasscodeAndUnlock();
        });
    }

    const btnShare = document.getElementById('btnCopyShareLink');
    if (btnShare) {
        btnShare.addEventListener('click', () => {
            const cleanUrl = window.location.origin + window.location.pathname;
            navigator.clipboard.writeText(cleanUrl).then(() => {
                showToast('Public Shareable Link copied to clipboard!');
            }).catch(() => {
                prompt('Copy Public Shareable Link:', cleanUrl);
            });
        });
    }

    const btnViewLoans = document.getElementById('btnViewAllLoans');
    const btnQuickImp = document.getElementById('btnQuickImport');
    const curSelect = document.getElementById('currencySelect');

    if (btnViewLoans) btnViewLoans.addEventListener('click', () => switchTab('loans'));
    if (btnQuickImp) btnQuickImp.addEventListener('click', () => switchTab('import-export'));
    if (curSelect) {
        curSelect.addEventListener('change', (e) => {
            currencySymbol = e.target.value;
            renderAll();
        });
    }

    // Modals
    const btnAddL1 = document.getElementById('btnOpenAddLoan');
    const btnAddL2 = document.getElementById('btnSidebarAddLoan');
    const btnCloseLM = document.getElementById('btnCloseLoanModal');
    const btnCancelLM = document.getElementById('btnCancelLoanModal');
    const formL = document.getElementById('formLoan');

    if (btnAddL1) btnAddL1.addEventListener('click', () => openLoanModal());
    if (btnAddL2) btnAddL2.addEventListener('click', () => openLoanModal());
    if (btnCloseLM) btnCloseLM.addEventListener('click', closeLoanModal);
    if (btnCancelLM) btnCancelLM.addEventListener('click', closeLoanModal);
    if (formL) {
        formL.addEventListener('submit', (e) => {
            e.preventDefault();
            saveLoanFromModal();
        });
    }

    const btnEditL = document.getElementById('btnEditCurrentLoan');
    const btnDelL = document.getElementById('btnDeleteCurrentLoan');

    if (btnEditL) {
        btnEditL.addEventListener('click', () => {
            const loan = loans.find(l => l.id === selectedLoanId);
            if (loan) openLoanModal(loan);
        });
    }

    if (btnDelL) {
        btnDelL.addEventListener('click', () => {
            if (confirm('Delete this loan entry?')) {
                loans = loans.filter(l => l.id !== selectedLoanId);
                selectedLoanId = loans.length > 0 ? loans[0].id : null;
                saveLoansToStorage();
                renderAll();
                showToast('Loan entry deleted');
            }
        });
    }

    // Commitments Modal
    const btnOpenComm = document.getElementById('btnOpenAddCommitment');
    const btnCloseComm = document.getElementById('btnCloseCommitmentModal');
    const btnCancelComm = document.getElementById('btnCancelCommitmentModal');
    const formComm = document.getElementById('formCommitment');

    if (btnOpenComm) btnOpenComm.addEventListener('click', () => document.getElementById('modalCommitment').classList.add('active'));
    if (btnCloseComm) btnCloseComm.addEventListener('click', () => document.getElementById('modalCommitment').classList.remove('active'));
    if (btnCancelComm) btnCancelComm.addEventListener('click', () => document.getElementById('modalCommitment').classList.remove('active'));
    if (formComm) {
        formComm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('commName').value;
            const amount = parseFloat(document.getElementById('commAmount').value);
            const remarks = document.getElementById('commRemarks').value;
            commitments.push({ id: 'comm_' + Date.now(), name, amount, remarks });
            saveCommitmentsToStorage();
            document.getElementById('modalCommitment').classList.remove('active');
            formComm.reset();
            renderAll();
            showToast('New commitment added');
        });
    }

    document.querySelectorAll('.sub-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.subtab-content').forEach(c => c.classList.remove('active'));
            e.currentTarget.classList.add('active');
            document.getElementById(`subtab-${e.currentTarget.dataset.subtab}`).classList.add('active');
        });
    });

    const formPrep = document.getElementById('formAddPrepayment');
    if (formPrep) {
        formPrep.addEventListener('submit', (e) => {
            e.preventDefault();
            const loan = loans.find(l => l.id === selectedLoanId);
            if (!loan) return;
            if (!loan.prepayments) loan.prepayments = [];
            loan.prepayments.push({
                id: 'prep_' + Date.now(),
                monthNo: parseInt(document.getElementById('prepMonthNo').value),
                amount: parseFloat(document.getElementById('prepAmount').value),
                recurrence: document.getElementById('prepRecurrence').value
            });
            saveLoansToStorage();
            renderAll();
            showToast('Prepayment added!');
            formPrep.reset();
        });
    }

    const btnCalc = document.getElementById('btnRunCalc');
    const btnPaste = document.getElementById('btnProcessPaste');
    const btnExpJSON = document.getElementById('btnExportJSON');
    const btnExpCSV = document.getElementById('btnExportCSV');
    const btnReset = document.getElementById('btnResetDefaultData');

    if (btnCalc) btnCalc.addEventListener('click', runPayoffSimulation);
    if (btnPaste) btnPaste.addEventListener('click', processPastedData);
    if (btnExpJSON) {
        btnExpJSON.addEventListener('click', () => {
            downloadFile(JSON.stringify({ loans, commitments: isShareableMode ? [] : commitments }, null, 2), 'rajdhani_loans_backup.json', 'application/json');
        });
    }
    if (btnExpCSV) btnExpCSV.addEventListener('click', exportLoansSummaryCSV);
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            if (confirm('Reload raw Google Sheet dataset?')) {
                loans = [...RAW_GSHEET_LOANS];
                commitments = [...RAW_GSHEET_COMMITMENTS];
                selectedLoanId = loans[0].id;
                saveLoansToStorage();
                saveCommitmentsToStorage();
                renderAll();
                showToast('Raw GSheet data reloaded successfully!');
            }
        });
    }
}

function verifyPasscodeAndUnlock() {
    const input = document.getElementById('inputPasscode').value;
    if (input === OWNER_PIN) {
        isShareableMode = false;
        document.getElementById('modalPasscode').classList.remove('active');
        renderAll();
        showToast('Unlocked Owner Internal View!');
    } else {
        alert('Incorrect PIN. Access denied.');
    }
}

function switchTab(tabId) {
    if (isShareableMode && tabId === 'commitments') return;

    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    const btn = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
    if (btn) btn.classList.add('active');

    const tabContent = document.getElementById(`tab-${tabId}`);
    if (tabContent) tabContent.classList.add('active');

    const titleEl = document.getElementById('pageTitle');
    const subEl = document.getElementById('pageSubtitle');

    if (tabId === 'dashboard') {
        if (titleEl) titleEl.innerText = 'Loan Portfolio Dashboard';
        if (subEl) subEl.innerText = 'Track active bank loans, debit account EMI auto-deductions, and schedules.';
    } else if (tabId === 'loans') {
        if (titleEl) titleEl.innerText = 'Bank Loans & Amortization Schedules';
        if (subEl) subEl.innerText = 'Inspect month-by-month principal reduction and extra repayments.';
    } else if (tabId === 'commitments') {
        if (titleEl) titleEl.innerText = 'Other Monthly Commitments';
        if (subEl) subEl.innerText = 'Manage recurring non-bank payouts (Internal View Only)';
    } else if (tabId === 'calculator') {
        if (titleEl) titleEl.innerText = 'Prepayment & Early Payoff Calculator';
        if (subEl) subEl.innerText = 'Simulate interest savings and early closure date.';
    } else if (tabId === 'import-export') {
        if (titleEl) titleEl.innerText = 'Import & Export Data';
        if (subEl) subEl.innerText = 'Paste data directly from Google Sheets / Excel or save JSON backups.';
    }
}

function openLoanModal(loanToEdit = null) {
    const modal = document.getElementById('modalLoan');
    const title = document.getElementById('modalLoanTitle');

    if (loanToEdit) {
        title.innerText = 'Edit Loan Entry';
        document.getElementById('loanId').value = loanToEdit.id;
        document.getElementById('loanName').value = loanToEdit.name;
        document.getElementById('loanCategory').value = loanToEdit.category;
        document.getElementById('loanOriginal').value = loanToEdit.loanAmount;
        document.getElementById('loanRunning').value = loanToEdit.alreadyRunning;
        document.getElementById('loanOutstanding').value = loanToEdit.balanceAmt;
        document.getElementById('loanDebitAccount').value = loanToEdit.debitAccount;
        document.getElementById('loanEMI').value = loanToEdit.emi;
        document.getElementById('loanRate').value = loanToEdit.interestRate || 12;
        document.getElementById('loanDueDate').value = loanToEdit.dueDate || '';
        document.getElementById('loanTenure').value = loanToEdit.tenure || '';
        document.getElementById('loanRemarks').value = loanToEdit.remarks || '';
    } else {
        title.innerText = 'Add New Loan Entry';
        document.getElementById('formLoan').reset();
        document.getElementById('loanId').value = '';
    }

    if (modal) modal.classList.add('active');
}

function closeLoanModal() {
    const modal = document.getElementById('modalLoan');
    if (modal) modal.classList.remove('active');
}

function saveLoanFromModal() {
    const id = document.getElementById('loanId').value;
    const name = document.getElementById('loanName').value;
    const category = document.getElementById('loanCategory').value;
    const loanAmount = parseFloat(document.getElementById('loanOriginal').value) || 0;
    const alreadyRunning = parseFloat(document.getElementById('loanRunning').value) || 0;
    const balanceAmt = parseFloat(document.getElementById('loanOutstanding').value) || 0;
    const debitAccount = document.getElementById('loanDebitAccount').value;
    const emi = parseFloat(document.getElementById('loanEMI').value) || 0;
    const interestRate = parseFloat(document.getElementById('loanRate').value) || 12;
    const dueDate = document.getElementById('loanDueDate').value;
    const tenure = document.getElementById('loanTenure').value;
    const remarks = document.getElementById('loanRemarks').value;

    if (id) {
        const loan = loans.find(l => l.id === id);
        if (loan) {
            Object.assign(loan, { name, category, loanAmount, alreadyRunning, balanceAmt, debitAccount, emi, interestRate, dueDate, tenure, remarks });
        }
    } else {
        const newLoan = {
            id: 'loan_' + Date.now(),
            name, category, loanAmount, alreadyRunning, balanceAmt, debitAccount, emi, interestRate, dueDate, tenure, remarks,
            status: 'Active', prepayments: []
        };
        loans.push(newLoan);
        selectedLoanId = newLoan.id;
    }

    saveLoansToStorage();
    closeLoanModal();
    renderAll();
    showToast('Loan details saved successfully!');
}

function processPastedData() {
    const text = document.getElementById('pasteDataArea').value.trim();
    if (!text) {
        alert('Please paste rows from your Google Sheet.');
        return;
    }

    const lines = text.split('\n');
    let imported = 0;

    lines.forEach(line => {
        const p = line.split(/[\t,]/).map(x => x.trim().replace(/[₹,]/g, ''));
        if (p.length >= 4) {
            loans.push({
                id: 'loan_' + Date.now() + Math.random().toString(36).substr(2, 4),
                name: p[1] || p[0] || 'Imported Loan',
                category: 'Personal Loan',
                loanAmount: parseFloat(p[2]) || 0,
                alreadyRunning: parseFloat(p[3]) || 0,
                balanceAmt: parseFloat(p[4]) || parseFloat(p[2]) || 0,
                debitAccount: p[5] || '3981',
                emi: parseFloat(p[6]) || 0,
                dueDate: p[7] || '',
                tenure: p[8] || '',
                status: 'Active',
                prepayments: []
            });
            imported++;
        }
    });

    if (imported > 0) {
        saveLoansToStorage();
        renderAll();
        switchTab('dashboard');
        showToast(`Imported ${imported} loans!`);
    }
}

function downloadFile(content, fileName, mimeType) {
    const a = document.createElement('a');
    const blob = new Blob([content], { type: mimeType });
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    a.click();
}

function exportLoansSummaryCSV() {
    let csv = 'Name,Start Date,Sanctioned Amount,Already Running,Balance Amount,Debit Account,Monthly EMI,Due Date,Tenure,Remarks\n';
    loans.forEach(l => {
        csv += `"${l.name}","${l.startDate||''}","${l.loanAmount}","${l.alreadyRunning}","${l.balanceAmt}","${l.debitAccount}","${l.emi}","${l.dueDate||''}","${l.tenure||''}","${l.remarks||''}"\n`;
    });
    downloadFile(csv, 'rajdhani_loans_master.csv', 'text/csv');
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}
