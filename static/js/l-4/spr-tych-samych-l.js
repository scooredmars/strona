var a = parseInt(prompt("Podaj 1 liczbe: "));
var b = parseInt(prompt("Podaj 2 liczbe: "));
var c = parseInt(prompt("Podaj 3 liczbe: "));

if (a == b && a == c && b == c) {
  document.write("2 z 3 są takie same");
} else {
  document.write("Zadna liczba nie jest taka sama");
}
