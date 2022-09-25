//Function to generate combination of characters
function generateCode() {
    //Generate character multiple times using a loop
    for(let i = 0; i <= 8; i++) {
        var charIdx = Math.random() * str.length; //randomly select a character index from str variable
        code += str.charAt(charIdx); //accumulate the generated character into a string of 8
    }
    return code; //return the final accumulated string when loop ends
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//Disable Button
function disableButton(btnvalue) {
    document.getElementById('submit').disabled = btnvalue; //able/disable button
    if(btnvalue === true) { //test if button is disabled or enabled 
        //set button and label color translucent
        document.getElementById('submit').style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById('submit').style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        //set button and label color with no transparency
        document.getElementById('submit').style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById('submit').style.color = "rgba(255, 255, 255, 1)";
    }
}

//Activate function
disableButton();