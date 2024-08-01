document.getElementById('contactForm').addEventListener('submit', function(event) {
    var submitButton = document.getElementById('submitButton');
    submitButton.value = 'Sending...';
    submitButton.disabled = true;
});