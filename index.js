const hour = Math.floor(Math.random()*24);
const minute = Math.floor(Math.random()*60);
const time = document.getElementById("time");
function showTime() {
    if (minute < 10) {
        time.innerHTML += "The current time is: " + hour + ":0" + minute;
    }
    else {
        time.innerHTML = "The current time is: " + hour + ":" + minute;
    }
}
showTime();
let result = document.getElementById("result");

let transferCost = document.getElementById("cost");

let transferAmount = document.getElementById("transferAmount");

let clientBank = document.getElementById("cbank"); //The client's bank.

let clientBalance = document.getElementById("balance"); //Current client's balance.

let clientName = document.getElementById("caccount"); //Account's holder name.

let targetBank = document.getElementById("tbank"); //Account the money will be transferred to.

let targetAccount = document.getElementById("taccount"); //Target account's holder name.

let totalCost = clientBalance.value + transferCost.value;


let verifiedClient = false; //This is the verified "client" account name.
let verifiedTarget = false; //This is the verified "target" account name.


const saveButton = document.getElementById("save");
saveButton.addEventListener("click", save)
function save() {
    let verify = document.getElementById("verify");
    if ((clientName.value == "Daniela Páez" ^ clientName.value == "Juan Mendoza") && (targetAccount.value == "Daniela Páez" ^ targetAccount.value == "Juan Mendoza")) {
        verifiedClient = true;
        verifiedTarget = true;
        if (clientName.value == "Daniela Páez") {
            clientBalance.value = 1005000;
        }
        else if (clientName.value == "Juan Mendoza") {
            clientBalance.value = 2000500;
        }
        if ((hour >= 9 && hour < 12) || (hour >= 15 && hour < 20)) {
            if (clientBank.value == targetBank.value) {
                transferCost.value = 0;
            } 
            else {
                transferCost.value = 100;
            }
        }
        else {
            result.innerHTML = "<strong>WARNING:</strong> Remember you can only make transfers from 9:00 to 12:00 and 15:00 to 20:00. Come back later!";
        }
    
    }
    else {
        verify.innerHTML = "Cannot proceed to make a transfer: account is not verified. Transfer procedure disabled."
    }
}

const transferButton = document.getElementById("transferButton");
transferButton.addEventListener("click", transfer)
function transfer() {
    if (parseInt(totalCost) > parseInt(transferAmount.value)) {
        result.innerHTML = "<hr />Dear " + clientName.value + ", the transfer has been made succesfully from your <strong>" + clientBank.value + "</strong> account to " + targetAccount.value + "'s <strong>" + targetBank.value + "</strong> account. We thank you for using our services.";
    }
    else {
        result.innerHTML = "<hr />Dear " + clientName.value + ", the total cost of the transfer exceeds the current balance of your account.";
    }
}