function calculateMortgage() {

    const principal =
        parseFloat(document.getElementById("principal").value);

    const yearlyRate =
        parseFloat(document.getElementById("rate").value);

    const years =
        parseInt(document.getElementById("years").value);

    if (isNaN(principal) || principal <= 0) {
        alert("Please enter a valid principal amount.");
        return;
    }

    if (isNaN(yearlyRate) || yearlyRate <= 0) {
        alert("Please enter a valid yearly interest rate.");
        return;
    }

    const r = yearlyRate / 1200;

    const n = years * 12;

    const payment =
        (principal * r) /
        (1 - Math.pow(1 + r, -n));

    document.getElementById("result").textContent =
        "$" + payment.toFixed(2);
}