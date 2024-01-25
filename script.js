function validateNumber(input) {
    // Allow only numeric input for mobile number
    input.value = input.value.replace(/[^0-9]/g, '');
}

function submitForm() {
    // Get values from the form inputs
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var mobile = document.getElementById('mobileInput').value;

    // Log the data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Mobile:', mobile);

    // You can add further processing or send the data to a server here

    // Close the modal
    $('#exampleModal').modal('hide');
}