function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }
  window.onload = setInterval(clock,1000);
  function clock()
  {
      var d = new Date();
      var date = d.getDate();
      var year = d.getFullYear();
      var month = d.getMonth();
      var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
      month = monthArr[month];
      document.getElementById("date").innerHTML=date+" "+month+", "+year;
  };

let persoon = {
    voornaam : prompt("Wat is je naam?"),
    leeftijd : prompt("Wat is je leeftijd?")
    };


console.log(persoon);
document.getElementById("naamGebruiker").innerHTML= "<h2>" + "Welkom, " + persoon["voornaam"] + "!" + "</h2>";
if(persoon.leeftijd > "18"){
    document.getElementById("gebruiker").style.backgroundColor = "green";
} else {
    document.getElementById("gebruiker").style.backgroundColor = "red";
    document.getElementById("gebruiker").style.color = "black";
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 






