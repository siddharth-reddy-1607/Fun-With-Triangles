const inputs=document.querySelectorAll(".input");
const calculateButton=document.querySelector("#calculate");
const output=document.querySelector("#output");

calculateButton.addEventListener("click",calculateArea);

function calculateArea()
{
    var area=0.5*Number(inputs[0].value)*Number(inputs[1].value);
    output.innerText="The area of the triangle is "+area+" cm²";
}