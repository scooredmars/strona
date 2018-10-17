document.write("Wyswietlenie liczb od 0-10 </br>");
var a = 1
while (a <= 10) {
  document.write(a + " ");
  a++;
}
document.write("</br>");
document.write("</br>");


document.write("Wyswietlenie liczb 30-15 malejaco </br>");
var a = 30
while (a >= 15) {
  document.write(a + " ");
  a--;
}
document.write("</br>");
document.write("</br>");


document.write("Wyswietlenie liczb 10-20 rosnaco </br>");
var a = 10
while (a <= 20) {
  document.write(a + " ");
  a++;
}
document.write("</br>");
document.write("</br>");


document.write("Wyswietlenie liczb 5-100 co 5 </br>");
var a = 5
while (a <= 100) {
  document.write(a + " ");
  a = a + 5;
}
document.write("</br>");
document.write("</br>");


document.write("Wyswietlenie liczb od 0 do liczby podamej przez uzytkownika </br>");
var y = parseInt(prompt("Podaj 1 liczbe: "));
var a = 0
while (a <= y) {
  document.write(a + " ");
  a++;
}
document.write("</br>");
document.write("</br>");


document.write("Wyswietlenie liczb z przedzialu podanego przez uzytkownika </br>");
var x = parseInt(prompt("Podaj 2 liczbe: "));
var y = parseInt(prompt("Podaj 3 liczbe: "));
var a = x
while (a <= y) {
  document.write(a + " ");
  a++;
}
