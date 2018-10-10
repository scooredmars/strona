var a = parseInt(prompt("Podaj 1 liczbe: "));
var b = parseInt(prompt("Podaj 2 liczbe: "));
var c = parseInt(prompt("Podaj 3 liczbe: "));
var tmp;

if (a > b) {
  tmp = a;
  a = b;
  b = tmp;
}
if (b > c) {
  tmp = b;
  b = c;
  c = tmp;
}
if (a > b) {
  tmp = a;
  a = b;
  b = tmp;
}
document.write("Najmniejsza liczba to: " + a);
