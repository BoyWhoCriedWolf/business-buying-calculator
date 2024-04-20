export function calculateLoanPayment(loanAmount, interestRate, loanTerm) {
  console.log(loanAmount, interestRate, loanTerm);
  var monthlyInterestRate = interestRate / 12;
  return (
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -loanTerm))
  );
}

export function formatNumber(number) {
  return number.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
