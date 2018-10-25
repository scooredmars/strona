document.write("Liczenie sredniej arytmetycznej </br>");
var n = parseInt(prompt("Podaj ilosc liczb: "));
var suma = 0;
for (a = 1; a <= n; a++) {
  var b = parseInt(prompt("Podaj dane liczby: "))
  suma += b / n;
}
document.write("Wynik : " + suma + "");
