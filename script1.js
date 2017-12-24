function newSpanToAppend (text, parentElement) {
    var errorMassage = document.createElement('span');
    var errorText = document.createTextNode(text);
    var att = document.createAttribute('class');
    att.value = "error";
    errorMassage.attributes.setNamedItem(att);
    var att2 = document.createAttribute('data-source');
    att2.value = parentElement;
    errorMassage.attributes.setNamedItem(att2);
    errorMassage.appendChild(errorText);
    document.getElementById(parentElement).appendChild(errorMassage);
}

function submitForm () {
    var errorSpan = document.querySelector('.error[data-source=rUserName]');    
    var newName = document.getElementById('userName').value;
    if (newName.length < 5 && !errorSpan) {
        newSpanToAppend('The supplied username is too short, try again using 5 or more characters', 'rUserName');
    } else if (newName.length >= 5 && errorSpan) {
        document.getElementById('rUserName').removeChild(errorSpan);
        // errorSpan.style.display = 'none';  
    }
}

//     var newPassword = document.getElementById('password').value;
//     if (newPassword.length < 6) {
//         newSpanToAppend('The password needs at least 6 characters', 'rPassword');
//     } else {
//         if(document.querySelector('.error')) {
//             document.querySelector('.error').style.display = "none";
//         // document.getElementById('passError').innerHTML = "";   
//         }  
//     }
   
//     var newPassword2 = document.getElementById('password2').value;
//     if (newPassword !== newPassword2) {
//         newSpanToAppend('Passwords are not the same', 'rPassword2');
//     } else {
//         if(document.getElementById('passError2')) {
//         document.getElementById('passError2').style.display = "none";
//         // document.getElementById('passError').innerHTML = "";   
//         }  
//     }

//     var newCountry = document.getElementById('country').value;
//     if (newCountry !== "United States" && newCountry !== "Israel") {
//         newSpanToAppend('You can only sign-up from Israel or from USA', 'country');
//     } else {

//     }

//     var newPhone = document.getElementById('phoneNumber').value;
//     if (newPhone.value < 15) {
//         newSpanToAppend('Phone number must be shorter than 15 digits', 'rPhoneNumber');
//     } else {

//     }


// }