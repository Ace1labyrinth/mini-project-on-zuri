let userDetailsDatabase = {}




function getUserDetails () {

    let userName = prompt("Enter your username")

    if (userName == null){
        return
    }

function validateUserName(userName) {
    if(userName.length < 10 && userName.length > 0) {
        return true
    } else {
        return false
    }
}
while(validateUserName(userName) == false){
    userName = prompt("Username must be less than 10 and greater than 0")
}

userDetailsDatabase["UserName"] = userName


let email = prompt("Enter email address")

if (email == null){
    return
}

function validateEmail(email){ 
    const emailCheck = /^[a-zA-Z0-9.|#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    emailCheckResult = emailCheck.test(email);
    if (emailCheckResult == true){
        return true
    } else {
        return false
    }
}

while (validateEmail(email) == false){
    email = prompt("Enter a valid email")
}

userDetailsDatabase["Email"] = email


let phoneNumber = prompt ("Enter your phone number")

if (phoneNumber == null){
    return
}

function validatePhoneNumber(phoneNumber){
    if (phoneNumber.length == 11 ){
        return true
    } else {
        return false
    }
}

while (validatePhoneNumber(phoneNumber) == false){
    phoneNumber = prompt("Phone number must be 11 digits try again")
}

userDetailsDatabase["PhoneNumber"] = phoneNumber


let password = prompt ("Enter your password")

if (password == null){
    return
}

function validatePassword(password){
    if (password.length < 6 ){
        return false
    }else{
        return true
    }
    
} 

while (validatePassword(password) == false){
    password = prompt("Password must not be less than 7 digits")
}

userDetailsDatabase["password"] = password

let confirmPassword = prompt("Confirm your password")

if (confirmPassword == null){
    return
}


function validateConfirmPassword(confirmPassword){
    if (confirmPassword != password){
        return false
    }else{
        return true
    }
}


while (validateConfirmPassword(confirmPassword) == false){
    confirmPassword = prompt("Confirm password does not match password")
}
userDetailsDatabase["ConfirmPassword"] = confirmPassword

}



function displayUserDetails(){
    alert(`Your Details\n\nUsername: ${userDetailsDatabase.UserName}\nPhone Number: ${userDetailsDatabase.PhoneNumber}\nEmail: ${userDetailsDatabase.Email}`)

}
