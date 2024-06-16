let count = 0;
let vow = ['A','a','E','e','I','i','O','o','U','u'];
function Vowel(str)
{
    console.log("Entered String:", str);
    for (let i=0;i<str.length;i++)
        {
            for (let j=0;j<vow.length;j++)
                {
                    if (str[i]==vow[j])
                        {
                            count=count+1;
                        }
                    
                };
        };
    console.log("Total Number of Vowels:", count);
}
let userinput = prompt("Enter a string:");
Vowel(userinput);