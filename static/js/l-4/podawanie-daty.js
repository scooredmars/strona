var dzien = parseInt(prompt("Podaj  dzien: "));

if (dzien == 10) {
  var miesiac = parseInt(prompt("Podaj  miesiac: "));
  if (miesiac == 10) {
    var rok = parseInt(prompt("Podaj  rok: "));
    if (rok == 2018) {
      document.write("poprawnie")
    }
  }
} else {
  document.write("Zla data")
}
