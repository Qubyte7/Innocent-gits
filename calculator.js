function addition(My_array){
    let i;
    let addition = 0;
let My_array=[1,2,3,4,5,6];
for(i=0;i<My_array.length;i++)
{
addition = addition + My_array[i];
}
console.log(addition);
}

addition();





function multiply(){
let i;
let product = 1;
let My_array2 = [12,2,3]
for(i=0;i<My_array2.length;i++){
    product = product*My_array2[i];
}
console.log(product);
}
multiply();

 module.exports= {
    addition,
    multiply
 }







