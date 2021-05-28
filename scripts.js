let answers = document.getElementsByClassName("answer");
let questions= document.getElementsByClassName("question");
let qacontainer= document.getElementsByClassName("question-answer");
let questioncontainer= document.getElementsByClassName("question-container");
let icon = document.getElementsByClassName('icon');
let question= document.getElementsByClassName('question');
var alreadyDisplaying = {state: false, element: null};
for (let i=0 ; i < qacontainer.length ; i++) 
{
    qacontainer[i].style.borderBottom= "black";
    qacontainer[i].style.borderBottomStyle= "solid";
    qacontainer[i].style.borderBottomWidth= "1px";
    questions[i].style.margin= '1rem'
    answers[i].style.display = 'none';
    answers[i].style.margin = '0.2rem';
    question[i].style.color ='var(--darker-neutral-text)';
    answers[i].style.color='var(--lighter-neutral-text)';
    answers[i].style.marginLeft = '15px';
    questioncontainer[i].addEventListener('click', ()=> 
    {   
        if (alreadyDisplaying.state && alreadyDisplaying.element == i) 
        {
            restartState();
            alreadyDisplaying.state=false;
            alreadyDisplaying.element=null;
        }
        else if(alreadyDisplaying==false) {
        answers[i].style.display= 'block';
        question[i].style.color='var(--dark-saturated-blue-select)';
        alreadyDisplaying.state=true;
        alreadyDisplaying.element=i;
        }
        else 
        {
        restartState();
        answers[i].style.display= 'block';
        alreadyDisplaying.state=true;
        question[i].style.color='var(--dark-saturated-blue-select)';
        alreadyDisplaying.element=i;
        }
    })
    questioncontainer[i].addEventListener('mouseover', ()=> 
    {   if(alreadyDisplaying.element != i) 
        {
            question[i].style.color ='var(--soft-red-hover)';
        }
    })
    questioncontainer[i].addEventListener('mouseout', ()=> 
    {   if(alreadyDisplaying.element != i) 
        {
            question[i].style.color ='var(--darker-neutral-text)';
        }
    })
}
let restartState = ()=> {
    for (let i=0 ; i < qacontainer.length ; i++) {
    answers[i].style.display = 'none';
    question[i].style.color ='var(--darker-neutral-text)';
}
}
