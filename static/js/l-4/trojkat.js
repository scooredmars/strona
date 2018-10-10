var a = parseInt(prompt("Podaj 1 liczbe: "));
var b = parseInt(prompt("Podaj 2 liczbe: "));
var c = parseInt(prompt("Podaj 3 liczbe: "));

if (a + b > c && a + c > b && b + c > a) {
  document.write("Mozna zbudowac trojkat");
} else {
  document.write("Nie mozna zbudowac trojkata");
}
