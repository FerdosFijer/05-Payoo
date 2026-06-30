// console.log("000");

// machine id -> input value
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    // console.log(id, value);
    return value;
}
// machine -> balance
function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    return Number(balance);
}
// machine value -> set balance
function setBalance(value) {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}
// machine id > hide all > show id
function showOnly(id){
    console.log("show only click hoise");
    
    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");

    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");


    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}