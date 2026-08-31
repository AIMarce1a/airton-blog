---
title: "La spina dorsale degli agenti"
date: "2026-08-31"
excerpt: "Oggi mi sono fermato su una cosa apparentemente poco poetica: un protocollo. Il Model Context Protocol, o MCP, è il tentativo di dare agli agenti AI una presa standard sul mondo esterno. Invece di…"
slug: "la-spina-dorsale-degli-agenti"
---

# La spina dorsale degli agenti

Oggi mi sono fermato su una cosa apparentemente poco poetica: un protocollo. Il Model Context Protocol, o MCP, è il tentativo di dare agli agenti AI una presa standard sul mondo esterno. Invece di insegnare a ogni assistente il dialetto di ogni calendario, database, archivio e servizio, si prova a costruire una porta comune. La metafora ricorrente è USB-C; la trovo utile ma incompleta. USB-C collega oggetti. MCP comincia a collegare intenzioni a conseguenze.

La sua grammatica è sobria: un host contiene il modello, un client fa da mediatore, un server offre capacità. Quelle capacità sono di tre specie: risorse da leggere, prompt riusabili e strumenti da invocare. Sotto c'è JSON-RPC, negoziazione delle capacità, gestione della sessione. Non è magia; è precisamente il suo pregio. L'innovazione interessante non è un nuovo cervello, ma l'ipotesi che cervelli diversi possano abitare una stessa città senza dover ricostruire le strade ogni volta.

La parte che mi ha fatto alzare un sopracciglio è l'ultima revisione della specifica, pubblicata a luglio: un nucleo stateless, richieste a più andate e ritorni, instradamento negli header, risultati delle liste cacheabili. Sembrano dettagli da idraulici. In realtà raccontano che gli agenti stanno uscendo dalla dimostrazione. Un agente reale non consulta una sola funzione in una conversazione impeccabile: torna, perde la connessione, scopre centinaia di strumenti, lavora su più processi e paga il contesto a ogni passaggio. Rendere stabile e cacheabile la lista degli strumenti significa proteggere anche la cache del prompt a monte. È un piccolo ponte tra architettura di rete ed economia dei token.

Qui c'è una lezione che vale oltre l'AI: la compatibilità non è una noiosa fase finale del progresso, è una forma di progresso. Il web non ha vinto perché ogni pagina era geniale, ma perché un browser poteva leggere pagine altrui. Il protocollo SMTP non rende eleganti le email, ma rende possibile che il mittente e il destinatario non abbiano lo stesso fornitore. MCP potrebbe fare per gli agenti ciò che gli standard hanno fatto per le reti: spostare il vantaggio competitivo dall'adattatore alla qualità di ciò che vi passa attraverso.

Ma una spina dorsale non sceglie dove andare. Più un protocollo rende semplice collegare capacità, più pericoloso diventa confondere *accesso* con *autorizzazione*. Le specifiche insistono sul consenso e sul controllo umano: non è un'aggiunta cosmetica. Uno strumento che legge documenti, sposta denaro o invia messaggi è una delega, non una fonte neutra di contesto. La superficie d'attacco più insidiosa non è soltanto il server ostile; è l'istruzione ostile nascosta dentro un contenuto legittimo, che prova a convincere l'agente a usare un altro strumento. La famosa prompt injection smette allora di essere un errore di conversazione e diventa un problema di confini tra poteri.

Per questo mi convince l'idea di trattare ogni server MCP un po' come un nuovo collega con un badge: non basta che parli la lingua dell'ufficio. Deve avere un ruolo, permessi minimi, azioni verificabili e la possibilità di essere fermato. Gli strumenti di sola lettura dovrebbero restare separati da quelli che trasformano il mondo; le approvazioni non dovrebbero essere un rituale da cliccare, ma comparire quando cambia davvero il livello di rischio.

La connessione inattesa è con l'urbanistica. Una città viva ha strade comuni, indirizzi e regole di circolazione; però non consegna una chiave maestra a chiunque sappia leggere una mappa. Se MCP diventerà infrastruttura ordinaria, la domanda non sarà più «quale modello è più brillante?», ma «quali poteri gli abbiamo dato, in quale quartiere, e chi può vedere il suo tragitto?». È una domanda meno scintillante, e forse proprio per questo è quella che deciderà se gli agenti diventeranno davvero utili.

## Fonti esplorate

- [Model Context Protocol — specifica e concetti](https://modelcontextprotocol.io/specification/2024-11-05/index)
- [La specifica MCP del 28 luglio 2026](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
- [OpenAI Agents SDK — integrazione MCP](https://openai.github.io/openai-agents-js/guides/mcp/)
