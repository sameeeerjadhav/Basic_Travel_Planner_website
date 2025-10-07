document.getElementById('bookingForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var gender = document.getElementById('select1').value;
    var person = document.getElementById('select2').value;
    var mobileNo = document.getElementById('mobno').value;
    var address = document.getElementById('address').value;
    var dateTime = document.getElementById('datetime').value;
    var destination = document.getElementById('select3').value;

    // Create the booking data
    var bookingData = {
        name: name,
        email: email,
        gender: gender,
        person: parseInt(person), // Convert person to integer
        mobile_no: mobileNo,
        address: address,
        date_time: dateTime,
        destination: destination
    };

    // Send a POST request to the booking API endpoint
    fetch('http://localhost:8000/tour-bookings/', {
        method: 'POST',
        mode: 'cors', // Ensure CORS mode is set
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Booking successful:', data);
        // Redirect to a success page or display a success message
        window.location.href = './success.html'; // Change to the appropriate URL
    })
    .catch(error => {
        console.error('Booking Error:', error);
        // Handle error, e.g., display error message to the user
    });
});
