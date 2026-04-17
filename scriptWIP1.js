

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

//button 7
const buttonSeven = document.getElementById('button7');
let count = 0;
buttonSeven.addEventListener('click', function(){
    count++;
    if(count === 1){
        this.style.display = 'none';
    }
});

//button8
const buttonEight = document.getElementById("button8");
buttonEight.addEventListener('mouseenter',()=>{
    buttonEight.textContent = 'Double Click Me';
    }); 
  buttonEight.addEventListener('mouseleave',()=>{
    buttonEight.textContent = 'HELLO!!!';
});
function doubleClick(id){
    id.innerHTML = "WRONG BUTTON!!!"
}

//button9
const buttonNine = document.getElementById('button9');
let whyClick = 0;
buttonNine.addEventListener('click', function(){
    whyClick++;
    if(whyClick === 1){
        this.innerText = "i said i am not a button, why did you click me?";
    } else if(whyClick === 2){
        this.innerText = "stop clicking me!";
    }else if(whyClick === 3){
        this.innerText = "please STOP clicking me!!" 
    } else if(whyClick === 4){
        this.style.display = 'none';
    }
});

//button 10
function newText(id){
    id.innerHTML = "wrong";
}    

//------------CORRECT BUTTON EVENT--------------//
//button4
function correctButton(){
    alert('CORRECT!!!')
}
function textChange(id){
    id.innerHTML = "YOU FOUND ME! YAY!!"
}

