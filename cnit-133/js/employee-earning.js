const itemOnePrice = 20.99;
const itemTwoPrice = 12.75;
const itemThreePrice = 9.95;
const itemFourPrice = 35.89;

function itemTotal(price, qty) {
    return (price * qty);
}

function totalAmountSold(itemOneTotal, itemTwoTotal, itemThreeTotal, itemFourTotal) {
    totalAmount = (itemOneTotal + itemTwoTotal + itemThreeTotal + itemFourTotal);
    return totalAmount;
}

function calculateCommission(commission) {
    return (commission * 0.09);
}

function totalEarning(totalAmount) {
    commissionEarn = calculateCommission(totalAmount);
    return (commissionEarn + 250);
}

// function roundTwoDecimalPlaces(amount) {
//     return Math.round()
// }

function calculate(qtyItemOne, qtyItemTwo, qtyItemThree, qtyItemFour) {
    itemOneTotal = itemTotal(itemOnePrice, qtyItemOne);
    itemTwoTotal = itemTotal(itemTwoPrice, qtyItemTwo);
    itemThreeTotal = itemTotal(itemThreePrice, qtyItemThree);
    itemFourTotal = itemTotal(itemFourPrice, qtyItemFour);

    document.forms["result-form"].elements["result-dollars-item-one"].value = itemOneTotal.toFixed(2);
    document.forms["result-form"].elements["result-dollars-item-two"].value = itemTwoTotal.toFixed(2);
    document.forms["result-form"].elements["result-dollars-item-three"].value = itemThreeTotal.toFixed(2);
    document.forms["result-form"].elements["result-dollars-item-four"].value = itemFourTotal.toFixed(2);

    totalAmount = totalAmountSold(itemOneTotal, itemTwoTotal, itemThreeTotal, itemFourTotal);

    document.forms["result-form"].elements["total-dollars-sold"].value = totalAmount.toFixed(2);

    totalEarned = totalEarning(totalAmount);

    document.forms["result-form"].elements["total-dollars-earn"].value = totalEarned.toFixed(2);
}

function run() {
    if ($("#seller-form").valid()) {
        var qtyItemOne = parseFloat(document.forms['seller-form'].elements['qtyItemOne'].value);
        var qtyItemTwo = parseFloat(document.forms['seller-form'].elements['qtyItemTwo'].value);
        var qtyItemThree = parseFloat(document.forms['seller-form'].elements['qtyItemThree'].value);
        var qtyItemFour = parseFloat(document.forms['seller-form'].elements['qtyItemFour'].value);
        
        document.forms["result-form"].elements["result-qty-item-one"].value = qtyItemOne;
        document.forms["result-form"].elements["result-qty-item-two"].value = qtyItemTwo;
        document.forms["result-form"].elements["result-qty-item-three"].value = qtyItemThree;
        document.forms["result-form"].elements["result-qty-item-four"].value = qtyItemFour;

        calculate(qtyItemOne, qtyItemTwo, qtyItemThree, qtyItemFour);
    }
}

var validator = $(document).ready(function() {
    $("#seller-form").validate({
        rules: {
            sellerName: {
                required: true,
            },
            qtyItemOne: {
                required: true,
                number: true,
                min: 0
            },
            qtyItemTwo: {
                required: true,
                number: true,
                min: 0
            },
            qtyItemThree: {
                required: true,
                number: true,
                min: 0
            },
            qtyItemFour: {
                required: true,
                number: true,
                min: 0
            }
        },
    });
});

$(function () {
    $("#sellerName").tooltip({
        content: "<p>Please make sure that the salesperson's name is spelled correctly</p>"
    });
});

function clearForm() {
    document.getElementById("seller-form").reset();
    $("#seller-form").validate().resetForm(); 
}





