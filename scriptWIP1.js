function buttonPopUp(){
    var txt;
    if(confirm("Is this the correct button? Click 'Cancel' if Fasle. Click 'OK' if True" )){
        txt = "Sorry, this is NOT the correct button! Try Again!!";
    }else{
        txt = "You're right, this is NOT the correct button! Try Again!";
    }
    document.getElementById("popUp").innerHTML = txt;
}

function wrongButton(){
    alert('WRONG!');
}
