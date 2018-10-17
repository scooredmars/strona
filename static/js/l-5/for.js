document.write("Wyswietlenie liczb od 0-10 </br>");
for (var a = 0; a <= 10; a++) {
  document.write(a + " ");
}
document.write("</br>");
document.write("</br>");

document.write("Wyswietlenie liczb 30-15 malejaco </br>");
for (var a = 30; a >= 15; a--) {
  document.write(a + " ");
}
document.write("</br>");
document.write("</br>");

document.write("Wyswietlenie liczb 10-20 rosnaco </br>");
for (var a = 10; a <= 20; a++) {
  document.write(a + " ");
}
document.write("</br>");
document.write("</br>");

document.write("Wyswietlenie liczb 5-100 co 5 </br>");
for (var a = 5; a <= 100; a = a + 5) {
  document.write(a + " ");
}
document.write("</br>");
document.write("</br>");

document.write("Wyswietlenie liczb od 0 do liczby podamej przez uzytkownika </br>");
var y = parseInt(prompt("Podaj 1 liczbe: "));
for (var a = 0; a <= y; a++) {
  document.write(a + " ");
}
document.write("</br>");
document.write("</br>");

document.write("Wyswietlenie liczb z przedzialu podanego przez uzytkownika </br>");
var x = parseInt(prompt("Podaj 2 liczbe: "));
var y = parseInt(prompt("Podaj 3 liczbe: "));
for (var a = x; a <= y; a++) {
  document.write(a + " ");
}
document.write("</br>");
document.write("</br>");

document.write("Wyswietlenie sumy liczb z zakresu 1-10 </br>");
var suma = 0;
for (var a = 1; a <= 10; a++) {
  suma = suma + a;
}
document.write(suma);
