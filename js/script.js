let memoryPrice = document.getElementById('memoryRate');
function memoryBtn1(){
    memoryPrice.innerText = 0;
    let firstMemoryPrice = memoryPrice.innerText;
};

function memoryBtn2(){
    memoryPrice.innerText = 180;
    let secondMemoryPrice = memoryPrice.innerText;
};

//storage

let storagePrice = document.querySelector('#storageRate');
function storageBtn1(){
       storagePrice.innerText = 0;
};
function storageBtn2(){
    storagePrice.innerText = 100;
};
function storageBtn3(){
    storagePrice.innerText = 180;
}

// shipping Charge
let shippingPrice = document.querySelector('#shippingRate');
function shippingBtn1(){
    shippingPrice.innerText = 0;
};
function shippingBtn2(){
    shippingPrice.innerText = 20;
};

//total


//promo-code
document.getElementById('promo-apply').addEventListener('click', function(){
    const promoField = document.getElementsByClassName('bg-danger');
    const userPromo = promoField.value;
    console.log(userPromo);
});




