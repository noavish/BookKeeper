function submitForm () {
    var newName = document.getElementById('userName').value;
    var rUserName = document.getElementById('rUserName');
    if (newName.length < 5) {
        var massage = document.createElement('div');
        var tooShort = document.createTextNode('The supplied username is too short, try again using 5 or more characters');
        var att = document.createAttribute('id');
        att.value = "nameError";
        massage.attributes.setNamedItem(att);
        massage.appendChild(tooShort);
        rUserName.appendChild(massage);
    } else {
        if(document.getElementById('nameError')) {
            document.getElementById('nameError').style.display = "none";
        }
        // document.getElementById('nameError').innerHTML = "";

        // alert ("Thank you " + newName);        
    }
    var newPassword = document.getElementById('password').value;
    var rPassword = document.getElementById('rPassword');
    if (newPassword.length < 6) {
        var massage = document.createElement('div');
        var tooShort = document.createTextNode('The password needs at least 6 characters');
        var att = document.createAttribute('id');
        att.value = "passError";
        massage.attributes.setNamedItem(att);
        massage.appendChild(tooShort);
        rPassword.appendChild(massage);
    } else {
        if(document.getElementById('passError')) {
        document.getElementById('passError').style.display = "none";
        // document.getElementById('passError').innerHTML = "";   
        }  
    }
}