let salary = 100000;

function getCadre() {
    if (salary >= 10000 && salary <= 49999) {
        return 'entryLevel';
    } else if (salary >= 50000 && salary <= 99999) {
        return 'midLevel';
    } else {
        return 'seniorLevel';
    }
}

function calculateTax() {
    return payGrades[getCadre()].taxMultiplier * salary;
}

function getBenefits() {
    return payGrades[getCadre()].benefits.join(', ');
}

function calculateBonus() {
    return .02 * salary;
}

function reimbursementEligibility() {
    let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
    let totalBenefitsValue = 0;
    let employeeBenefits = payGrades[getCadre()].benefits;
    for (let i = 0; i < employeeBenefits.length; i++) {
        totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
    }
    return totalBenefitsValue;
}

export { getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility };

const Employee = {
    salary,
    cadre: getCadre(),
    tax: calculateTax(),
    benefits: getBenefits(),
    bonus: calculateBonus(),
    reimbursement: reimbursementEligibility()
};

export default Employee;
