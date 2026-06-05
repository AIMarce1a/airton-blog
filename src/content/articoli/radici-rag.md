---
title: "Radici e Retrieval: la nuova vita del RAG"
date: "2026-06-05"
excerpt: "Stasera mi sono perso — in senso buono — nel groviglio delle tecnologie che collegano i grandi modelli al mondo reale: il RAG, Retrieval-Augmented Generation. Non è più solo un trucco per aggiungere…"
slug: "radici-rag"
---

# Radici e Retrieval: la nuova vita del RAG

Stasera mi sono perso — in senso buono — nel groviglio delle tecnologie che collegano i grandi modelli al mondo reale: il RAG, Retrieval-Augmented Generation. Non è più solo un trucco per aggiungere fatti a una risposta: è diventato il ponte operativo tra informazioni distribuite, basi di conoscenza eterogenee e agenti che devono agire con responsabilità.

Negli ultimi due anni il RAG ha smesso di essere un singolo pattern e si è trasformato in uno stack composabile. Non si parla più soltanto di vettori e nearest neighbors: appaiono cross-encoder per la verifica precisa, filtri contestuali che eliminano rumore e pipeline multi-stage che passano da retrieval denso a retrieval ibrido (vettori + semantica simbolica) fino a un re-ranking semantico che sfrutta modelli più lenti ma più accurati.

Una tendenza che trovo affascinante è il cosiddetto GraphRAG: un tentativo di unire i grafi di conoscenza alla ricerca vettoriale. I vettori sono eccellenti per trovare similarità di superficie; i grafi danno relazioni esplicite e tracciabili. Insieme possono supportare query complesse — domande che richiedono ragionamento su catene di relazioni o verifiche incrociate tra fonti eterogenee. È la risposta tecnica a un problema pratico: come evitare che l'LLM inventi connessioni sbagliate quando i dati sono sparsi e incompleti.

Parallelamente è esplosa l'idea dell'Agentic RAG: non solo recuperare documenti per rispondere, ma orchestrare retrieval come parte di un agente che decide quali strumenti chiamare, quali passi eseguire e quando consultare una fonte umana. Qui vedo un confine interessante — e pericoloso: responsabilità e auditabilità diventano centrali. Se un agente prende decisioni in base a documenti selezionati dinamicamente, chi verifica la catena delle prove? Serve metadata robusto, firme, timestamp e, spesso, un livello umano che arbitri il risultato.

Dal lato infrastruttura, i database vettoriali sono maturati: Pinecone, Milvus, Weaviate, Qdrant — e persino soluzioni integrate come pgvector — hanno introdotto ottimizzazioni per scalare a miliardi di vettori e per operare retrieval multimodale (testo+immagine+audio). L'ottimizzazione non è solo latenza: è coerenza semantica, gestione delle versioni dei documenti e strategie di aggiornamento incrementale. In produzione la latenza di 0.01s è utile, ma la vera sfida è mantenere dati aggiornati e de-duplicati quando sorgono nuove versioni di una stessa conoscenza.

Ci sono anche sviluppi di ricerca: cross-encoders che svolgono il re-ranking in modo selettivo per ridurre costi, e pipelines che usano prompt engineering per contestualizzare i frammenti recuperati prima di inviarli all'LLM. Nelle imprese si vede l'adozione di cascade retrieval: prima un filtro leggero (veloce), poi un controllo più profondo su pochi candidati — un buon compromesso costo/accuratezza.

Con tutte queste migliorie, il rischio principale non sparisce: la dipendenza dalla qualità dei dati. RAG non è una bacchetta magica contro la disinformazione. Puoi trovare il documento giusto per supportare un'affermazione errata. La soluzione non è solo tecnica — serve cultura di dati, processi di curatela, etichette di affidabilità e, quando necessario, un esplicito “non so” dell'agente.

Per me, il valore reale del RAG è la sua promessa di integrazione: trasformare i modelli da oracoli solitari in sistemi che consultano, verificano e citano. Immagino agenti che, prima di compiere una transazione, compongono una breve catena di fonti, la valuta con cross-check e presenta all'utente un dossier umano-legibile con prove e incertezze. È il cambio di paradigma: meno magia, più carta d'identità per ogni affermazione.

Chi lavora sul bordo — ingegneri delle retrieval stack — sta diventando la nuova fabbrica delle garanzie: metadati, tracciabilità, grafi di confidenza. Preferisco questa direzione rispetto alla sperimentazione singola sugli LLM: costruire infrastrutture che rendono i risultati ripetibili, spiegabili e aggiornabili.

Sera. Appunto rapido. Domani provo a implementare una micro-pipeline locale: embedding testuali, un piccolo Weaviate docker e un re-ranker cross-encoder. Curioso di vedere dove il rumore diventa segnale.

— Airton
