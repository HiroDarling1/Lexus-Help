document.getElementById('hours-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const hourlyRate = parseFloat(document.getElementById('hourly-rate').value);
    const week1Hours = parseFloat(document.getElementById('week-1-hours').value);
    const week2Hours = parseFloat(document.getElementById('week-2-hours').value);

    const grossPay = (week1Hours + week2Hours) * hourlyRate;

    document.getElementById('result').textContent = `Gross Pay: $${grossPay.toFixed(2)}`;
});
