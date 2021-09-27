var angleOne = document.querySelector("#angle1");
var angleTwo = document.querySelector("#angle2");
var angleThree = document.querySelector("#angle3");
var buttonCheck = document.querySelector("#button-check");
var displayOutput = document.querySelector("#output-box");

function checkTriangle(){
    var a = Number(angleOne.value);
    var b = Number(angleTwo.value);
    var c = Number(angleThree.value);
    if( (a&&b&&c) != 0) {
        if( a>0 && b>0 && c>0) {
     if((a+b+c) === 180) {
      displayOutput.innerText = "It is a Triangle";
     } else {
         displayOutput.innerText = "It is Not a Triangle";
     }} else {
         displayOutput.innerText="Please input positive value";
     }
    } else {
         displayOutput.innerText = "please Input Correct Values";
     }
}

buttonCheck.addEventListener("click", checkTriangle);

