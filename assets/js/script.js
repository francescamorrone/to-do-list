/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/

/* creare nuovi elementi*/

/* - creo l'elemento li della task
-inserisco il titolo del task
- aggiungo la classe della priorità all'elemento li con if
- aggiungo la data e la formatto
- aggiungo il bottone "cancella"*/




const listaTask = document.querySelector("#lista-task");
const contatore = document.querySelector("#contatore");


function aggiungiTask(testo, priorita) {

  const li = document.createElement("li");
  li.textContent = testo;


  /*per assegnare il grado di priorità al task con le classi*/
  switch (priorita) {
    case "alta":
      li.classList.add("priorita-alta");
      break;
    case "media":
      li.classList.add("priorita-media");
      break;
    case "bassa":
      li.classList.add("priorita-bassa");
      break;
  }

  li



}
