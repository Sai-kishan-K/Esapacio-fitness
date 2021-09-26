function login(){
    var mailid= document.getElementById("email").value
    var pswd = document.getElementById("password").value
    var pswd1 = localStorage.getItem(mailid)
    if(pswd == pswd1){
        loggedIn();
    }
    else{
        alert("You have not registered yet! Register by clicking Register on top right")
    }
}
function loggedIn(){
    window.location.href = "/index3.html";
}