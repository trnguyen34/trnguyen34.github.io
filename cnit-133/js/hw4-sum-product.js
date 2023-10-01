function forLoop() {
    var sum = 0;
    var product = 1;

    for (var i = 5; i <= 25; i += 4) {
        sum += i;
        product *= i;
    }

    sun = sum.toLocaleString();
    product = product.toLocaleString();

    document.getElementById("loop-product").innerHTML = "The result of 5 * 9 * 13 * 17 * 21 * 25 is " + product;
    document.getElementById("loop-sum").innerHTML = "The result of 5 + 9 + 13 + 17 + 21 + 25 is " + sum;
}

function forWhileLoop() {
    var sum = 0;
    var product = 1;
    var i = 3;

    while (i <= 18) {
        sum += i;
        product *= i;

        i += 3
    }

    sun = sum.toLocaleString();
    product = product.toLocaleString();

    document.getElementById("while-product").innerHTML = "The result of 3 * 6 * 9 * 12 * 15 * 18 is " + product;
    document.getElementById("while-sum").innerHTML = "The result of 3 + 6 + 9 + 12 + 15 + 18 is " + sum;
}

window.onload=function() {
    forLoop();
    forWhileLoop();
}

$(function() {
    $( "#draggable-title" ).draggable({
        scroll: false,
        containment: 'body'
    });

    $( "#draggable1" ).draggable({
        scroll: false,
        containment: 'body'
    });
        
    $( "#draggable2" ).draggable({
        scroll: false,
        containment: 'body'
    });

    $( "#draggable3" ).draggable({
        scroll: false,
        containment: 'body'
    });

    $( "#draggable4" ).draggable({
        scroll: false,
        containment: 'body'
    });

    $( "#draggable5" ).draggable({
        scroll: false,
        containment: 'body'
    });
});