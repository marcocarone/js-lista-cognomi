// Creo Array lista cognomi
var cognomi = ["CARONE", "FIORE", "LANZI", "BAGLINI", "RICCIO", "LOGOZZO", "PATTI"];
// chiedo il cognome all'utente
var cognomeUtente = prompt("Inserisci il tuo Cognome").toUpperCase();
while (cognomeUtente.length <= 0) {
  cognomeUtente = prompt("Inserisci il tuo Cognome");
}
// aggiungo il cognome utente nella lista
cognomi.push(cognomeUtente);
// ordino la lista
cognomi.sort();
for (var i = 0; i < cognomi.length; i++) {
  document.getElementById("lista-cognomi").innerHTML += "<li>" + cognomi[i] + "</li>";
}
// scrivo la posizione del nome utente nella lista
var posizione = cognomi.indexOf(cognomeUtente) + 1;
document.getElementById("posizione").innerHTML = "Sei nella posizione numero " + posizione + " della lista.";
