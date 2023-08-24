# Cash-Register 💡
- Continuing my javascript algorithms and data structures Projects with Cash Register.
  
- Cash Register is a function that accepts three arguments:-
  
  🔹(price) => purchase price as the first argument.

  🔹(cash) => payment as the second argument.

  🔹(cid) => is a 2D array listing available currency.

 - The checkCashRegister() function should always return an object with a status key and a change key.
 
 - if cash-in-drawer is less than the change due, or if you cannot return the exact change.
   
   ✅ Return {status: "INSUFFICIENT_FUNDS", change: []}

 - if with cash-in-drawer  is equal to the change due.

   ✅ Return {status: "CLOSED", change: [...]}

 - Otherwise

   ✅ return {status: "OPEN", change: [...]}
   
 Note => with the change, sorted in highest to lowest order, as the value of the change key.

 ![image](https://github.com/Hager-elhwarii/Cash-Register/assets/80959882/29711409-bd86-47b4-8d37-e8920dc77505)

   
      
