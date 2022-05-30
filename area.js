const inputs=document.querySelectorAll(".input");
const calculateButton=document.querySelector("#calculate");
const output=document.querySelector("#output");

calculateButton.addEventListener("click",calculateArea);

function calculateArea()
{
    if(inputs[0].value && inputs[1].value)
    {
    var area=0.5*Number(inputs[0].value)*Number(inputs[1].value);
    output.innerText="The area of the triangle is "+area+" cm²";
    }
    else
    {
        output.innerText="Please enter both the fields"
    }
}