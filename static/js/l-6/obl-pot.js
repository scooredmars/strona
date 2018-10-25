document.write("Podawanie liczby i jej potegi </br>");
var x = parseInt(prompt("Podaj liczbe: "));
var n = parseInt(prompt("Podaj potege: "));
wynik = 1;
for (x = 1; x <= n; x++) {
  wynik = wynik * n;
  document.write(wynik + ", ");
}
