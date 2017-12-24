function newSpanToAppend (parentElement, text) {
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

function inputValidation (parentElement, text, predicate) {
    var errorSpan = document.querySelector(`.error[data-source=${parentElement}`); 
    var inputValue = document.querySelector(`#${parentElement} input,select`).value;
    if (!predicate(inputValue) && !errorSpan) {
        newSpanToAppend(parentElement, text);
    } else if (predicate(inputValue) && errorSpan) {
        document.getElementById(parentElement).removeChild(errorSpan);        
    }
}

function submitForm () {
    inputValidation('rUserName', 'The supplied username is too short, try again using 5 or more characters', function (valueString) {return valueString.length >= 5;});
    inputValidation('rPassword', 'The password needs at least 6 characters', function (valueString) {return valueString.length >= 6;});
    inputValidation('rPassword2', 'Passwords have to be the same', function(valueString) {return valueString === document.getElementById('password').value;});
    inputValidation('rCountry', 'You can only sign-up from Israel or from USA', function (valueString) {return (valueString === "United States" || valueString === "Israel");});
    inputValidation('rPhoneNumber', 'Phone number must be shorter than 15 digits', function (valueString) {return valueString.length < 15;});

}
    


