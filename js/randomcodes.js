// import { code, str } from "./site_scripts";
// console.log('These are code & str: ',code, str);

//Function to generate combination of characters
function generateCode() {
    var code = ''; //to store generated codes and initialize to empty value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    //Generate character multiple times using a loop
    for(let i = 0; i <= 8; i++) {
        var charIdx = Math.random() * str.length; //randomly select a character index from str variable
        code += str.charAt(charIdx); //accumulate the generated character into a string of 8
    }
    return code; //return the final accumulated string when loop ends
}

//Get HTML element to display
var generatedCode = document.getElementById("codes").innerHTML = generateCode();

//Disable Button
function disableButton(btnvalue) {
    document.getElementById('submit').disabled = btnvalue; //able/disable button
    if(btnvalue === true) { //test if button is disabled or enabled 
        //set button and label color translucent
        document.getElementById('submit').style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById('submit').style.color = "rgba(255, 255, 255, 0.5)";
        // document.getElementById('submit').style.color = "orange";
    } else {
        //set button and label color with no transparency
        document.getElementById('submit').style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById('submit').style.color = "rgba(255, 255, 255, 1)";
        // document.getElementById('submit').style.color = "red";
    }
}
 
//listen to user input code
var codebox = document.getElementById("codeentered"); //get textbox
codebox.addEventListener('input', evaluateCode); //listen to code entered in textbox

//run function if detected user had entered a character in textbox 
function evaluateCode() {
    getCode = document.getElementById("codeentered").value; //get character entered
    // code = document.getElementById("codes").value;
    var charset1 = getCode.trim(); //remove any hidden characters entered
    var charset2 = generatedCode.trim(); //remove any hidden characters generated
    //test if code entered matches the number of generated characters
    // console.log('Charset1: ', charset1, 'Charset2: ', charset2, 'code: ', code);
    if(charset1.length === charset2.length && charset1 === charset2) { 
        disableButton(false); //If match, run the function to enable button
    }
}

//Activate function
// disableButton(true);