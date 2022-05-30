const questionForm=document.querySelector("#question-form");
const submit=document.querySelector("#submit");
const output=document.querySelector("#output");
const answers=["90°","Right Angled","Isoceles","50°","(√3/4)a^2"]


submit.addEventListener("click",calculateScore)

function calculateScore()
{
    var i=0;
    var score=0;
    const formData=new FormData(questionForm);
    for(var value of formData.values())
    {
    
            if(answers[i] === value)
            {
            score++;
            }
            i++;

    }
    output.innerText="Your score is "+score;
}