//------------WRONG BUTTON EVENTS--------------//
//button1
function buttonPopUp(){
    var txt;
    if(confirm("Is this the correct button? Click 'Cancel' if False. Click 'OK' if True" )){
        txt = "Sorry, this is NOT the correct button! Try Again!!";
    }else{
        txt = "You're right, this is NOT the correct button! Try Again!";
    }
    document.getElementById("popUp").innerHTML = txt;
}

//button2
function wrongButton(){
    alert('WRONG!');
}

//button3
const myButton = document.getElementById("button3");
myButton.addEventListener('mouseenter',()=>{
    myButton.textContent = 'DO NOT CLICK ME!';
    }); 
  myButton.addEventListener('mouseleave',()=>{
    myButton.textContent = 'CLICK Me!';
});
function dontClick(){
    alert('Why did you click the button? This is the WRONG button. I tried to warn you!');
}    

//button5
function changeText(id){
    id.innerHTML = "INCORRECT!";
}

//button6
const buttonSix = document.getElementById('button6');
let clickCount = 0;
buttonSix.addEventListener('click', function(){
    clickCount++;
    if(clickCount === 1){
        this.innerText = "If this button is INCORRECT, it will DISAPPEAR when clicked again."
    } else if(clickCount === 2){
        this.style.display ='none';
    }
});

//------------CORRECT BUTTON EVENT--------------//
//button4
function correctButton(){
    alert('CORRECT!!!')
}
function textChange(id){
    id.innerHTML = "CORRECT!! CONGRATS!!!"
}

const buttonLabels = ["Click Me!", "I'm Correct", "Button", "Hello?", "Never Click Me!!"];
const container = document.getElementById("buttonContainer");
for(let i=0;i<buttonLabels.length;i++){
    const button = document.createElement("button");
    button.textContent=buttonLabels[i];

    button.addEventListener("click",()=>{
        alert("You clicked the WRONG button!!!");

    });
    container.appendChild(button);
}
