document.write("Podawanie ilosci poteg liczby 2 </br>");
var n = parseInt(prompt("Podaj ilosci liczby: "));
wynik = 1;
for (a = 1; a <= n; a++) {
  wynik = wynik * 2;
  document.write(wynik + ", ");
}
document.write("<br>");
document.write("<br>");


document.write("Podawanie ilosci liczb i ich sumowanie </br>");
var n = parseInt(prompt("Podaj ilosc liczb: "));
var suma = 0;
for (a = 1; a <= n; a++) {
  var b = parseInt(prompt("Podaj dane liczby: "))
  suma += b;
}
document.write("Wynik : " + suma + "");
