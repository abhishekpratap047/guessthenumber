function randomint(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min)+min);
}

let ans = randomint(1,100);
const input_field = document.querySelector("#userinput");
const result_box = document.querySelector("#result");
const history = document.querySelector("#history");
const reset_button = document.querySelector("#reset");
const description = document.querySelector("#description");
let counter = 10;
description.textContent = `Guess any number between 0 to 100. You have ${counter} chances to guess the right answer.`;
reset_button.disabled = true;

const submit_button = document.querySelector("#submit");
submit_button.addEventListener("click",()=>{

    let input = input_field.value;
    console.log(ans);
    if(input==ans){
        result_box.textContent = " You Win!";
        result_box.style.backgroundColor = "rgb(142,245,136)";
        const para = document.createElement("p");
        para.textContent = `${input}`;
        para.style.border = "solid 3px rgb(82,215,255)";
        history.appendChild(para);
        submit_button.disabled=true;
        input_field.disabled= true;
        reset_button.disabled=false;
        description.textContent = `Congratulations. You guessed the right answer!`;

    }
    else{

        if(input>ans){
            result_box.textContent = " Guess too high! ";
        }
        else{
            result_box.textContent = " Guess too low! ";
        }

        result_box.style.backgroundColor = "rgb(245,103,103)";
        const para = document.createElement("p");
        para.textContent = `${input}`;
        history.appendChild(para);
        input_field.value = " ";
        setTimeout(()=>
        {result_box.style.backgroundColor = "rgb(255,153,153)";},500);

        if(counter==2){
            description.textContent = `Guess any number between 0 to 100. You have ${counter-1} chance to guess the right answer.`; 
        }
        else{
            description.textContent = `Guess any number between 0 to 100. You have ${counter-1} chances to guess the right answer.`;
        }

    }

    counter -=1;
    if (counter==0){
        input_field.disabled=true;
        result_box.textContent = "You Lose!";
        reset_button.disabled=false;
        submit_button.disabled=true;
        description.textContent = `You failed to guess the right answer.`;

    }

});


reset_button.addEventListener("click",()=>{
    ans=randomint(0,100);
    input_field.value = " ";
    result_box.textContent = "Enter a number!"
    result_box.style.backgroundColor = "rgb(170, 236, 253)";
    const myNode=history;
    while(myNode.firstChild){
        myNode.removeChild(myNode.lastChild);
    }
    myNode.textContent = "History: ";
    counter=10;
    submit_button.disabled=false;
    input_field.disabled=false;
    description.textContent = `Guess any number between 0 to 100. You have ${counter} chances to guess the right answer.`;

});




