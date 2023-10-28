var errorArray = [];

function run() {
    var name = getUserFullName();
    var ageGroup = getRadioButtonData();
    var browser = getCheckedBoxData();
    var movieType = getDropDownData();

    if (errorArray.length > 0) {
        document.getElementById('result').value = errorArray.join("\n");
    } else {
        document.getElementById('result').value = "Thanks, your data was submitted!";
    }

    errorArray = [];
}

function getCheckedBoxData() {
    var values = [];
    var select = document.getElementById("check-box");
    var input = select.getElementsByTagName("input");

    for (var i = 0; i < input.length; i++) {
        if(input[i].type === "checkbox" && input[i].checked) {
            values.push(input[i].value);
        }
    }

    if (values.length === 0) {
        errorArray.push("Please select least one browser.");
    }

    return values;
}

function getRadioButtonData() {
    var value = "";
    var select = document.getElementById("radio-button");
    var input = select.getElementsByTagName("input");

    for (var i = 0; i < input.length; i++) {
        if (input[i].type === "radio" && input[i].checked) {
            value = input[i].value;
            break;
        }
    }

    if (value.length === 0) {
        errorArray.push("Please select your age group.");
    }

    return value;
}

function getDropDownData() {
    var value = "";
    var select = document.getElementById("movie-types");
    if (!(select.value === "None")) {
        return value = select.value;
    } else {
        errorArray.push("Please select a movie type.");
        return;
    }
}

function getUserFullName() {
    var fullName =  document.forms["survey-form"].elements["fullname"].value;

    if (fullName.length === 0) {
        return errorArray.push("Please enter your full name.");
        
    }

    if (validateName(fullName)) {
        return fullName;
    }

    return errorArray.push("Please enter your full name.");
}

function validateName(fullName) {
    var regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(!regex.test(fullName)) {
        return false;
    }

    return true;
}


