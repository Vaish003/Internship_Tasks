
function validateForm() {

    var   fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    var userType = document.getElementById("userType").value;

    if (fname === "" || lname === "") {
        alert("First Name and Last Name are required");
        return false;
    }

   var emailPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[._-])[a-zA-Z0-9._-]+@gmail\.com$/;

    if (!email.match(emailPattern)) {
    alert("Email must contain at least 1 letter, 1 number, 1 special character and end with @gmail.com");
    return false;
   }


    if (phone.length !== 10) {
        alert("Phone number must be 10 digits");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    if (password !== cpassword) {
        alert("Passwords do not match");
        return false;
    }

    if (userType === "") {
        alert("Please select User Type");
        return false;
    }

    alert("Registration Successful!");
    return true;
}

