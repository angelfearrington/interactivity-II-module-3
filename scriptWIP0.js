let firstButton = document.getElementById('button1');

firstButton.style.backgroundColor = '#9CAF88';

function openNextButton(nextButtonId){
let nextButtonElement = document.getElementById(nextButtonId);
nextButtonElement.classList.remove('hidden');



nextButtonElement.style.backgroundColor = '#9CAF88'

}

document.body.style.backgroundColor = "lavender";
document.body.style.color = "purple";