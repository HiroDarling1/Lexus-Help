document.getElementById('hours-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const hourlyRate = parseFloat(document.getElementById('hourly-rate').value);
    const week1Hours = parseFloat(document.getElementById('week-1-hours').value);
    const week2Hours = parseFloat(document.getElementById('week-2-hours').value);
    
    const totalHours = week1Hours + week2Hours;
    const grossPay = hourlyRate * totalHours;

    document.getElementById('result').textContent = `Gross Pay for 2 weeks: $${grossPay.toFixed(2)}`;
    
    // Clear the form
    this.reset();
});
