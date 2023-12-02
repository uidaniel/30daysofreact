const interestResult = document.querySelector('.result');
const principalAmount = document.querySelector('.form-1');
const InterestRate = document.querySelector('.form-2');
const PeriodTime = document.querySelector('.form-3');
const calculate = document.querySelector('.btn');
const reset = document.querySelector('.btn-1');
interestResult.textContent = "";


calculate.addEventListener('click', () => {
    let interestRateV = InterestRate.value;
    let PeriodTimeV = PeriodTime.value;
    let principalAmountV = principalAmount.value;

    const operation = (principalAmountV * PeriodTimeV * interestRateV) / 100
    interestResult.textContent = `$${operation}`;
})

reset.addEventListener('click', () => {
    InterestRate.value = "";
    PeriodTime.value = "";
    principalAmount.value = "";
    interestResult.textContent = "";
})