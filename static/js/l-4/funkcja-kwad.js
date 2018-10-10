var a = parseInt(prompt("Podaj 1 liczbe: "));
var b = parseInt(prompt("Podaj 2 liczbe: "));
var c = parseInt(prompt("Podaj 3 liczbe: "));

if (a == 0) {
  alert("To nie jest równanie kwadratowe");
} else {
  var delta = b * b - 4 * a * c;
  var p = Math.sqrt(delta);

  if (delta == 0) {
    var wynik = -b / (2 * a);
    alert("Równanie ma jedno rozwiązanie, wynosi: " + wynik);
  }

  if (delta > 0) {
    var x1 = (-b - p) / (2 * a);
    var x2 = (-b + p) / (2 * a);
    alert("Równanie ma dwa rozwiązania, pierwsze wynosi: " + x1 + ", a drugie: " + x2);
  } else {
    alert("Delta jest ujemna, równanie nie ma rozwiązań!");
  }
}
