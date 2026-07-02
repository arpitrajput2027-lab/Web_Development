// function user_account(){
//     let balance = 0;

//     const user = {
//         deposit: function(deposit_amount) {
//             if (typeof deposit_amount === "number" && deposit_amount >0 ){
//                 balance += deposit_amount;
//             }
//             return balance;
//         },
//         withdraw : function(withdraw_amount){
//              if (typeof withdraw_amount === "number" && withdraw_amount <= balance){
//                 balance -= withdraw_amount;
//             }
//             return balance;
//         },
//         get_balance : function(){
//             return balance;
//         }
// };
//     return user;
// }


function user_account(){
    let balance = 0;

   return {
        deposit: function(deposit_amount) {
            if (typeof deposit_amount === "number" && deposit_amount >0 ){
                balance += deposit_amount;
            }
            return balance;
        },
        withdraw : function(withdraw_amount){
             if (typeof withdraw_amount === "number" && withdraw_amount <= balance){
                balance -= withdraw_amount;
            }
            return balance;
        },
        get_balance : function(){
            return balance;
        }
};
}

//Here We have have basically privatized the balance -->> And it can't be accessed directly
const user1 = user_account();
console.log(user1.get_balance())
console.log(user1.deposit(1500))
console.log(user1.withdraw(1000))
console.log(user1.get_balance())
