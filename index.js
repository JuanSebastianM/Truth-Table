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
const result = document.getElementById("result");

const transferCost = document.getElementById("cost")

const saveButton = document.getElementById("save");
saveButton.addEventListener("click", save)
function save() {
    const clientBank = document.getElementById("cbank"); //The client's bank.
    //console.log(clientBank.value);
    const clientBalance = document.getElementById("balance"); //Current client's balance.
    //console.log(clientBalance.value);
    const clientName = document.getElementById("caccount"); //Account's holder name.
    //console.log(clientName.value);
    const targetBank = document.getElementById("tbank"); //Account the money will be transferred to.
    //console.log(targetBank.value);
    const targetAccount = document.getElementById("taccount"); //Target account's holder name.
    //console.log(targetAccount.value);
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
const verifiedClient = "Daniela Páez"; //determines whether the client account is verified or not.
const verifiedTarget = "Juan Sebastián Mendoza"; //determines whether the target account is verified or not.


/*if ((hour >= 9 && hour < 12) || (hour >= 15 && hour < 20)) {
    if (clientBank == targetBank) {
        transferCost = 0;
    } 
    else {
        transferCost = 100;
    }
    if (verifiedClient == true && verifiedDestination == true && clientBalance >= transferCost) {
        allowTransfer();
    }
    else {
        denyTransfer();
    }
}
else {
    denyTransfer();
}*/