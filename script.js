function addNewErrorSpan (parentElement, text) {
    var errorMessage = document.createElement('span');
    var errorText = document.createTextNode(text);
    var att = document.createAttribute('class');
    att.value = "error";
    errorMessage.attributes.setNamedItem(att);
    var att2 = document.createAttribute('data-source');
    att2.value = parentElement;
    errorMessage.attributes.setNamedItem(att2);
    errorMessage.appendChild(errorText);
    document.getElementById(parentElement).appendChild(errorMessage);
}

function inputValidation (parentElement, text, isValidFunction) {
    var errorSpan = document.querySelector(`.error[data-source=${parentElement}`); 
    var inputValue = document.querySelector(`#${parentElement} input,select`).value;
    var isInputValid = isValidFunction(inputValue); 
    if (!isInputValid && !errorSpan) {
        addNewErrorSpan(parentElement, text);
    } else if (isInputValid && errorSpan) {
        document.getElementById(parentElement).removeChild(errorSpan);        
    }
    return isInputValid;
}

function submitForm () {
    if (inputValidation('rUserName', 'The supplied username is too short, try again using 5 or more characters', function (valueString) {return valueString.length >= 5;}) &&
    inputValidation('rPassword', 'The password needs at least 6 characters', function (valueString) {return valueString.length >= 6;}) &&
    inputValidation('rPassword2', 'Passwords have to be the same', function(valueString) {return valueString === document.getElementById('password').value;}) &&
    inputValidation('rCountry', 'You can only sign-up from Israel or from USA', function (valueString) {return (valueString === "United States" || valueString === "Israel");}) &&
    inputValidation('rPhoneNumber', 'Phone number must be shorter than 15 digits', function (valueString) {return valueString.length < 15;})) {
        var greeting = document.createElement('h2');
        var greetingMessage = document.createTextNode(`Welcome ${document.getElementById('userName').value}`);
        greeting.appendChild(greetingMessage);
        greeting.style.textAlign = 'center';
        greeting.style.fontFamily = 'Verdana';
        greeting.style.color = 'green';
        document.getElementById('form').appendChild(greeting);
    }    
}

