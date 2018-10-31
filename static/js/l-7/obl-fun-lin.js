document.write("Obliczanie funkcji liniowej </br>");
var a = parseInt(prompt("Podaj a: "));
var b = parseInt(prompt("Podaj b: "));
var xpocz = parseInt(prompt("Podaj xpocz: "));
var xkon = parseInt(prompt("Podaj xkon: "));
var x;
var wynik;
for (x = xpocz; x <= xkon; x++) {
  wynik = (a * x) + b;
  document.write(wynik + "</br>");
}
