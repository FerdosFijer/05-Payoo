document.getElementById("cashout-btn").addEventListener("click", function () {

    // 1- get the agent number & validate
    const cashoutNumber = getValueFromInput("cashout-number");
    if (cashoutNumber.length != 11) {
        alert("Invalid Agent Number");
        return;
    }
    // 2- get the amount
    const cashoutAmount = getValueFromInput("cashout-amount");
    // 3- get the current Balance
    const currentBalance = getBalance()
    // 4- Calculate new Balance
    const newBalance = currentBalance - Number(cashoutAmount);
    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }
    console.log("New Balance is ", newBalance);
    
    // 5- Get the pin and verify
    const pin = getValueFromInput("cashout-pin");

    if (pin === '1234') {
        // 6- true:: Show an alert > set Balance
        alert("Cash out successful");

        setBalance(newBalance);
    } else {
        // 7- true:; Show an error > return
        alert("Invalid pin");
        return;
    }

    /* // 1- get the agent number & validate
    const cashoutNumberInput= document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    if(cashoutNumber.length != 11){
        alert("Invalid Agent Number");
        return;
    }
    
    // 2- get the amount, validate, convert to Number
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);


    // 3- get the current Balance, validate, convert to Number
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);
    
    // 4- Calculate new Balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    if(newBalance<0 ){
        alert ("Invalid Amount");
        return;
    }
    console.log("new balance is ", newBalance);
    
    // 5- Get the pin and verify
    const cashoutPinInput = document.getElementById("cashout-pin");
    const pin= cashoutPinInput.value;
    console.log("My pin is:", pin);
    if(pin === '1234'){
        // 6- true:: Show an alert > set Balance
        alert("Cash out successful");
         console.log("new balance is ", newBalance); //newbalance ta dekbo eikan a
         balanceElement.innerText = newBalance;
    }else{
        // 7- true:; Show an error > return
        alert("Invalid pin");
        return;
    } */


})