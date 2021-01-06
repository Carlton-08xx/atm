let pin = ["1234","0825"];
let balance = ["1000","500"];

        let accounts = [
            {
                pin: "1234"
                balance: "1000"
            },
            {
                pin: "0825"
                balance: "500"
            }
        ]

        console.log (accounts)
        localStorage.setItem("pin", "1234")
        ;




function loginPin() {
    let loginPin = parseInt(document.getElementById("loginPin").value);
    if (isNaN(loginPin)) {
        document.getElementById("displayAlerts").innerHTML = "Value must be numbers only";
        setTimeout(clearErr, 3000);
    }

    else if (loginPin == localStorage.getItem("pin")) {
        document.getElementById("login").style = "display:none";
        document.getElementById("withdrawalDeposit").style = "display:block";
        document.getElementById("displayBalance").innerHTML = "$" + localStorage.getItem("balance");
        
    }
    else {
        document.getElementById("displayAlerts").innerHTML = "Account Not Found";
        setTimeout(clearErr, 3000);

    }
    

}

function createPin() {
    let createPin = parseInt(document.getElementById("createPin").value);

    if (isNaN(createPin)) {
        document.getElementById("displayAlerts").innerHTML = "Value must be numbers only";
        setTimeout(clearErr, 3000);
    }

    else if (createPin == localStorage.getItem("pin")) {
        document.getElementById("displayAlerts").innerHTML = "PIN already exists";
        setTimeout(clearErr, 3000);
    }
    else {
        localStorage.setItem("pin",createPin);
        localStorage.setItem("balance",0);
        document.getElementById("login").style = "display:none";
        document.getElementById("withdrawalDeposit").style = "display:block";
        document.getElementById("displayBalance").innerHTML = "$" + localStorage.getItem("balance");

    }
}

function withdrawal() {
    
    let withdrawalAmount = parseInt(document.getElementById("withdrawalInput").value);



    let lsBalance = parseInt(localStorage.getItem("balance"));

    if (isNaN(withdrawalAmount)) {
        document.getElementById("displayAlerts").innerHTML = "Value must be numbers only";
        setTimeout(clearErr, 3000);
    }
    else if (withdrawalAmount > localStorage.getItem("balance")) {
        document.getElementById("displayAlerts").innerHTML = "Back off Scrub";
        setTimeout(clearErr, 3000);
    }
    else {
        lsBalance -= withdrawalAmount;
        localStorage.setItem("balance", lsBalance);
        document.getElementById("displayBalance").innerHTML = "$" + localStorage.getItem("balance");

    }
}

function deposit() {
    let depositAmount = parseInt(document.getElementById("depositInput").value);


    let lsBalance = parseInt(localStorage.getItem("balance"));

    if (isNaN(depositAmount)) {
        document.getElementById("displayAlerts").innerHTML = "Value must be numbers only";
        setTimeout(clearErr, 3000);
    }
    else if (depositAmount < 0) {
        document.getElementById("displayAlerts").innerHTML = "Can't deposit a negative number";
        setTimeout(clearErr, 3000);
    }
    else {
        lsBalance += depositAmount;
        localStorage.setItem("balance", lsBalance);
        document.getElementById("displayBalance").innerHTML = "$" + localStorage.getItem("balance");

    }            
}

function updatePin() {
    
}

function isBlank(bal) {

}

function clearErr() {
    document.getElementById("displayAlerts").innerHTML = "";
}

/*

PSUEDO CODE
---     If the user presses loginPinBtn
    isBlank()
    check the user input against localStorage
    if the login is invalid
        display error message
    otherwise it's valid
        hide the login div
        show the withdrawal deposit div
        get info from localstorage
            balance
        display balance



---        If the user presses createPinBtn
    isBlank()
    check the user input against localStorage
    if PIN already exists
        display error message
    Otherwise PIN is available
        Store pin in localStorage
        Set balance to 0
        hide the login div
        show the withdrawal deposit div
        show balance

---        If the user presses the withdrawal button
    get the value from the textbox
    isBlank()
    get their balance from localStorage
    if value is > balance
        display error message
    otherwise it's valid so withdrawal
        balance - value
        display balance
        store new balance in localStorage

If the user presses the deposit button
    get the value from the textbox
    isBlank()
    get their balance from localStorage
    if value is <= 0
        display error message
    otherwise it's valid so deposit
        balance + value
        display balance
        store new balance in localStorage

If the user presses the update PIN button
    if the value is a blank string - isBlank()
        display error
    otherwise
        check value against localstorage
        if value exists
            display error
        otherwise
            update PIN in localStorage