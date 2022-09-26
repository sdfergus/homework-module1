// Partners list
var fileNames = [];
var fileNameTexts = ["bustour", "cabinrental", "campingadv", "collegetours", "rentalbike", "tourgroup"];
var images = [];
var image;
var imageList = [];

var openListTag = "<li class='partner'>";
var closeListTag = "</li>";

for(var i = 0; i < 6; i++) {
    fileNames.push("partner-"+ fileNameTexts[i]);
    images.push("<img src='/images/partners/" + fileNames[i] + ".png' alt='" + fileNameTexts[i] + "'>");
    image = openListTag + images[i] + closeListTag;
    imageList.push(image);
}

document.getElementById("partners").innerHTML = imageList.join(" ");

/* ------------ RANDOM CODES --------------- */ 

    //Create variables to store generated codes and the type of characters we want to show as codes
    // var code = ''; //to store generated codes and initialize to empty value
    var getCode = ''; //to store entered code
    var btnvalue; //for button boolean value 
    //create variable to hold the type of characters we want to show as codes
    // var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    // export { code, str };