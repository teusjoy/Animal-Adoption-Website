document.querySelectorAll('.tier-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.tier-button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        document.getElementById('otherAmount').value = this.parentElement.dataset.amount;
    });
});

document.getElementById('donateButton').addEventListener('click', function() {
    var amount = document.querySelector('.tier-button.active') ? document.querySelector('.tier-button.active').parentElement.dataset.amount : document.getElementById('otherAmount').value;
    var paymentMethod = document.getElementById('paymentMethod').value;
    alert(`Redirecting to ${paymentMethod} for $${amount} donation...`);
    // Here, you would normally initiate the redirect to the payment gateway
});