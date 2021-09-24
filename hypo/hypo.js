var inputBase = document.querySelector("#valueBase");
var inputHeight = document.querySelector("#valueHeight");
var buttonSubmit = document.querySelector("#button-hypo");
var HypoDisplay = document.querySelector("#output-box");
var areaDisplay = document.querySelector("#area-display");


function calculateAreaAndHypotenuse(){ 
    var base = inputBase.value;
    var height = inputHeight.value;
    if(base&&height ===0){
    var hypotenuse = valueOfHypotenuse(base,height);
    var areaCalculated =  areaOfTriangle(base,height);
    HypoDisplay.innerText ="Hypotenuse of triangle is :"+hypotenuse;
    areaDisplay.innerText="Area of Triangle is :"+areaCalculated;
} else {
    HypoDisplay.innerText="Please input valid Values";
}
}

buttonSubmit.addEventListener("click",calculateAreaAndHypotenuse);

function valueOfHypotenuse(b,h){
     var area = b*b + h*h;
     var squareRoot = Math.sqrt(area);
     return squareRoot;
}

function areaOfTriangle(b,h){
    var area = 0.5*b*h;
    return area;
}



