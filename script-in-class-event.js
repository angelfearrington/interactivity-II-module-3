const button1 = document.getElementById('thisButton');

button1.addEventListener("click", thisButton);

function thisButton(){
    alert("Hello Guys!");
};


const button2 = document.getElementById('clickThisButton');

button2.addEventListener('click', function(){
    document.getElementById('message').innerText = "Button Was Clicked!";
});

