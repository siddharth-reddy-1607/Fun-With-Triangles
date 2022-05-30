const sides=document.querySelectorAll(".input");
const calculateButton=document.querySelector("#calculate");
const output=document.querySelector("#output");

calculateButton.addEventListener("click",calculateHypotenuse);

function calculateHypotenuse()
{
    if(sides[0].value && sides[1].value)
    {
    const a=Number(sides[0].value);
    const b=Number(sides[1].value);
    var sumOfSquares=a*a+b*b;
    var hypotenuse=Math.sqrt(sumOfSquares).toFixed(2);
    output.innerText="The length of the hypotenuse is "+hypotenuse+"cm";
    }
    else
    {
        output.innerText="Please Enter both the fields"
    }
}
