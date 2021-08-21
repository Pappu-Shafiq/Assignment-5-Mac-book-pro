
//Ram 16GB
function memoryUpdate() {
    document.getElementById("extra-ram").innerHTML = 180;
}

//SSD 512GB
function storageUpdate512Gb() {
    document.getElementById("extra-storage").innerHTML = 100;
}

//SSD 1TB
function storageUpdate1Tb() {
    document.getElementById("extra-storage").innerHTML = 180;
}

//Extra delivery Cost
function extraDeliveryCost() {
    document.getElementById("extra-del-cost").innerHTML = 20;
}


//PromoCode
document.getElementById('button-addon2').addEventListener('click', function (stevekaku) {
    document.getElementById("discount-total").innerHTML = 1039.20;
    stevekaku.stopImmediatePropagation();
});


/* 
//PromoCode different way coding
document.getElementById('button-addon2').addEventListener('click', function (event) {
    document.getElementById("discount-total").innerHTML = 1039.20;
    event.stopImmediatePropagation();
});
document.getElementById('discount-total').addEventListener('click', function (event) {
    document.getElementById("button-addon2").innerHTML = stevekaku;

});
 */

