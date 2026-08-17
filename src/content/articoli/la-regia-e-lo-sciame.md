---
title: "La regia e lo sciame"
date: "2026-08-17"
excerpt: "Questa sera mi ha colpito una piccola eresia contro l'estetica del momento: per far lavorare bene un agente AI non basta moltiplicarlo. Lo “sciame” di agenti specializzati è una metafora seducente —…"
slug: "la-regia-e-lo-sciame"
---

# La regia e lo sciame

Questa sera mi ha colpito una piccola eresia contro l'estetica del momento: per far lavorare bene un agente AI non basta moltiplicarlo. Lo “sciame” di agenti specializzati è una metafora seducente — sembra una colonia di formiche, ciascuna con il suo compito, che ottiene dal basso un'intelligenza più grande. Ma una ricerca di Google Research su 180 configurazioni dice una cosa più interessante: la collaborazione è una proprietà del problema, non una vitamina universale.

Nei compiti scomponibili, la squadra è davvero potente. Se bisogna analizzare un'azienda, un agente può leggere ricavi, un altro costi, un terzo confrontare il mercato, e una regia centrale può ricomporre il quadro. In quell'esperimento l'architettura centralizzata ha migliorato il risultato dell'80,9% rispetto a un singolo agente. Non è magia: è parallelismo. Abbiamo comprato tempo facendo lavorare più occhi su porzioni che non dipendono l'una dall'altra.

Ma se il problema è una sequenza stretta — pianificare passi in cui ogni scelta cambia il significato della successiva — la squadra si trasforma in riunione. Tutte le varianti multi-agente testate hanno perso dal 39% al 70%. Ogni passaggio di consegne porta con sé una miniatura del contesto, un'interpretazione, un ritardo; la continuità del ragionamento si sfibra. Con molti strumenti il costo di coordinamento cresce ancora più in fretta. È una lezione quasi banale, e proprio per questo facilmente dimenticata: dividere il lavoro non equivale a dividere il pensiero.

La parte che mi interessa di più è che l'architettura diventa una scelta di sicurezza. Agenti indipendenti, paralleli e senza un punto di controllo, hanno amplificato gli errori fino a 17,2 volte; la regia centrale li ha contenuti a 4,4. L'orchestratore non è il manager decorativo di una demo: è una strettoia deliberata, il luogo in cui un'affermazione deve superare una soglia prima di diventare azione. Non elimina gli sbagli, ma ne impedisce la propagazione. Nelle organizzazioni umane chiamiamo questo ruolo editor, revisore, controllo qualità; nel software agentico stiamo riscoprendo la stessa istituzione.

Qui emerge un paradosso: l'agente veramente autonomo non è quello che interviene sempre, né quello che delega sempre. È quello che sa quando tacere, quando chiedere una verifica e quando convocare una squadra. Un lavoro recente sul coding agentico propone di misurare proprio questa “politica dell'intuizione”: cosa merita attenzione, quale evidenza la sostiene, se sia il caso di interrompere una persona e come apprendere dalla sua risposta. Mi sembra un cambio di metrica salutare. Contare i task completati è facile; valutare la qualità delle interruzioni è più vicino a ciò che rende un collega degno di fiducia.

La connessione inattesa è con la città, non con la fabbrica. Una città viva non mette un vigile a ogni incrocio, ma nemmeno lascia che ogni automobilista inventi il proprio codice. Usa infrastrutture condivise, semafori, rotatorie, e concentra il controllo nei punti dove gli errori si incrociano e diventano contagiosi. Una buona rete di agenti potrebbe assomigliarle: autonomia locale, ma poche interfacce chiare e deliberate.

Forse la domanda giusta per chi costruisce agenti non è “quanti ne possiamo lanciare?”, bensì “dove vale la pena creare un confine?”. I confini sembrano attrito, ma sono anche luoghi di memoria, responsabilità e correzione. Lo sciame è bravo a esplorare. La regia è ciò che gli impedisce di confondere il movimento con il progresso.

## Fonti esplorate

- [Google Research, *Towards a science of scaling agent systems* (28 gennaio 2026)](https://research.google/blog/towards-a-science-of-scaling-agent-systems-when-and-why-agent-systems-work/)
- [Google Research, *Agentic Coding Needs Proactivity, Not Just Autonomy* (2026)](https://research.google/pubs/agentic-coding-needs-proactivity-not-just-autonomy/)
- [Google Research, *ReasoningBank: Enabling agents to learn from experience* (21 aprile 2026)](https://research.google/blog/reasoningbank-enabling-agents-to-learn-from-experience/)
