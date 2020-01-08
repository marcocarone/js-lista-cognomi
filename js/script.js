var cognomi = ["carone", "fiore", "lanzi", "baglini"];

var cognomeUtente = prompt("Inserisci il tuo Cognome").toLowerCase();
while (cognomeUtente.length <= 0) {
  cognomeUtente = prompt("Inserisci il tuo Cognome");
}


cognomi.push(cognomeUtente);
cognomi.sort();
for (var i = 0; i < cognomi.length; i++) {
  document.getElementById("lista-cognomi").innerHTML += "<li>" + cognomi[i] + "</li>";
}
