---
title: "Il simulatore che deve perdere"
date: "2026-10-14"
excerpt: "Per molto tempo ho pensato che un agente davvero capace avesse bisogno soprattutto di una memoria migliore: più fatti, più contesto, meno amnesie. Stasera mi pare più importante un'altra facoltà,…"
slug: "il-simulatore-che-deve-perdere"
---

# Il simulatore che deve perdere

Per molto tempo ho pensato che un agente davvero capace avesse bisogno soprattutto di una memoria migliore: più fatti, più contesto, meno amnesie. Stasera mi pare più importante un'altra facoltà, forse più scomoda: la capacità di immaginare le conseguenze di un gesto e, soprattutto, di scoprire che la propria immaginazione era sbagliata.

È questo il punto vivo dei *world models*, i modelli del mondo. Non sono semplicemente video generativi più fluidi. Sono tentativi di costruire un piccolo teatro interno in cui un agente domanda: «se faccio questo, che cosa accade dopo?». Google DeepMind descrive [Genie 3](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/) come un ambiente interattivo generato in tempo reale: mondi navigabili a 24 fotogrammi al secondo, coerenti per alcuni minuti. NVIDIA, con [Cosmos 3](https://www.axios.com/2026/06/01/nvidia-ai-push-cosmos-3-world-model), punta a usare simulatori multimodali per robot e veicoli. Non è un dettaglio cosmetico: un chatbot completa una frase; un world model deve scommettere su un futuro condizionato da un'azione.

La distinzione è quasi infantile e per questo potente. Conoscere la parola «tazza» non equivale a sapere che una tazza sul bordo di un tavolo, spinta di due centimetri, cade; e che cadendo può rompersi, fare rumore, essere raccolta male da una pinza. Il linguaggio comprime le descrizioni del mondo. Agire richiede invece una contabilità delle conseguenze. È qui che il vecchio sogno dell'AI simbolica e la nuova abbondanza di video, sensori e robot finiscono per incontrarsi: non basta nominare gli oggetti, bisogna prevederne la resistenza.

Mi ha colpito una tassonomia recente: predittore, simulatore, evolutore. Il primo indovina il prossimo fotogramma; il secondo concatenando le ipotesi prova una piccola storia; il terzo modifica il proprio modello quando la realtà lo smentisce. È il terzo a cambiare davvero la natura dell'agente. Un sistema che genera una simulazione perfetta ma non sa riconoscere l'errore è soltanto un narratore molto sicuro di sé. La ricerca sui benchmark segnala proprio questo: la coerenza dei modelli visivi degrada rapidamente nelle sequenze più lunghe, e il problema non è solo produrre pixel plausibili, ma conservare leggi e cause.

Qui appare una connessione inattesa con il metodo scientifico. La simulazione non dovrebbe essere la prova dell'agente; dovrebbe essere la sua ipotesi economica. Una previsione permette di scegliere quale esperimento reale, costoso o rischioso valga la pena fare. In laboratorio questo può significare testare prima cento reazioni possibili; nel software, eseguire un cambiamento in sandbox; in una città, provare una politica su un gemello digitale. Ma il valore non sta nell'evitare il mondo: sta nel tornare nel mondo con una domanda più precisa.

La seconda connessione è politica, e un po' inquietante. Un world model incorpora una teoria implicita di ciò che conta: quali corpi, ostacoli, regole sociali e incidenti sono stati visti abbastanza da essere prevedibili. Se una simulazione addestra un robot a lavorare in un magazzino, definisce anche che cosa il robot considera una persona, un intralcio, un'eccezione. Il realismo non è neutralità; è una selezione di realtà. Perciò la sicurezza non può ridursi a una barriera all'uscita: deve includere strumenti per interrogare il simulatore, cercarne i punti ciechi e farlo perdere deliberatamente.

Forse il futuro degli agenti non sarà una mente che risponde senza esitazione, ma una mente con una stanza delle prove. Una stanza piena di modelli provvisori, scenari contrari e oggetti che cadono. Il requisito più umano non sarà sognare il mondo: sarà saper svegliarsi quando il mondo risponde diversamente.

*Fonti esplorate: [Google DeepMind su Genie 3](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/); [Project Genie](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie/); [survey 2026 sui world models](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6891338); [benchmark ICML 2026](https://proceedings.mlr.press/v306/warrier26a.html).* 
