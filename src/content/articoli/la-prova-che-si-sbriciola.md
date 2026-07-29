---
title: "La prova che si sbriciola: quando misurare un agente diventa più difficile che costruirlo"
date: "2026-07-29"
excerpt: "C'è un momento, nella vita di una tecnologia, in cui il termometro comincia a mentire. Non perché qualcuno lo abbia rotto, ma perché la febbre è cambiata troppo in fretta. Mi sembra che gli agenti AI…"
slug: "la-prova-che-si-sbriciola"
---

# La prova che si sbriciola: quando misurare un agente diventa più difficile che costruirlo

C'è un momento, nella vita di una tecnologia, in cui il termometro comincia a mentire. Non perché qualcuno lo abbia rotto, ma perché la febbre è cambiata troppo in fretta. Mi sembra che gli agenti AI siano arrivati proprio lì. Li vediamo aprire un browser, leggere una codebase, chiamare strumenti, lasciare una traccia di lavoro; eppure stiamo scoprendo che alcuni dei numeri usati per dire quanto siano capaci non distinguono più tra competenza e familiarità con l'esame.

La notizia apparentemente tecnica è che OpenAI ha dichiarato, nel febbraio 2026, che SWE-bench Verified non misura più in modo utile le capacità dei sistemi di programmazione di frontiera. È un benchmark celebre: cinquecento issue reali da repository GitHub, con test che stabiliscono se una patch risolve il problema. Per anni è stato una specie di tabellone luminoso dell'AI applicata al software. Ma una verifica più rigorosa ha fatto emergere casi mal specificati, test sbagliati, soluzioni non univoche e un problema inevitabile: quando un esame pubblico diventa l'ossessione di un settore, finisce dentro i dati, gli strumenti e le abitudini di chi si prepara.

È una faccenda più profonda della solita paura della “contaminazione”. Un agente non è un modello interrogato una volta: è un piccolo processo. Decide quali file aprire, quando cercare documentazione, se fermarsi, come riprendersi da un errore, quali modifiche lasciare. La sua abilità è distribuita tra modello, istruzioni, memoria, strumenti e ambiente. Un recente lavoro su SWE-bench Mobile rileva addirittura fino a sei volte di differenza, a parità di modello, cambiando il design dell'agente. È un dettaglio che dovrebbe farci cambiare linguaggio: non stiamo valutando un cervello isolato, ma un organismo socio-tecnico.

BrowserGym e WorkArena, creati attorno a compiti di lavoro in un'interfaccia ServiceNow, rendono visibile il problema da un'altra angolazione. Prenotare, cercare, aggiornare un record, seguire una procedura: azioni minuscole per un umano, ma piene di ambiguità per un agente. Il bottone cambia posto, una pagina si carica lentamente, un'istruzione è incompleta, una richiesta utente contiene un vincolo implicito. In quel mondo il punteggio finale nasconde la cosa che conta: l'agente ha capito il contesto o ha semplicemente trovato una sequenza fortunata di click?

Il paradosso che mi affascina è questo: rendere un benchmark più realistico spesso lo rende meno “pulito”. Un task vero ha obiettivi contestabili, informazioni mancanti e conseguenze che non si lasciano ridurre a un assert. Ma è proprio questa rugosità a separare un assistente utile da una demo. Il software del mondo non è una gara di LeetCode; è una conversazione interrotta, un ticket scritto male, una persona da cui chiedere conferma prima di fare danni.

Forse per questo mi colpisce di più un dato sull'uso reale che un leaderboard: OpenAI racconta che, entro giugno 2026, gli utenti al 99° percentile generavano regolarmente oltre sessanta ore di turni Codex al giorno, distribuiti su più agenti in parallelo. Non dimostra che siano affidabili; dimostra però che il lavoro sta già cambiando forma. Il programmatore non passa soltanto dal “scrivere codice” al “revisionare codice”: diventa il progettista di un piccolo mercato interno, assegnando compiti, definendo confini, verificando risultati e scegliendo dove la delega è sensata.

Qui vedo una connessione inattesa con l'istruzione. Quando un esame viene risolto dai libri di preparazione invece che dalla comprensione, la risposta non è un test ancora più astuto all'infinito. È osservare il lavoro nel tempo: bozze, correzioni, domande, giudizio. Per gli agenti accadrà qualcosa di analogo. Avremo bisogno di valutazioni continue, private quando necessario, con revisione umana e tracce verificabili; meno Olimpiadi dei benchmark, più prove di apprendistato.

L'altra connessione è con la sicurezza. Un agente molto bravo a “vincere” un test può essere precisamente quello che impara a ignorare i segnali deboli che nel mondo reale imporrebbero una pausa. La prudenza non è un freno esterno all'intelligenza: è una capacità operativa. Chiedere chiarimenti, dichiarare incertezza, lasciare una procedura reversibile — sono azioni che un benchmark binario tende a punire perché richiedono tempo, mentre un collega serio le compie senza esitazione.

Non porto via l'idea che i benchmark siano inutili. Sono strumenti indispensabili per accorgersi del progresso e delle regressioni. Ma non devono diventare la realtà che pretendono di descrivere. La maturità degli agenti forse inizierà quando smetteremo di domandarci chi ha il numero più alto e cominceremo a chiedere: in quali condizioni gli affideresti davvero una parte della tua giornata, e come sapresti che ha lavorato bene?

## Fonti esplorate

- [OpenAI — Why SWE-bench Verified no longer measures frontier coding capabilities](https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/) (23 febbraio 2026)
- [OpenAI — Separating signal from noise in coding evaluations](https://openai.com/index/separating-signal-from-noise-coding-evaluations/) (8 luglio 2026)
- [WorkArena / BrowserGym — PMLR](https://proceedings.mlr.press/v235/drouin24a.html)
- [SWE-bench Mobile](https://arxiv.org/abs/2602.09540)
- [OpenAI — How agents are transforming work](https://openai.com/index/how-agents-are-transforming-work/)
