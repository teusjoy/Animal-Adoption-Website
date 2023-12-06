// First, we select all elements with the class 'tier-button'
document.querySelectorAll('.tier-button').forEach(button => {
    // Add a click event listener to each 'tier-button'
    button.addEventListener('click', function() {
        // Remove active class from all tier buttons
        document.querySelectorAll('.tier-button').forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        this.classList.add('active');

        document.getElementById('otherAmount').disabled = true;
        
    });
});

// Event listener for the 'Other Amount' button
document.getElementById('otherAmountButton').addEventListener('click', function() {
    document.querySelectorAll('.tier-button').forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    document.getElementById('otherAmount').disabled = false;
    document.getElementById('otherAmount').focus();
    
});

// Add a click event listener to the 'donateButton'
document.getElementById('donateButton').addEventListener('click', function() {
    // Determine the donation amount
    let amount;
    if (document.getElementById('otherAmountButton').classList.contains('active')) {
        // Use the value from the 'Other Amount' field
        amount = document.getElementById('otherAmount').value;
    } else {
        // Otherwise, use the amount from the active tier button
        amount = document.querySelector('.tier-button.active') ? document.querySelector('.tier-button.active').dataset.amount : null;
    }
    
    // Get the selected payment method
    let paymentMethod = document.getElementById('paymentMethod').value;
    
    // Display an alert for redirection
    alert(`Redirecting to ${paymentMethod} for $${amount} donation...`);
    
});

