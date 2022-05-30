const angles=document.querySelectorAll(".input");
const checkButton=document.querySelector("#check");
const output=document.querySelector("#output");

checkButton.addEventListener("click",isTriangle);

function isTriangle()
{
    if(angles[0].value && angles[1].value && angles[2].value)
    {
    var sum=Number(angles[0].value)+Number(angles[1].value)+Number(angles[2].value);
    if(sum === 180)
    {
        output.innerText="Yaayyy! This is a triangle :)"
    }
    else
    {
        output.innerText="The sum of angles is not equal to 180. This is not a triangle"
    }
    }
    else
    {
        output.innerText="Please enter all the fields"
    }
}