document.getElementById('registerForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the form input values
    var name = document.getElementById('form3Example1cg').value;
    var email = document.getElementById('form3Example3cg').value;
    var password = document.getElementById('form3Example4cg').value;
    var repeatPassword = document.getElementById('form3Example4cdg').value;

    // Validate if passwords match
    if (password !== repeatPassword) {
        console.error('Passwords do not match');
        return;
    }

    // Create the registration data
    var registrationData = {
        name: name,
        email: email,
        password: password,
        repeat_password: repeatPassword
    };

    // Send a POST request to the registration API endpoint
    fetch('http://localhost:8000/accounts/', {
        method: 'POST',
        mode: 'cors', // Ensure CORS mode is set
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Registration successful:', data);
        // Redirect to a success page or login page
        window.location.href = './login.html'; // Change to the appropriate URL
    })
    .catch(error => {
        console.error('Registration Error:', error);
        // Handle error, e.g., display error message to the user
    });
});
