//API FOR addition  
function addition(My_array){
let i;
let addition = 0;
for(i=0;i<My_array.length;i++){
addition = addition + My_array[i];
}
return addition;
}

//Api for multiplication

function multiply(My_array2){
let i;
let product = 1;
for(i=0;i<My_array2.length;i++){
    product = product*My_array2[i];  
}
return product;
}



 module.exports= {
    addition,
    multiply
 }







