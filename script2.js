var slideIndex = 0;
slideShow()
function slideShow(){
    var i;
    // getting all images
    var slides = document.getElementsByClassName("images");
    for(i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if(slideIndex>slides.length){
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = 'block';
    // setting time between each image to display
    setTimeout(slideShow, 3000);
}
var fname = document.getElementById("fname");
function addDetails(){
    var key = document.getElementById("emailid").value;
    var value = document.getElementById("pswd").value;
    // if fields are empty
    if(key == "" || value == ""){
        alert("Field cannot be empty")
    }
    else{
        localStorage.setItem(key,value);
    }
    replaceSchemes()
}
function replaceSchemes(){
    window.location.href = "/index.html";
}