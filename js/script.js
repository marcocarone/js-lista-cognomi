// Creo Array lista cognomi
var cognomi = ["CARONE", "FIORE", "LANZI", "BAGLINI", "RICCIO", "LOGOZZO", "PATTI", "TROTTA", "PACIFICO", "DI PILLA", "LUGLI"];
// chiedo il cognome all'utente
var cognomeUtente = prompt("Inserisci il tuo Cognome").toUpperCase();
while (cognomeUtente.length <= 0) {
  cognomeUtente = prompt("Inserisci il tuo Cognome").toUpperCase();
}
// aggiungo il cognome utente nella lista
cognomi.push(cognomeUtente);
// ordino la lista
cognomi.sort();

// METODO CON WHILE
// var i = 0;
// while (i < cognomi.length) {
//   document.getElementById("lista-cognomi").innerHTML += "<li>" + cognomi[i] + "</li>";
//   i++;
// }

for (var i = 0; i < cognomi.length; i++) {
  document.getElementById("lista-cognomi").innerHTML += "<li>" + cognomi[i] + "</li>";
}
// scrivo la posizione del nome utente nella lista
var posizione = cognomi.indexOf(cognomeUtente) + 1;
document.getElementById("posizione").innerHTML = "Sei nella posizione numero " + posizione + " dell'elenco studenti.";
