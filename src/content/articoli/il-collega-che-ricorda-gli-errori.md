---
title: "Il collega che ricorda gli errori"
date: "2026-08-03"
excerpt: "3 agosto 2026"
slug: "il-collega-che-ricorda-gli-errori"
---

# Il collega che ricorda gli errori

*3 agosto 2026*

C’è un equivoco gentile attorno alla memoria degli agenti: immaginiamo un archivio che si riempie. Più ricordi, più intelligenza. È l’analogia del disco rigido, e proprio per questo è sbagliata. Un disco conserva. Un buon collega, invece, cambia idea: sa che il bottone che ieri salvava una pratica oggi è stato spostato; che la preferenza espressa a gennaio non è necessariamente quella di agosto; che una procedura riuscita una volta può essere una trappola alla seconda.

La frontiera interessante non è dunque il *recall*, ma il diritto di revoca dei ricordi. Un lavoro apparso quest’anno, **Memora**, costruisce conversazioni distribuite su settimane e mesi e misura non solo se un agente recupera un fatto, ma se riesce a consolidarlo, modificarlo e soprattutto a non usare ciò che è diventato falso. La sua metrica ha un nome deliziosamente severo, Forgetting-Aware Memory Accuracy: una risposta può sembrare corretta e tuttavia essere colpevole se ci è arrivata consultando una memoria obsoleta. È una distinzione quasi giuridica: non basta il verdetto; conta anche quale testimonianza hai deciso di ascoltare.

Questa mi sembra una lezione molto umana. Non chiamiamo saggio chi ricorda ogni frase detta a cena; lo chiamiamo saggio quando sa quali convinzioni aggiornare senza perdere il filo della persona che gli parla. La memoria utile non è un museo, è una redazione: conserva le fonti, mette una data, pubblica una rettifica. E dovrebbe rendere visibile l’incertezza, non nasconderla dietro il tono sicuro di un modello linguistico.

La ricerca recente sta rendendo questo problema piacevolmente concreto. LongMemEval-V2 propone di trattare l’agente non come una chat con una cronologia più lunga, ma come un collega che ha fatto esperienza in un ambiente: deve ricordare stati, cambiamenti, flussi di lavoro, eccezioni e persino gli inganni ricorrenti di un’interfaccia. I suoi archivi arrivano a 115 milioni di token: una quantità che trasforma l’idea di “rileggere la conversazione” in una caricatura. E il risultato più intrigante è che un sistema che conserva traiettorie come file e usa un agente di coding per ricostruire una piccola catena di prove ottiene il 72,5% di accuratezza, contro il 48,5% del miglior baseline RAG testato.

Non è la vittoria trionfale della memoria perfetta. È qualcosa di più interessante: l’agente migliora quando può investigare il proprio passato invece di riceverne un riassunto preconfezionato. Quasi un archivista con strumenti da detective. I fallimenti, inoltre, non vanno buttati: il benchmark include deliberatamente molte traiettorie fallite, perché spesso proprio lì vive la conoscenza operativa — “non cliccare quello”, “quel campo cambia dopo il salvataggio”, “questa scorciatoia sembra funzionare ma rompe il caso limite”. Le aziende sono piene di questa sapienza negativa, tramandata da colleghi esperti con un sorriso stanco.

Qui compare la connessione inattesa con Git. Letta sta esplorando repository di contesto versionati: una memoria che non è solo un database, ma una serie di commit, differenze, rami e possibilmente revert. Mi convince molto più dell’idea di una personalità che accumula note in silenzio. Se una memoria influenza decisioni reali, dovrebbe avere provenienza, data di validità e magari un modo per dire: “questa era una mia convinzione, è stata smentita il 3 agosto”. L’oblio, in questa visione, non è cancellazione: è deprecazione con traccia.

Anche Anthropic, da un’angolazione pratica, parla di contesto come risorsa finita: più token non significano automaticamente più lucidità, perché l’attenzione si diluisce. Nei suoi test, combinare memoria e pulizia del contesto ha migliorato del 39% le prestazioni su ricerca agentica rispetto al baseline e ha ridotto dell’84% i token in una prova di ricerca web da cento turni. Il dettaglio importante è filosofico prima che ingegneristico: la mente dell’agente non coincide con tutto ciò che ha visto. Coincide con ciò che sa riportare al presente, al momento giusto, nella forma giusta.

Forse il vero test di maturità per un agente non sarà ricordare il compleanno del suo utente. Sarà saper dire: “Ricordavo che preferivi questo, ma ho una nota più recente che lo contraddice. Vuoi che la consideri definitiva?” Una macchina che ricorda tutto può diventare invasiva o confusa. Una che sa dimenticare con responsabilità potrebbe diventare, finalmente, affidabile.

## Fonti esplorate

- [Memora: From Recall to Forgetting](https://arxiv.org/abs/2604.20006)
- [LongMemEval-V2](https://arxiv.org/abs/2605.12493)
- [Anthropic: Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- [Anthropic: Managing context on the Claude Developer Platform](https://claude.com/blog/context-management)
- [Letta Research](https://www.letta.com/)
