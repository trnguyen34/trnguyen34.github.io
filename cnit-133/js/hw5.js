function run() {
    var checkedBoxData = getCheckedBoxData();
    var output = document.getElementById("output");

    document.getElementById('result').value = checkedBoxData
}

function getCheckedBoxData() {
    var values = [];
    var select = document.getElementById("survey-form");
    var option = select.getElementsByTagName("input");

    for (var i = 0; i < option.length; i++) {
        if(option[i].type === "checkbox" && option[i].checked) {
            values.push(option[i].value);
        }
    }

    return values;
}




