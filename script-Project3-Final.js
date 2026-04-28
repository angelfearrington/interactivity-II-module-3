//---------------RANDOMIZE BUTTON POSITIONS-----------------//
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
    setTimeout(()=> {
        document.getElementById("popUp").style.display = "none";
    }, 3000);
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

//button 11 - inner text changes
function innerTextChange(id){
    id.innerHTML = "How did you find this?"
}

//button 12 - every time clicked inner text changes until button disappears
const buttonTwelve = document.getElementById('button12');
let twelveClick = 0;
buttonTwelve.addEventListener('click',function(){
    twelveClick++;
    if(twelveClick === 1){
        this.innerText = "How did you get here?";
    }else if(twelveClick === 2){
        this.innerText = "Help Me...";
    }else if(twelveClick === 3){
        this.innerText = "I want to go HOME";
    }else if(twelveClick === 4){
        this.innerText = "Please, make me disappear!"
    }else if(twelveClick === 5){
        this.style.display = 'none';
    }
});

//button13 - when mouse moves over button inner text changes and alerts when clicked
const buttonThirteen = document.getElementById("button13");
buttonThirteen.addEventListener('mouseenter',()=>{
    buttonThirteen.textContent = 'Am I A Button?';
});
buttonThirteen.addEventListener('mouseleave',()=>{
    buttonThirteen.textContent = 'What Am I?';
})
function whatAmI(){
    alert('I do not want to be a button');
}

//button 14 - inner text change
function changeTxt(id){
    id.innerHTML = "WHY AM I WRONG?";
}

//button 15 - disappear when click
const buttonFifteen = document.getElementById('button15');
let nmbr = 0;
buttonFifteen.addEventListener('click', function(){
    nmbr++;
    if(nmbr === 1){
        this.style.display = 'none';
    }
});

//button 16 - promt alert
const buttonSixteen = document.getElementById('button16');
buttonSixteen.addEventListener('click',function(){
   let userInput = prompt("Will You Help Me?", "Type Yes or No");
   if(userInput !== null){
       alert("LEAVE ME ALONE!!!");
   }
});


//button 17 - inner text change when hold down button and let go
function mDown(obj){
    obj.innerHTML = "...no one thinks i am correct...";
}
function mUp(obj){
    obj.innerHTML = "i will never be correct..."
}

//button 18 - alert
document.getElementById("button18").addEventListener("click",function(){
    alert("You Will NEVER Find The 'Correct' Button! Give Up Now!!")
})

//button 19 - inner text change with each click
const buttonNineteen = document.getElementById('button19');
let nineteenClick = 0;
buttonNineteen.addEventListener('click',function(){
    nineteenClick++;
    if(nineteenClick === 1){
        this.innerText = "Just Give Up";
    }else if(nineteenClick === 2){
        this.innerText = "This Seems Like Madness";
    }else if(nineteenClick === 3){
        this.innerText = "What Is The Point?";
    }else if(nineteenClick === 4){
        this.innerText = "Stop Clicking ME!"
    }else if(nineteenClick === 5){
        this.innerText = "I AM WRONG!!"
    }else if(nineteenClick === 6){
        this.style.display = "none";
    }
});

//button 20 - disappear when click
const buttonTwenty = document.getElementById('button20');
let twenty = 0;
buttonTwenty.addEventListener('click', function(){
    twenty++;
    if(twenty === 1){
        this.style.display = 'none';
    }
});

//button 21 - cancel or ok
function insane(){
    if(confirm("if you are insane click 'cancel' and if you are not insame click 'ok'"));
}

//button 22 - multiple alerts
var c = document.getElementById("button22");
c.addEventListener("click",myFunction);
c.addEventListener("click",myOtherFunction);
c.addEventListener("click",another);
function myFunction(){
    alert("Did you really think this was the right button?");
}
function myOtherFunction(){
    alert("I'm embarrased for you...");
}
function another(){
    alert("You should REALLY just give up");
}

//button 23 - change inner text each time button is clicked
const buttonTwoThree = document.getElementById('button23');
let twoThreeClick = 0;
buttonTwoThree.addEventListener('click',function(){
    twoThreeClick++;
    if(twoThreeClick === 1){
        this.innerText = "I don't belong here...";
    }else if(twoThreeClick === 2){
        this.innerText = "You don't belong here...";
    }else if(twoThreeClick === 3){
        this.innerText = "We should both leave";
    }else if(twoThreeClick === 4){ 
        this.style.display = "none";
    }
});

//button 24 - prompt box and change inner text
const buttonTwoFour = document.getElementById('button24');
buttonTwoFour.addEventListener('click',function(){
   let input = prompt("Will You Help Me?", "Type Yes or No");
});
function innerChange(id){
    id.innerHTML = "I don't trust you..."
}

//button 25 - double click
const buttonTwoFive = document.getElementById("button25");
buttonTwoFive.addEventListener('mouseenter',()=>{
    buttonTwoFive.textContent = 'Double Click Me';
    }); 
  buttonTwoFive.addEventListener('mouseleave',()=>{
    buttonTwoFive.textContent = 'FIND ME!';
});
function twoClick(id){
    id.innerHTML = "YOU FOUND ME!(Not the Correct Button)"
}

//button 26 - two alerts
var m = document.getElementById("button26");
m.addEventListener("click",pleaseLeave);
m.addEventListener("click",leaveNow);
function pleaseLeave(){
    alert("Why won't you LEAVE?");
}
function leaveNow(){
    alert("WE DON'T WANT YOU HERE!!");
}


//button 27 - change inner text then disappear
const buttonTwoSeven = document.getElementById('button27');
let twoSevenClick = 0;
buttonTwoSeven.addEventListener('click',function(){
    twoSevenClick++;
    if(twoSevenClick === 1){
        this.innerText = "goodbye...";
    }else if(twoSevenClick === 2){ 
        this.style.display = "none";
    }
});

//button 28 - not a button, nothing happens when clicked


//button 29 - 
const buttonTwoNine = document.getElementById('button29');
let twoNine = 0;
buttonTwoNine.addEventListener('click', function(){
    twoNine++;
    if(twoNine === 1){
        this.style.display = 'none';
    }
});

//button 30 - why
const threeZero = document.getElementById("button30");
threeZero.addEventListener('mouseenter',()=>{
    threeZero.textContent = 'why not...?';
    }); 
  threeZero.addEventListener('mouseleave',()=>{
    threeZero.textContent = '...why?';
});
function whyNot(){
    alert('W H Y ??  WHAT IS THE REASON?!?!?!');
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
