const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    document.getElementById('message').innerText = "Hello! How Are You?";
    document.body.style.backgroundColor = "lavender";
    document.body.style.color = "green";
});

