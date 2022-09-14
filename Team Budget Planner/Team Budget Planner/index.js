
var budsave=0
var totalExpense=0
var rem=0

function savebudget() {
     budsave = document.getElementById("setbud").value

    document.getElementById("totalbud").innerHTML = budsave;

    rem=budsave-totalExpense
    document.getElementById("expense").innerHTML=totalExpense
    document.getElementById("remaining").innerHTML=rem

    document.getElementById("bud-div").style.display="none"

}



function addExpense() {
    let expname = document.getElementById("expname").value
    let expvalue =parseInt( document.getElementById("expamount").value)
        totalExpense=(totalExpense+expvalue)
    
    rem=budsave-totalExpense
    document.getElementById("expense").innerHTML=totalExpense
    document.getElementById("remaining").innerHTML=rem

    document.getElementById("expdisplay").innerHTML += `<br>
    <li id="lis">
   <div class="col">
   <p id="expensename">${expname}</p>
</div>
<div class="col">
   <p id="expensevalue">${expvalue}</p>
</div>

</li>`
 
 
}

function displayBudgetForm(){
   document.getElementById("bud-div").style.display="block"
}
function displayExpenseForm(){
   document.getElementById("exp-div").style.display="block"
}

function hideExpenseForm(){
   document.getElementById("exp-div").style.display="none"
}
function hideBudgetForm(){
   document.getElementById("bud-div").style.display="none"
}
