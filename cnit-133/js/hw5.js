var errorArray = [];
var statesData = [
    ["AL", "Alabama", "Montgomery", "4,903,185"],
    ["AK", "Alaska", "Juneau", "731,545"],
    ["AZ", "Arizona", "Phoenix", "7,278,717"],
    ["AR", "Arkansas", "Little Rock", "3,017,825"],
    ["CA", "California", "Sacramento", "39,512,223"],
    ["CO", "Colorado", "Denver", "5,758,736"]
];

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

    return errorArray.push("Please enter your full validate name.");
}

function validateName(fullName) {
    var regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(!regex.test(fullName)) {
        return false;
    }

    return true;
}

function listenOnChnage() {
    var destination = document.getElementById("destination-onchange").value;
    window.open(destination);
}

function listenOnclick() {
    var destination = document.getElementById("destination-onclick").value;
    window.open(destination);
}

function getStateResult() {
    var state = document.forms["state-form"].elements["state"].value.toLocaleLowerCase();

    if (state.length === 0) {
        document.getElementById('result').value = "Please enter a state."
    } else {
        var result = searchState(state);
        
    }
}

function searchState(name) {
    var result = [];

    for (var i =0; i < statesData.length; i++) {
        var state = statesData[i];
        var abbrStateName = state[0].toLocaleLowerCase();
        var fullStateName = state[1].toLocaleLowerCase();

        if ((name.localeCompare(abbrStateName) === 0) || 
            (name.localeCompare(fullStateName) === 0)) {
            result = state;
            return result;
        }
    }

    return result
}