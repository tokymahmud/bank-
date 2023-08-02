// s1
document.getElementById('btn-deposit').addEventListener('click', function(){
//  s2
const depositfield = document.getElementById('deposit-field');
const newdepositammountstring = depositfield.value;
const newdepositammount = parseFloat(newdepositammountstring)
// console.log(depositammount);
// s3
const deposittotalelement = document.getElementById('deposit-total')
const previousdeposittotalstring = deposittotalelement.innerText;
const previousdeposittotal = parseFloat(previousdeposittotalstring);
// s4
const currentdeposittotal = previousdeposittotal +  newdepositammount;
deposittotalelement.innerText = currentdeposittotal;
// s5
const balancetotalelement = document.getElementById('balance-total');
const previousbalancetotalstring = balancetotalelement.innerText;
const previousbalancetotal = parseFloat(previousbalancetotalstring);
// s6
const currentbalanvetotal = previousbalancetotal + newdepositammount;

balancetotalelement.innerText = currentbalanvetotal;

})
