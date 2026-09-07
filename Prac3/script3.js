var bankName = "Secure Bank Ltd.";
let branch = "Ahmedabad";
const IFSC = "0000000001";
function showScope(){
    console.log("Function Is Calling")
    var message = "";
    console.log(message);
    console.log(typeof message);
    if(true){
        var customer = "Rudra";
        let account = "Savings";
        message += "<br>" + "Customer: " + customer + "<br>";
        message += "Account: " + account + "<br>";

    }
    message += "Customer Outside block: " + customer + "<br>";
    message+= "Branch: " + branch + "<br>";
    message+= "Bank: " + bankName + "<br>";
    message+= "IFSC: " + IFSC;

    const op = document.getElementById("output");
    op.innerHTML = message;

}
function calcualteInterest()
{
    var loan = document.getElementById("loan").value;
    var rate = document.getElementById("rate").value;
    var time = document.getElementById("time").value;

    var si = (loan * rate * time)/100;

    document.getElementById("output").innerHTML = "Simple Interest: " + si;
}
function calculateEMI()
{
    var loan = document.getElementById("loan").value;
    var rate = document.getElementById("rate").value;
    var time = document.getElementById("time").value;
    var mr = rate/(100*12);
    var month = time*12;
    var emi = (loan*mr * Math.pow(1+mr, month))/(Math.pow(1+mr, month));
    document.getElementById("output").innerHTML = "EMI: " + emi;
}
function checkEligibility()
{
    var sal = document.getElementById("income").value;
    var age = document.getElementById("age").value;

    if (age >=21 && age <=60 && sal >=30000)
    {
        document.getElementById("output").innerHTML = "Eligible.";
    }
    else
    {
        document.getElementById("output").innerHTML = "Not Eligible.";
    }
}
function accountType()
{
    let choice = Number(prompt("Enter Account Type: \n1.Savings\n2.Curret\n3.Fixed deposit"));
    console.log(choice)
    switch(choice)
    {
        case 1:
            document.getElementById("output").innerHTML = "Savings Account selected!";
            break;
        case 2:
            document.getElementById("output").innerHTML = "Current Account Selected!";
            break;
        case 3:
            document.getElementById("output").innerHTML = "Fixed Deposit selected!";
            break;
        default:
            document.getElementById("output").innerHTML = "Invalid Choice!!";

    }
    function generateInterestTable()
    {
        let loan = document.getElementById("loan").vlaue;
        let rate = document.getElementById("rate").value;
        let years = document.getElementById("time").value;
        let result = "<h3>Interest Table</h3>";

        for (let year = 1; year <= years; year++)
        {
            let interest = calcualteInterest()
        }
    }
    
}