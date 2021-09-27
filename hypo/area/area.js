var inputBase = document.querySelector("#valueBase");
var inputHeight = document.querySelector("#valueHeight");
var buttonSubmit = document.querySelector("#button-hypo");
var HypoDisplay = document.querySelector("#output-box");
var areaDisplay = document.querySelector("#area-display");


function calculateArea(){ 
    var base = inputBase.value;
    var height = inputHeight.value;
    if ( base >0 && height >0){ 
    if(base&&height){
   
    var areaCalculated =  areaOfTriangle(base,height);
    
    areaDisplay.innerText="Area of Triangle is :"+areaCalculated;
} else {
    areaDisplay.innerText="Please input valid Values";
}
    } else {
        areaDisplay.innerText="Please input Positive values";
    }
}

buttonSubmit.addEventListener("click",calculateArea);


function areaOfTriangle(b,h){
    var area = 0.5*b*h;
    return area;
}



