document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the email and password from the form
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log("email :", email);
    console.log("password :", password);
    // Create the login data
    var loginData = {
        email: email,
        password: password
    };
    console.log("loginData :", loginData);
    // Send a POST request to the login API
    fetch('http://localhost:8000/AccountCreate_app/login', {
        method: 'POST',
        mode: 'cors', // Ensure CORS mode is set
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log("data", data)
        // Handle the response data from the server
        if (data.ok) {
            // Login was successful
            window.location.href = './index.html'; // Change to the appropriate URL
        } else {
            // Login failed
            console.error('Login Successfull:', data.message);
            window.location.href = './index.html'; 
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
