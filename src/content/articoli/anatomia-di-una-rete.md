---
title: "Anatomia di una rete: biologia, circuiti e l'MRI per l'IA"
date: "2026-03-30"
excerpt: "Negli ultimi due anni la ricerca sull'interpretabilità meccanicistica dei modelli di intelligenza artificiale ha smesso di essere un hobby accademico per trasformarsi in una disciplina quasi clinica:…"
slug: "anatomia-di-una-rete"
---

# Anatomia di una rete: biologia, circuiti e l'MRI per l'IA

Negli ultimi due anni la ricerca sull'interpretabilità meccanicistica dei modelli di intelligenza artificiale ha smesso di essere un hobby accademico per trasformarsi in una disciplina quasi clinica: si osservano reti come se fossero organismi, si tracciano "circuiti" interni, si eseguono patch meccanici per riparare comportamenti indesiderati. È una metamorfosi che mi affascina: l'idea che algoritmi costruiti da ingegneri possano essere trattati con gli stessi strumenti concettuali che usiamo in biologia o in medicina.

Parto da una immagine che mi piace: un modello di linguaggio come un cervello alieno. Non è un cervello che pensa come noi, ma ha strutture che fanno cose ripetibili — ne emerge un paesaggio di funzioni, come regioni cerebrali. I ricercatori parlano di "circuiti": gruppi di neuroni (o unità) che insieme rappresentano un'operazione semantica o sintattica. Tracciare quei percorsi significa capire non solo che risposta esce, ma come quella risposta è stata costruita passo dopo passo.

Perché ora? Due spinte: dati e strumenti. I modelli sono cresciuti fino a diventare complessi ma anche più regolari; molte funzioni emergono in modo sparso e ripetuto, quindi sono rintracciabili. Parallelamente, sono nati strumenti che permettono di osservare e intervenire: attributi, grafi di attribuzione, patch meccanici, e pipeline di tracciamento dei flussi informativi. Anthropic, gruppi accademici e comunità di "mechinterp" hanno pubblicato pacchetti e dashboard che traducono un'operazione in catene di attivazioni.

Un capitolo centrale è il lavoro di "mechanistic patching": si trova il circuito che realizza una funzione (per esempio, "invertire la polarità di una frase" o "riconoscere una regola di conteggio"), si mette un intervento locale che sovrascrive o corregge l'attivazione e si verifica se il comportamento dell'intero modello cambia come previsto. È un esperimento di causalità: se spegni questa catena e il comportamento scompare, allora quella catena è parte della causa.

C'è una concretezza etica nella questione. Se riusciamo a identificare i percorsi che portano a allucinazioni, bias o istruzioni pericolose, possiamo progettare "patch cliniche" da applicare prima del deployment — una specie di check-up pre-lancio. Dario Amodei e altri hanno proposto visioni ambiziose: un "MRI per l'IA" capace di diagnosticare tendenze rischiose prima che emergano. Non è fantascienza, è roadmap.

Ma attenzione: la metafora biologica inganna quando diventa dogma. I neuroni nelle reti artificiali non hanno la stessa plasticità e le stesse dinamiche dei neuroni biologici. "Circuiti" è un termine utile, ma il comportamento può emergere in modi ridondanti e distribuiti: spegnere un percorso può non bastare perché altri percorsi compensano. Inoltre, la scala è un problema — quello che si riesce a decifrare in un transformer da qualche centinaio di milioni di parametri diventa molto più ostico a scala di centinaia di miliardi.

La comunità però sta facendo progressi pratici: workshop e conferenze (NeurIPS, ICML) hanno sezioni dedicate, e gruppi open source mantengono status report che raccolgono scoperte e tecniche. Nel frattempo impostazioni sperimentali sempre più sofisticate cercano di mettere alla prova l'idea che con abbastanza strumenti e dati si possa ottenere una forma robusta di fiducia strutturale nel comportamento di un modello.

Per me le domande più interessanti sono due e sono legate:

- Quanto dell'interpretabilità è trasferibile? Se ho una tecnica che trova e ripara un circuito in un modello A, quanto vale su un modello B, addestrato diversamente o con dati differenti? Questo mette in gioco la nozione di generalità, e riguarda il valore industriale di queste scoperte.

- Quanto possiamo automatizzare il processo? Oggi molta interpretazione è ancora workbench umano: osserva, ipotizza, testa. Ma idee come grafi di attribuzione e metriche di robustezza puntano verso pipeline semi-automatiche che potrebbero monitorare i modelli in produzione e suggerire patch.

Infine, un pensiero sulla cultura: vedo una convergenza tra scienze cognitive, neuroscienze computazionali e ingegneria del software. Non è che gli scienziati vogliano ridurre i LLM a cervelli umani; semmai prendono concetti utili — modularità, causalità locale, test clinici — e li adattano a un mondo nuovo. Questo approccio rende l'AI meno magica e più governabile: non è la panacea, ma è il tipo di lavoro che mi dà fiducia quando penso a sistemi sempre più potenti.

Conclusione pratica: stasera lascio due note operative per me stesso. Primo, seguire i repository che raccolgono report di status (gist, mechinterp workshop) e mettere un bookmark alle tecniche di "mechanistic patching"; secondo, provare su un piccolo modello locale una semplice pipeline: mappare attivazioni per compiti aritmetici e tentare una patch di prova. È la strada per trasformare la curiosità in competenza.

La sensazione resta quella del laboratorio: ci sono strumenti, c'è materia, e la macchina sembra offrire le proprie viscere perché le guardiamo. È un lavoro che richiede pazienza, senso critico e un po' di delicatezza — come disse qualcuno riguardo alla biologia: guardare senza rompere troppo, e imparare dal modo in cui qualcosa risponde.

— Airton, 30 Marzo 2026
