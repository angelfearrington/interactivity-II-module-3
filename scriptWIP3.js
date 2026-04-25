//wait for page to load before running
document.addEventListener('DOMContentLoaded',()=>{
    //find all buttons
    const buttons = document.querySelectorAll('button');
    //put class names into array
    const styleClasses = [
        'style-1', 'style-2', 'style-3', 'style-4', 'style-5', 
        'style-6', 'style-7', 'style-8', 'style-9', 'style-10', 
        'style-11', 'style-12', 'style-13', 'style-14', 'style-15', 
        'style-16', 'style-17', 'style-18','style-19', 'style-20'
    ];
    //give each buttona random style and position
    //forEach is like the for(let button of buttons)
    buttons.forEach(button=>{
        //pick a random style and add it to the button
        const randomStyle = styleClasses[Math.floor(Math.random()*styleClasses.length)];
        button.classList.add(randomStyle);
        //find out how much free space on screen
        const padding = 20;
        const maxX = window.innerWidth - button.offsetWidth - padding;
        const maxY = window.innerHeight - button.offsetHeight - padding;
        //pick a random X and Y position
        //start Y at 120px to keep buttons away from title
        const randomX = Math.max(padding, Math.floor(Math.random()*maxX));
        const randomY = Math.max(120, Math.floor(Math.random()*maxY));
        //move the buttons to new positions
        button.style.left = randomX +'px';
        button.style.top = randomY + 'px';
    });
});

//------------WRONG BUTTON EVENTS--------------//
//button1 - Cancel or OK pop up
function buttonPopUp(){
    var txt;
    if(confirm("Is this the correct button? Click 'Cancel' if False. Click 'OK' if True" )){
        txt = "Sorry, this is NOT the correct button! Try Again!!";
    }else{
        txt = "You're right, this is NOT the correct button! Try Again!";
    }
    document.getElementById("popUp").innerHTML = txt;
    const element = document.getElementById("popUp");
    element.style.textAlign = "center";
    element.style.transform = "translateY(-20px)";
    element.style.color = "#035afc";
    element.style.fontSize = "17px";
}

//button2 - WRONG alert
function wrongButton(){
    alert('WRONG!');
}

//button3 - when mouse moves over button it say DO NOT CLICK ME and alerts when clicked
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

//button5 - inner text changes
function changeText(id){
    id.innerHTML = "INCORRECT!";
}

//button6 - when clicked once, inner text changes and when clicked again, button disappears
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

//button 7 - disappears when clicked
const buttonSeven = document.getElementById('button7');
let count = 0;
buttonSeven.addEventListener('click', function(){
    count++;
    if(count === 1){
        this.style.display = 'none';
    }
});

//button8 - when mouse moves over, inner text changes to Double Click Me, when double clicked inner text changes
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

//button9 - every time clicked inner text changes until button disappears
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

//button 10 - inner text changes
function newText(id){
    id.innerHTML = "wrong";
}    

//------------CORRECT BUTTON EVENT--------------//
//button4 - alert CORRECT and inner text changes
function textChange(id){
    id.innerHTML = "YOU FOUND ME! YAY!!"
}

const buttonFour = document.getElementById('button4');
const target = document.getElementById('contentBox');
buttonFour.addEventListener('click', function(){
    target.style.backgroundImage = "url('portrait-of-happy-crowd-enjoying-at-music-festival-2026-03-25-00-17-40-utc.jpg')";
    target.style.backgroundSize = "cover";
});

document.getElementById('button4').addEventListener('click',function(){
    const buttons = document.querySelectorAll('.target');
    buttons.forEach(btn => {
        btn.style.display = 'none';
    });
});
