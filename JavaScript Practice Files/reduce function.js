//Additipn program in the forn of functions
let arr1 = [1,2,3,4,5];
let op1 = arr1.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(op1)

//Finding Maximum number program in the forn of functions
let arr2 = [1,2,3,4,5];
let op2 = arr2.reduce((prev,curr)=>{
    return prev > curr ? prev : curr;
});
console.log(op2)