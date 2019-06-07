function calcTotal(){
    var tEarned = document.getElementById('totalEarned')
    var tSpent = document.getElementById('totalSpent')
    var va = Number(document.getElementById('va').value)
    var jIncome = Number(document.getElementById('income1').value)
    var cIncome = Number(document.getElementById('income2').value)
    var costcoVisa = Number(document.getElementById('card1').value)
    var amazonVisa = Number(document.getElementById('card2').value)
    var jCarPayment = Number(document.getElementById('jCar').value)
    var cCarPayment = Number(document.getElementById('cCar').value)
    var carInsurance = Number(document.getElementById('ins').value)
    
    tEarned.value = va + cIncome + jIncome
    tSpent.value = costcoVisa + amazonVisa + jCarPayment + cCarPayment + carInsurance

}
var calcButton = document.getElementById("btn")
calcButton.addEventListener('click', calcTotal)