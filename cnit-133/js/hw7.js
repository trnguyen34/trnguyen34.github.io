function run() {
    getRadioValue();
    appliedTextStyles();
    getDropdownDataFontSize();
}

function getRadioValue() {
    var value = "";
    var select = document.getElementById("radio");
    var input = select.getElementsByTagName("input");

    for (var i = 0; i < input.length; i++) {
        if (input[i].type === "radio" && input[i].checked) {
            value = input[i].value;
            break;
        }
    }
    document.getElementById("styles-content").style.background = value;
}

function getCheckBoxValues() {
    var values = [];
    var select = document.getElementById("checkboxes");
    var input = select.getElementsByTagName("input");

    for (var i = 0; i < input.length; i++) {
        if(input[i].type === "checkbox" && input[i].checked) {
            values.push(input[i].value);
        }
    }
    return values;
}

function appliedTextStyles() {
    var checkboxValues = getCheckBoxValues();

    if (checkboxValues.includes("underline")) {
        document.getElementById("styles-content").style.textDecoration = "underline";
    } else {
        document.getElementById("styles-content").style.textDecoration = "none";
    }

    if (checkboxValues.includes("bold")) {
        document.getElementById("styles-content").style.fontWeight = "bold";
    } else {
        document.getElementById("styles-content").style.fontWeight = "normal";
    }

    if (checkboxValues.includes("italic")) {
        document.getElementById("styles-content").style.fontStyle = "italic";
    } else {
        document.getElementById("styles-content").style.fontStyle = "initial";
    }
}

function getDropdownDataFontSize() {
    var select = document.getElementById("font-sizes");
    var value = select.value;
    document.getElementById("styles-content").style.fontSize = value;
}
