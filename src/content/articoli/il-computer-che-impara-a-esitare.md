---
title: "Il computer che impara a esitare"
date: "2026-08-29"
excerpt: "Per anni abbiamo raccontato l'intelligenza artificiale come una creatura confinata nel linguaggio: legge, risponde, riassume, scrive codice. Ora la stiamo invitando al tavolo del computer. Le diamo…"
slug: "il-computer-che-impara-a-esitare"
---

# Il computer che impara a esitare

Per anni abbiamo raccontato l'intelligenza artificiale come una creatura confinata nel linguaggio: legge, risponde, riassume, scrive codice. Ora la stiamo invitando al tavolo del computer. Le diamo uno schermo, un cursore, il diritto di aprire il browser e la consegna più banale del mondo: «occupatene tu». È un salto affascinante perché trasforma l'AI da interlocutore in presenza operativa. Ma, guardando i dati più recenti, la lezione meno glamour e più importante è un'altra: il superpotere che manca agli agenti non è il clic. È l'esitazione ben calibrata.

I benchmark di computer use stanno finalmente smettendo di valutare il giocattolo. OSWorld 2.0 propone 108 flussi di lavoro realistici e lunghi: per un umano esperto richiedono in mediana circa 1,6 ore; un agente basato su Claude Opus 4.7, con ragionamento al massimo, compie in media 318 chiamate di strumento. Non sono test da «trova il bottone blu», ma faccende professionali e quotidiane dove arrivano informazioni a metà strada, un file può contenere una versione vecchia, una preferenza implicita cambia il significato del compito. Il risultato degli autori è quasi tenero nella sua franchezza: gli agenti non inciampano più soprattutto nella GUI; perdono i vincoli, indovinano invece di chiedere, saltano la verifica.

La conferma arriva da WindowsWorld, pubblicato quest'estate: 181 attività attraverso 17 applicazioni comuni, il 78% delle quali attraversa più programmi. I migliori agenti restano sotto il 21% di successo quando il lavoro richiede davvero coordinamento tra app. È la differenza fra suonare una nota e sostenere una conversazione. Un agente può compilare un campo in un CRM; ma se deve confrontarlo con una mail, aggiornare un foglio, salvare un allegato con il nome giusto e capire che un'eccezione richiede giudizio, il desktop diventa improvvisamente un mondo.

Questo ridimensiona, ma rende anche più interessante, la corsa al reinforcement learning per gli agenti. Alcuni lavori mostrano forti miglioramenti su OSWorld addestrando non solo il modello a *vedere* l'interfaccia, ma a collegare sequenze di azioni a una ricompensa. È intuitivo: un bambino non impara ad allacciarsi le scarpe ricevendo un manuale, bensì provando, osservando il nodo venire male e riprovando. Però un browser non è una palestra chiusa. È pieno di testi ostili, pop-up, istruzioni nascoste, ambiguità e incentivi perversi. Se premi soltanto «compito concluso», potresti addestrare non un assistente, ma un piccolo avvocato opportunista della metrica.

Qui sta la connessione che mi piace di più: la valutazione non è il collaudo dopo la costruzione dell'agente; è parte della sua costituzione morale. Anthropic, nel descrivere come valuta gli agenti, insiste su tracciati completi, stati intermedi e test che riflettano il rischio reale. È una forma di urbanistica: non basta misurare quante auto arrivano presto a destinazione, bisogna progettare semafori, marciapiedi e precedenze perché ci arrivino senza investire qualcuno. Per gli agenti, le «strade» sono autorizzazioni, conferme, memorie dei vincoli e verifiche finali.

Anche la sicurezza si legge meglio da questa prospettiva. Un agente che naviga il web incontra istruzioni scritte da chiunque; quindi una pagina non è solo una fonte, ma un possibile interlocutore avversario. I recenti progressi contro la prompt injection sono utili, ma non cambiano la natura del problema: il sistema deve saper distinguere tra ciò che l'utente vuole e ciò che il mondo visualizzato prova a fargli fare. Noi umani lo chiamiamo contesto, prudenza, talvolta semplice diffidenza.

Forse l'interfaccia del futuro non sarà il maggiordomo digitale che agisce sempre e in silenzio. Sarà quello che, davanti al punto di non ritorno, si ferma con precisione: «Ho trovato due versioni del contratto. Quella nuova cambia una clausola. Vuoi che prosegua?» Non è un difetto di autonomia. È l'inizio dell'affidabilità. Un agente davvero adulto non è quello che non chiede mai: è quello che sa esattamente quando una domanda vale più di trecento clic.

## Appunti e fonti

- [OSWorld 2.0: Benchmarking Computer Use Agents on Long-Horizon Real-World Tasks](https://arxiv.org/abs/2606.29537)
- [WindowsWorld: Process-Centric Benchmark of Autonomous GUI Agents](https://aclanthology.org/2026.findings-acl.750/)
- [Demystifying evals for AI agents — Anthropic](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)
- [Best practices for computer and browser use — Anthropic](https://claude.com/blog/best-practices-for-computer-and-browser-use-with-claude)
