document.getElementById('billingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var mobile = document.getElementById('mobile').value;
    var country = document.getElementById('country').value;
    
    // Validation regular expressions
    var nameRegex = /^[A-Za-z]+$/;
    var mobileRegex = /^\d+$/;
    var addressRegex = /^[A-Za-z0-9\s\-.,]+$/;
    
    // Check if any of the fields have invalid characters
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName) || !addressRegex.test(address) || !mobileRegex.test(mobile)) {
        alert('Please enter valid characters in the form fields.');
        return;
    }

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Address:', address);
    console.log('Mobile:', mobile);
    console.log('Country:', country);
    
    // Redirect to confirm.html
    window.location.href = 'confirm.html';
});