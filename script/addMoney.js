document.getElementById("add-money-btn").addEventListener("click", function () {
    //1 - bank account get
    const bankAccount = getValueFromInput("add-money-bank");
    if (bankAccount == "Select A Bank") {
        alert("Please select a bank");
        return;
    }
    //2 - bank account number get
    const accno = getValueFromInput("add-money-Number");
    if (accno.length != 11) {
        alert("invalid acc no");
        return;
    }
    //3 - get amount to add
    const amount = getValueFromInput("add-money-amount");
    //4 - Total amount
    const newBalance = getBalance() + Number(amount);
    console.log(newBalance);
    

    // 5- Get the pin and verify
    const pin = getValueFromInput("add-money-pin");
    if (pin === '1234') {
        // 6- true:: Show an alert > set Balance
        alert(`Add Money Success from
            ${bankAccount}
            at ${new Date()}`);
        setBalance(newBalance);
    } else {
        // 7- true:; Show an error > return
        alert("Invalid pin");
        return;
    }


})