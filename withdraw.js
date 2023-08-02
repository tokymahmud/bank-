document.getElementById('btn-withdraw').addEventListener('click', function(){
const withdrawfield = document.getElementById('withdraw-field');
const newwithdrawammountstring = withdrawfield.value;
const newwithdrawammount = parseFloat(newwithdrawammountstring);
console.log(newwithdrawammount);
// s7
withdrawfield.value = '';

if(isNaN(newwithdrawammount)){
    alert('please provide valid number');
    return;
}
// s3
const withdrawtotalelement = document.getElementById('withdraw-total');
const previouswithdrawtotalstring = withdrawtotalelement.innerText;
const previouswithdrawtotal =parseFloat(previouswithdrawtotalstring) ;



// s5
const balancetotalelement = document.getElementById('balance-total');
const previousbalancetotalstring = balancetotalelement.innerText;
const previousbalancetotal = parseFloat(previousbalancetotalstring);


// s7
withdrawfield.value = '';



if(newwithdrawammount >previousbalancetotal ){
    alert('teka nai heda');
    return;

}

// s4
const currentwithdrawtotal = previouswithdrawtotal + newwithdrawammount;

withdrawtotalelement.innerText = currentwithdrawtotal;

// s6
const newbalancetotal = previousbalancetotal - newwithdrawammount;
balancetotalelement.innerText = newbalancetotal;

// s7
withdrawfield.value = '';

})



// onn ooewhfiyrgyf
// if(isNaN(newbaseFieldTriangle) ){
//     alert('please provide valid number');
//     return;
// }

// else if (isNaN(newheightFieldTriangle)) {
//     alert('please provide valid number');
//     return;
// }

// else{
// const totalTriangleField = 0.5*newbaseFieldTriangle*newheightFieldTriangle;
// const displayfield = document.getElementById('t-field');
// displayfield.innerText = totalTriangleField;


// }
// newbaseFieldTriangle  = '';
// newheightFieldTriangle  = '';
// return;