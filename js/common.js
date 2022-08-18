function getTextElementValueById(elementId){
    const totalProductElement = document.getElementById(elementId);
    const currentProductTotalString = totalProductElement.innerText;
    const currentProductTotal = parseInt(currentProductTotalString);
    return currentProductTotal;
}

function setTxtElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    // Calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTxtElementValueById('sub-total', currentSubTotal)
    

    // Calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);

    setTxtElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTxtElementValueById('final-total', finalAmount);
}