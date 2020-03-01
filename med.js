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