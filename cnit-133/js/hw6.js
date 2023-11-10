var errors = [];

function run() {
    var value = document.forms["my-form"].elements["number"].value;
    
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

function getNumberOfMatches() {
    var content = document.forms["search-form"].elements["content"].value;
    var char = document.forms["search-form"].elements["letter"].value.trim();
    validateUserInput(content, char);

    if (errors.length > 0) {
        document.getElementById('result').value = errors.join("\n");
        errors = [];
    } else {
        var result = search(content, char);   
    
        if (result === 0) {
            newWindow(char);
            document.getElementById('result').value = "";
        } else {
            document.getElementById('result').value = "Character '" + char + 
                                            "' shows up in the content " + 
                                            result + " time(s)";
        }
    }
}

function validateUserInput(content, char) {
    if (content.length === 0) {
        errors.push("Please enter a content!");
    }

    if (char.length === 0) {
        errors.push("Please enter a letter!");
    }
}

function newWindow(char) {
    var myText = "<!DOCTYPE html>\n";
    myText += "<html lang='en'>\n";
    myText += "<head>\n";
    myText += "<title>Not Found</title>\n";
    myText += "</head>\n";
    myText += "<body>\n";
    myText += "<div style='margin:0 auto;'>\n";
    myText += "<p><strong>Search character '" + char + "' not found in the content you typed!</strong></p>\n";
    myText += "<input type='button' value='Close' onclick='window.close()'>\n";
    myText += "</div>\n";
    myText += "</body>\n";
    myText += "</html>";

    var myWindow = window.open("", "new_window","top=100,left=1,width=300,height=100");
    myWindow.opener = null;
    myWindow.focus();
    myWindow.document.write(myText);
    myWindow.document.close();
}

function search(content, char) {
    var numberOfMatches = 0;
    for (var i = 0; i < content.length; i++) {
        if (content[i].toLowerCase() === char.toLowerCase()) {
            numberOfMatches += 1;
        }
    }

    return numberOfMatches;
}
