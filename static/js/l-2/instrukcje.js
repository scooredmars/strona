var imie;
imie = prompt("Jak masz na imie?");

alert("Witaj " + imie + "!!!Dobrze, ze jestes :)");

var decyzja;
decyzja = confirm("Czy chcesz przejsc do mojej strony?");

if (decyzja)
  document.write("Otwieram strone ...");
else
  document.write("Przykro mi. Przemysl to jeszcze.");
