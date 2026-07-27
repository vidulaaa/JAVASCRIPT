let counterElement=document.getElementById("counterVal");
function onDec(){
    let previousVal=counterElement.textContent;
    let updatedVal=parseInt(previousVal) - 1;
    counterElement.textContent=updatedVal;
    if (updatedVal > 0){
        counterElement.style.color = "green";
    }
    else if (updatedVal < 0) {
        counterElement.style.color = "red";
    }
    else {
        counterElement. style. color = "black";
    }
}
function onRes(){
    updatedVal=0;
    counterElement.textContent=updatedVal;
    counterElement.style.color="black";
}
function onInc(){
    let previousVal=counterElement.textContent;
    let updatedVal=parseInt(previousVal) + 1;
    counterElement.textContent=updatedVal;
    if (updatedVal > 0){
        counterElement.style.color = "green";
    }
    else if (updatedVal < 0) {
        counterElement.style.color = "red";
    }
    else {
        counterElement. style. color = "black";
    }
}