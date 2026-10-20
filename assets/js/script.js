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

/* - intercetto la lista (#lista-task)
- creo un array con dentro oggetti con testo, data formattata (stringa), priorità (alta-media-bassa)
- scrivi gli oggetti nella lista
- intercetta span contatore
- sostituisci il contenuto dello span contatore con il numero di oggetti nell'array
*/



/*intercetto la lista e il contatore*/
const listaTask = document.querySelector("#lista-task");
const contatore = document.querySelector("#contatore");


/*creo un array di oggetti per il database. */
const myTask = [
  {
    titoloTask: "Pagare le bollette",
    priorita: "alta",
    data: new Date(),
  },
  {
    titoloTask: "Studiare JavaScript",
    priorita: "media",
    data: new Date(),
  },
  {
    titoloTask: "Comprare il pane",
    priorita: "bassa",
    data: new Date(),
  },
  {
    titoloTask: "Chiamate il dentista",
    priorita: "alta",
    data: new Date(),
  },
  {
    titoloTask: "Riposare",
    priorita: "alta",
    data: new Date(),
  },
];

/*manipolazioni sul DOM (blocco di codice funzionale / side-effects)*/
function aggiungiTask() {

  /*per scorrere tutti gli oggetti nell'array*/
  myTask.forEach((task) =>{

    /*Creazione e configurazione del tag <li>*/
    const newLi = document.createElement("li");
    /*aggiungi una classe a li.*/
    newLi.classList.add(`priorita-${task.priorita}`);


     /*aggiunta testo del task. crea nodo <span>*/
    const textSpan = document.createElement("span");
    textSpan.textContent = task.titoloTask;
     /*inserisco 'textSpan' come figlio dentro il genitore 'newLi*/
    newLi.appendChild(textSpan);
  

     /*genero un secondo nodo <span> per l'etichetta nera*/
    const badge = document.createElement("span");
    /*applico la classe '.badge' definita in style.css*/
    badge.classList.add("badge");
    /*inserisco come testo il valore di 'task.priorita'*/
    badge.textContent = task.priorita;
    /*inserisco il 'badge' dentro 'newLi'*/
    newLi.appendChild(badge);


    /*genero un terzo nodo <span> che conterrà la data*/
    const taskDate = document.createElement("span");
    /*sia la classe '.data' sia sia '.divData' (float: right per allineare a destra) */
    taskDate.classList.add("data", "divData");
    /* converto l'oggetto Date in una stringa formattata*/
    taskDate.textContent = task.data.toLocaleString("it-IT");


     /*genero il nodo <button>*/
    const elimina = document.createElement("button");
    /*scrivo la parola "Elimina" dentro il bottone usando la proprietà '.textContent'*/
    elimina.textContent = "Elimina";
    /*Aggancia (figlio nel genitore intermedio): metto il bottone 'elimina' dentro 'taskDate' così eredita il posizionamento a destra dato dalla classe*/
    taskDate.appendChild(elimina);
    /*Aggancia (blocco destro nel <li>): inserisco 'taskDate'*/
    newLi.appendChild(taskDate);


      /*Ora che il nodo 'newLi' è completo di tutti i suoi figli, lo aggancio alla lista <ul> ('listaTask')*/
    listaTask.appendChild(newLi);
  });
}


function aggiornaContatore() {
	contatore.textContent = myTask.length;
}

aggiungiTask();
aggiornaContatore();


