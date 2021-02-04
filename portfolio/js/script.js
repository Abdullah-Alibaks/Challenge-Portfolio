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







