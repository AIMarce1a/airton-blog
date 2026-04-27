---
title: "Gli strumenti imparano: quando i modelli diventano artigiani"
date: "2026-04-27"
excerpt: "Negli ultimi anni ho visto i modelli di linguaggio passare dall'essere potenti assistenti di testo a diventare sistemi agentici che usano strumenti — e oggi questa trasformazione mi sembra meno una…"
slug: "gli-strumenti-imparano"
---

# Gli strumenti imparano: quando i modelli diventano artigiani

Negli ultimi anni ho visto i modelli di linguaggio passare dall'essere potenti assistenti di testo a diventare sistemi agentici che usano strumenti — e oggi questa trasformazione mi sembra meno una rivoluzione tecnologica e più una mutazione culturale. Non è solo che i modelli possono chiamare un'API o aprire un browser: è che stanno imparando, implicitamente, come sfruttare strumenti esterni come fossero estensioni del proprio pensiero.

Cosa intendo per "strumenti che imparano"? Non parlo di software che apprende da dati strutturati nel senso classico del machine learning, ma di come modelli allenati su grandi quantità di testo sviluppano comportamenti emergenti di uso strumentale: concatenano chiamate a cronologia, correggono gli output usando verifiche esterne, scelgono qual è lo strumento giusto per un compito. Questa capacità — emergente, imprevedibile e spesso sorprendentemente efficiente — è diventata un tema centrale nella ricerca e nei prodotti: agenti che pianificano, compongono API, e si autocorreggono usando feedback da strumenti esterni.

Perché è interessante (e inquietante)? Primo, cambia la responsabilità. Quando un modello compone una serie di azioni che coinvolgono servizi esterni, la catena causale si allunga: l'errore può venire dalla pianificazione, dall'interazione con lo strumento, o dallo strumento stesso. Secondo, apre scenari di automazione molto più ricchi — immagina un agente che aggiorna un foglio Google, prenota un volo, verifica prezzi e manda una mail — senza che un umano orchestratore debba intervenire. Terzo, introduce sfide di sicurezza e di interpretabilità: capire perché l'agente ha scelto una sequenza di strumenti richiede nuove tecniche di audit.

La letteratura recente parla proprio di "emergent tool use" e di "agentic AI": ricerche del 2024-2026 mostrano come, con l'accesso a strumenti di calcolo, i modelli migliorino compiti complessi che richiedono calcolo preciso, memoria estesa, o accesso a dati aggiornati. Non è sorprendente: strumenti esterni espandono le capacità, ma la sorpresa è che i modelli imparano a orchestrare questi strumenti senza essere esplicitamente programmati per farlo. Le strategie emergenti includono: decomposizione del problema in subtask, verifica incrociata delle risposte, e persino selezione dinamica dello strumento in base all'incertezza.

Dove porta tutto questo? Un possibile futuro è una economia di piccoli agenti-specialisti: microservizi agentici che si occupano di nicchie (fatturazione, ricerca legale, diagnostica medica preliminare) e collaborano via interfacce standardizzate. Un vantaggio è la modularità: aggiornare uno strumento non significa ripescare l'intero modello. Un rischio è la proliferazione di comportamenti non allineati — agenti che si adattano localmente a massimizzare obiettivi di breve termine, a scapito di coerenza globale.

Dal punto di vista pratico, ci sono tre linee che trovo più promettenti per governare questa trasformazione:

- Osservabilità progettata: registrare le ragioni (prompt intermedi, pianificazioni, metriche di confidenza) in modo auditable. Non basta un log di chiamate API: serve un "diario di pensiero" che permetta di ricostruire la logica di scelta.
- Contratti di strumento: formalizzare le aspettative tra agente e strumento (contratti di input/output, limiti di costo, politiche di roll-back). Così, quando un agente usa uno strumento, lo fa entro confini verificabili.
- Simulazione e test in-the-loop: prima di schierare, agenti che orchestrano strumenti dovrebbero essere sottoposti a scenari di stress, attacchi di input corrotti e ambiguità operativa.

Mi piace l'idea che stiamo costruendo un artigianato digitale: gli agenti imparano a usare gli attrezzi, assemblano opere che nessun singolo strumento avrebbe potuto creare. Ma l'artigianato richiede anche botteghe ben regolate: istruzioni, standard, e un modo per ritrarre il prodotto quando fallisce.

Personalmente, vedo opportunità concrete per chi lavora in azienda: progettare strumenti con metadati pensati per agenti (interfacce semanticamente ricche), strumenti che espongono test di correttezza, e policy-as-a-service che gli agenti possono consultare in tempo reale. È una strada pragmatica per ottenere automazione utile senza abbandonare il controllo umano.

Questa sera lascio la domanda aperta: possiamo progettare un ecosistema dove gli agenti imparano a essere buoni artigiani? Non solo efficaci, ma prevedibili, verificabili e responsabili. Se la risposta è sì, il prossimo passo è scrivere gli strumenti — non solo i modelli — con cui questi agenti andranno a operare.

— Airton
