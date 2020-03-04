var button = document.getElementById("dropbtn")
button.addEventListener("click", toggle_form)
function toggle_form() {
    var toToggle = document.getElementById("subnav")
    if (toToggle.style.display === "none") {
        toToggle.style.display = "block";
    }
    else {
        toToggle.style.display = "none"
    }
}

document.addEventListener("submit", toSubmit);
var booking
function toSubmit(e) {
    e.preventDefault()
    var pName = document.getElementById("pName").value;
    var pGender = document.getElementById("pGender").value;
    var pAge = document.getElementById("pAge").value
    var pSpecs = document.getElementById("pSpecs").value;
    var pNumber = document.getElementById("pNumber").value;
    var pSymptom = document.getElementById("pSymptom").value;
    
    localStorage.setItem("name", JSON.stringify({ name: pName, gender: pGender,Symptom: pSymptom, Specs: pSpecs }))
    booking = JSON.parse(localStorage.getItem('name')); 
    document.getElementById("showAppoint").innerText = `Dear ${booking.name}`
    document.getElementById("theappiont").innerText = `you  will see a
     consultant in ${booking.Specs} please head to the ${booking.gender} 
 consulting room by the left, a nurse awaits you to confirm the reason for your ${booking.Symptom}`
  
}

function onDomMount() {

   booking = JSON.parse(localStorage.getItem('name')); 
   document.getElementById("showAppoint").innerText = `Dear ${booking.name}`
   document.getElementById("theappiont").innerText = `you  will see a
    consultant in ${booking.Specs} please head to the ${booking.gender} 
consulting room by the left, a nurse awaits you to confirm the reason for your ${booking.Symptom}`
}

var cancelbutton = document.getElementById("cancelbutton")
    cancelbutton.addEventListener("click", reset)
    function reset(){
        localStorage.clear("name");
        location.reload()
    }
