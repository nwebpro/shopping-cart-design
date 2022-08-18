function phoneCartFunction(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const prevPhoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber;
    if(isIncrease === true){
        newPhoneNumber = prevPhoneNumber + 1;
    }else{
        newPhoneNumber = prevPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = phoneCartFunction(true);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
    
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = phoneCartFunction(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
    
})






