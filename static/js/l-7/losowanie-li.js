document.write("Losowanie liczb i jej najwieksza liczba </br>");
var max = 0;
for (var i = 1; i <= 10; i++) {
  var a = Math.floor(Math.random() * 100);
  document.write("" + a + "</br>")
  if (a > max) {
    max = a;
  }
}
document.write("</br>");
document.write("Najwieksza liczba: " + max + "");
