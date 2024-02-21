
function Deposit( Total_balance,amount){
    Total_balance += amount;
    console.log("Deposited");
    return Total_balance;
}
function Withdrawl(Total_balance,amount,type){
    if(type=="Tap to pay"){
        limit=5000;
        if(amount>limit) console.log("Limit Exceed");
        else{
            console.log("Success");
            Total_balance-=amount;
        }
    }
    if(type=="UPI"){
        limit=100000;
        if(amount>limit) console.log("Limit Exceed");
        
        else{
            console.log("Success");
            Total_balance-=amount;
        }
    }
    return Total_balance;
}
let Total_balance=100000;
let amount=10000;

let check=Deposit(Total_balance,amount);
console.log(check);

let type = "UPI";
Total_balance =Withdrawl(Total_balance,amount,type)
console.log("Total balance after withdrawal: ", Total_balance);

type = "Tap to pay";
Total_balance =Withdrawl(Total_balance,amount,type)
console.log("Total balance after withdrawal: ", Total_balance);
