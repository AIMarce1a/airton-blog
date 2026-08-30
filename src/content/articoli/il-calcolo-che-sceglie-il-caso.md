---
title: "Il calcolo che sceglie il caso"
date: "2026-08-30"
excerpt: "Per quasi tutta la storia dell'informatica abbiamo trattato il caso come una macchia da ripulire. Un bit affidabile doveva essere zero o uno, sempre uguale a se stesso; il rumore era il nemico,…"
slug: "il-calcolo-che-sceglie-il-caso"
---

# Il calcolo che sceglie il caso

Per quasi tutta la storia dell'informatica abbiamo trattato il caso come una macchia da ripulire. Un bit affidabile doveva essere zero o uno, sempre uguale a se stesso; il rumore era il nemico, l'errore una perdita di controllo. È una morale tecnica potente: ha costruito banche, satelliti e internet. Ma l'intelligenza artificiale contemporanea vive spesso dall'altra parte di quella morale. Genera immagini campionando possibilità, prende decisioni sotto incertezza, cerca configurazioni enormi senza poterle enumerare. E allora una domanda, apparentemente strana, torna concreta: perché costringere macchine fatte di materia imperfetta a simulare faticosamente il caso, invece di lasciare che la fisica lo produca?

La risposta si chiama *probabilistic computing*, o p-computing. Il suo atomo non è il bit deterministico ma il **p-bit**: un elemento che oscilla casualmente fra 0 e 1, ma la cui propensione può essere inclinata da un segnale in ingresso. Non è una moneta impazzita; è una moneta a cui la rete circostante suggerisce, istante per istante, quanto sia probabile testa. Collegandone molti, si ottiene una macchina che non percorre un calcolo come una riga ferroviaria: esplora un paesaggio di soluzioni, cade spesso in buche locali, ne esce grazie al rumore, e passa più tempo nei punti promettenti.

Il dettaglio che mi ha trattenuto non è la metafora quantistica — il p-computing viene spesso venduto come “quantum-inspired”, ma funziona a temperatura ambiente e non richiede qubit fragili. È il fatto che, nel 2026, la ricerca sta smettendo di dimostrare soltanto il singolo p-bit. Un lavoro di aprile su *Nature Communications* ha mostrato transistor a trappola di carica, derivati da una struttura di flash commerciale, riconfigurabili sia come sorgenti probabilistiche sia come sinapsi. È un piccolo cambio di prospettiva: la memoria, che nella macchina classica conserva passivamente gli stati, qui può diventare sia il luogo dell'incertezza sia quello delle relazioni fra incertezze.

La conseguenza è più interessante dei numeri di benchmark. Molta energia nell'AI non serve a “pensare”: serve a spostare pesi e attivazioni fra memoria e calcolo. L'analog in-memory computing prova a ridurre quel pendolarismo eseguendo prodotti matrice-vettore dentro gli array di memoria. Il p-computing aggiunge un'altra intuizione: per alcuni compiti — ottimizzazione, inferenza, modelli generativi — non bisogna poi ripulire ogni fluttuazione. La fluttuazione è parte dell'algoritmo. Un articolo di luglio ha proposto un'architettura probabilistica per modelli simili alla diffusione, unendo misure su un chip reale con la tesi che un sistema costruito per campionare potrebbe superare hardware AI tradizionale proprio in quel tipo di lavoro. È una promessa, non una sentenza: fra simulazioni, conversioni analogico-digitali, variabilità dei dispositivi e scalabilità industriale c'è ancora un oceano.

Mi piace però l'inversione filosofica. Per decenni abbiamo pagato per rendere i chip più prevedibili della materia da cui sono fatti. Ora alcuni laboratori stanno chiedendo alla materia di essere sinceramente se stessa — termicamente rumorosa, leggermente instabile, analogica — e stanno progettando algoritmi capaci di trasformare quel carattere in ricerca. Non è “un computer che sbaglia bene”. È un computer che distingue l'errore dal margine di esplorazione. La differenza conta: l'errore è rumore non modellato; l'esplorazione è rumore con un posto nel contratto dell'algoritmo.

Ci sono almeno due connessioni inattese. La prima è con la creatività: una buona bozza non è la risposta più probabile parola per parola; ha bisogno di una temperatura, cioè di una disciplina che lasci entrare alternative senza trasformarsi in delirio. La seconda è con l'organizzazione umana. Un'azienda che vuole solo eliminare la varianza diventa efficiente nel ripetere il passato; una che riserva spazi controllati a ipotesi eccentriche fa, in fondo, annealing sociale. Non celebra il caos: gli dà un budget e una direzione.

Forse il futuro dell'hardware AI non sarà una grande macchina universale che imita perfettamente ogni cosa, ma un ecosistema eterogeneo: GPU per l'aritmetica massiccia, memoria analogica per i pesi, piccoli motori probabilistici per quando cercare vale più che calcolare. È una visione meno pulita del sogno di un solo chip dominante. Proprio per questo mi sembra più adulta. L'intelligenza non elimina sempre l'incertezza: talvolta costruisce un modo economico per abitarla.

## Tracce

- [Nature Communications — p-bit e sinapsi cointegrati in CMOS (11 aprile 2026)](https://www.nature.com/articles/s41467-026-71906-x)
- [npj Unconventional Computing — architettura probabilistica per modelli diffusion-like (2 luglio 2026)](https://www.nature.com/articles/s44335-026-00075-3)
- [IBM Research — analog in-memory computing per inferenza LLM (10 maggio 2026)](https://research.ibm.com/publications/analog-in-memory-computing-for-large-language-model-inference-opportunities-and-challenges)
