function run() {
    var userName = document.forms["survey-form"].elements["fullname"].value;
    document.getElementById('result').value = getCheckedBoxData() + " \n" 
        + getRadioButtonData() + " \n" + getDropDownData() + " \n" + userName;
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

    return values;
}

function getRadioButtonData() {
    var value;
    var select = document.getElementById("radio-button");
    var input = select.getElementsByTagName("input");

    for (var i = 0; i < input.length; i++) {
        if (input[i].type === "radio" && input[i].checked) {
            value = input[i].value;
            break;
        }
    }

    return value;
}

function getDropDownData() {
    var select = document.getElementById("movie-types");
    return select.value;
}




