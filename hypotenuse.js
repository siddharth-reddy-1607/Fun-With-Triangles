const sides=document.querySelectorAll(".input");
const calculateButton=document.querySelector("#calculate");
const output=document.querySelector("#output");

calculateButton.addEventListener("click",calculateHypotenuse);

function calculateHypotenuse()
{
    const a=Number(sides[0].value);
    const b=Number(sides[1].value);
    var sumOfSquares=a*a+b*b;
    var hypotenuse=Math.sqrt(sumOfSquares);
    output.innerText="The lenght of the hypotenuse is "+hypotenuse+"cm";
}