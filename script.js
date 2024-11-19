function sum(){
    x=Number(document.getElementById("num1").value);
    y=Number(document.getElementById("num2").value);
    sum=x+y; 
    document.getElementById("ans").innerHTML="The answer is "+sum;
}