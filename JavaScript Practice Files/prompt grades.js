let marks = prompt("Enter marks out of 100:")
grade='';
if (marks>=80)
{
    grade='A'
}
else if (marks>=70 && marks < 80)
{
    grade='B'
}
else if (marks>=60 && marks < 70)
{
    grade='C'
}
else if (marks>=50 && marks < 60)
{
    grade='D'
}
else if (marks>=40 && marks < 50)
{
    grade='E'
}
else if (marks>=0 && marks < 40)
{
    grade='F'
}
console.log(grade)