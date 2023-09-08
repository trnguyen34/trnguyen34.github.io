function hwAvg(num) {
    return num * 0.5;
}

function midExam(num) {
    return num * 0.2;
}

function finalExam(num) {
    return num * 0.2;
}

function particaipation(num) {
    return num * 0.1;
}

function finalAvg(homework, midterm, finalEx, participate) {
    return hwAvg(homework) + midExam(midterm) + finalExam(finalEx) + particaipation(participate)
}

function calculate() {
    if ($("#my-form").valid()) {
        var homework = parseFloat(document.forms['my-form'].elements['homeworkAverage'].value);
        var midterm = parseFloat(document.forms['my-form'].elements['midTerm'].value);
        var finalEx = parseFloat(document.forms['my-form'].elements['finalExam'].value);
        var participate = parseFloat(document.forms['my-form'].elements['participation'].value);

        var finalGrade = Math.round(finalAvg(homework, midterm, finalEx, participate));
        let letterGrade;
        
        switch (true) {
            case finalGrade >= 90:
                letterGrade = "\nFinal Letter Grade: A";
                break;
            case finalGrade >= 80:
                letterGrade = "\nFinal Letter Grade: B";
                break;
            case finalGrade >= 70:
                letterGrade = "\nFinal Letter Grade: C";
                break;
            case finalGrade < 70:
                letterGrade ="\nStudent must retake the course";
                break;
        }
        document.forms["my-form"].elements["result"].value = "Final Grade Percentage: " + finalGrade + "%" + letterGrade;
    }
}

function clearForm() {
    document.getElementById("my-form").reset();
    $("#my-form").validate().resetForm(); 
}

var validator = $(document).ready(function() {
    $("#my-form").validate({
        rules: {
            homeworkAverage: {
                required: true,
                number: true,
                min: 0,
                max: 100
            },
            midTerm: {
                required: true,
                number: true,
                min: 0,
                max: 100
            }, 
            finalExam: {
                required: true,
                number: true,
                min: 0,
                max: 100
            },
            participation: {
                required: true,
                number: true,
                min: 0,
                max: 100
            }
        },
    });
});

$(document).ready(function(){
    $("#fadeaway").click(function(){
        $("#result").fadeTo("slow", 0.15);
    });
});

$(document).ready(function(){
    $("#fadeaway").click(function(){
        $("#result-label").fadeTo("slow", 0.15);
    });
});

$(document).ready(function(){
    $("#sumbit").click(function(){
        $("#result").fadeTo("slow", 1);
    });
});

$(document).ready(function(){
    $("#sumbit").click(function(){
        $("#result-label").fadeTo("slow", 1);
    });
});