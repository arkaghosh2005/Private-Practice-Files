let a = 5;
let b = 10;
console.log(a+b); //will be printed as usual
try{
    console.log(a+b); //will be printed as no error is found
    console.log(a+c); //error line
    console.log(a+b); //will not get printed as it is inside the try catch block after error catching

} catch(error) {
    console.log(error);
};
console.log(a+b); //will be printed as it is outside the try catch block