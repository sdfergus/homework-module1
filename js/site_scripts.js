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