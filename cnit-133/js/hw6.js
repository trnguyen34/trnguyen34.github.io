function run() {
    var value =  document.forms["my-form"].elements["number"].value;
    
    if (validateInput(value)) {
        var value = parseFloat(value);
        document.getElementById('result').value = "You typed number " + value + 
                                                "\nRounded to the nearest integer = " + Math.round(value) +
                                                "\nSquare root rounded to integer = " + Math.round(Math.sqrt(value)) + 
                                                "\nRounded to the nearest 10th position = " + value.toFixed(1) + 
                                                "\nRounded to the nearest 100th position = " + value.toFixed(2) + 
                                                "\nRounded to the nearest 1000th position = " + value.toFixed(3);
    } else {
        document.getElementById('result').value = "You need to type a number with at least 4 decimals, please try again"
    }
}

function validateInput(value) {
    return /^-?\d+(\.\d+)?$/.test(value) && value.includes(".") && numberofDecimals(value);
}

function numberofDecimals(value) {
    var split = value.split(".");

    if (split[1].length === 4) {
        return true;
    }

    return false;
}



