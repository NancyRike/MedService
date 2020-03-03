var button = document.getElementById("dropbtn")
button.addEventListener("click", toggle_form)
function toggle_form(){
    var toToggle = document.getElementById("subnav")
    if(toToggle.style.display === "none"){
        toToggle.style.display ="block";
    }
    else{
        toToggle.style.display = "none"
    }
}

var submit = document.getElementById("submit")
document.addEventListener("submit" , toSubmit);
function toSubmit(e) {
    e.preventDefault()
var pName = document.getElementById("pName").value;
var pGender = document.getElementById("pGender").value;
var pAge = document.getElementById("pAge").value
var pSpecs = document.getElementById("pSpecs").value;
var pNumber = document.getElementById("pNumber").value;
var pSymptom = document.getElementById("pSymptom").value;

 document.getElementById("showAppoint").innerText=`Dear ${pName} 
 you  will see a consultant in ${pSpecs} please head to the ${pGender} 
 consulting room by the left, a nurse awaits you to confirm the reason for your ${pSymptom}`
}