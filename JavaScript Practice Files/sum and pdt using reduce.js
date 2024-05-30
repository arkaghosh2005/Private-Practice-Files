let n = prompt("Enter the length of array:");
let arr = [];
for (let i=0;i<n;i++)
{
    ins=i+1;
    arr.push(ins);
};
console.log(arr);
const sum = arr.reduce((prev,curr)=>{
    return prev+curr;
});
const pdt = arr.reduce((prev,curr)=>{
    return prev*curr;
});
console.log("The sum of the numbers is:", sum);
console.log("The product of the numbers is:", pdt);