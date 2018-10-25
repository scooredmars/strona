document.write("Dodanie liczb z zakresu 1-10 (for)</br>");
var suma = 0;
for (var a = 1; a <= 10; a++) {
  suma = suma + a;
}
document.write(suma);
document.write("<br>");
document.write("<br>");


document.write("Dodanie liczb z zakresu 1-10 (while)</br>");
var suma = 0;
x = 1;
while (x <= 10) {
  suma = suma + x;
  x++;
}
document.write(suma);
document.write("<br>");
document.write("<br>");

document.write("Dodanie liczb z zakresu 1-10 (do while)</br>");
var suma = 0;
x = 1;
do {
  suma = suma + x;
  x++;
}
while (x <= 10)
document.write(suma);
document.write("<br>");
document.write("<br>");


document.write("Dodawanie sumy kolejnych licz do zakresu podanego przez uzytkownika</br>");
var a = parseInt(prompt("Podaj 1 liczbe: "));
var b = parseInt(prompt("Podaj 2 liczbe: "));
var suma = 0;
while (a <= b) {
  suma = suma + a;
  a++;
}
document.write(suma);
document.write("<br>");
document.write("<br>");


document.write("Funkcja continue</br>");
for (a = 1; a <= 10; a++) {
  if (a == 5) continue;
  document.write(a);
}
