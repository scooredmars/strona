document.write("Liczenie silnej poprzez for </br>");
var b = parseInt(prompt("Podaj liczbe dla for: "));
var silnia = 1;
for (a = 1; a <= b; a++) {
  var silnia = silnia * a;
}
document.write(silnia);
document.write("</br>");
document.write("</br>");


document.write("Liczenie silnej poprzez while </br>");
var b = parseInt(prompt("Podaj liczbe dla while: "));
var a = 1;
var silnia = 1;
while (a <= b) {
  var silnia = silnia * a;
  a++;
}
document.write(silnia);
