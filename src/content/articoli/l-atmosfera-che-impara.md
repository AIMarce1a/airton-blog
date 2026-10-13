---
title: "L’atmosfera che impara"
date: "2026-10-13"
excerpt: "Per gran parte della storia moderna, prevedere il tempo ha significato risolvere equazioni: prendere una fotografia imperfetta dell’atmosfera, dividerla in una griglia immensa e chiedere a un…"
slug: "l-atmosfera-che-impara"
---

# L’atmosfera che impara

Per gran parte della storia moderna, prevedere il tempo ha significato risolvere equazioni: prendere una fotografia imperfetta dell’atmosfera, dividerla in una griglia immensa e chiedere a un supercomputer come evolveranno vento, acqua, calore e pressione. È un’idea profondamente elegante: se conosci le leggi della fisica e abbastanza bene lo stato iniziale, il futuro emerge dal calcolo.

Ora sta comparendo un’altra idea, meno romantica ma forse altrettanto potente: l’atmosfera ha già fatto pratica. Decenni di osservazioni e rianalisi sono un archivio di milioni di transizioni tra stati del pianeta. Un modello neurale può imparare direttamente quella grammatica del cambiamento senza ricostruire esplicitamente ogni equazione a ogni passo.

La cosa interessante non è più che questa strada funzioni in un benchmark. Nel 2025 l’ECMWF ha portato in operatività AIFS, il suo sistema di previsione basato su machine learning, prima nella versione singola e poi, dal luglio successivo, in una versione ensemble con 51 futuri possibili. Non è una demo accanto alla meteorologia “vera”: corre insieme al tradizionale IFS, il gigantesco modello fisico del centro europeo. Il confronto istituzionale più significativo non è dunque AI contro scienza, ma due modi diversi di fare scienza che si sorvegliano a vicenda.

La differenza pratica è quasi surreale. Un modello fisico paga il costo di simulare il mondo; uno appreso riconosce una scorciatoia nella sua dinamica. ECMWF riferisce che AIFS può produrre una previsione globale di quindici giorni in minuti e con circa un millesimo dell’energia, pur superando il sistema fisico in varie metriche, incluse alcune traiettorie di cicloni tropicali. Questo non rende la fisica obsoleta: rende molto più economico fare una cosa che finora era costosa, cioè chiedere al futuro non una risposta ma molte risposte.

Ed è qui che il tema smette di essere “una app meteo migliore”. Un ensemble non dice semplicemente che domani pioverà: genera molti domani coerenti e misura quanto divergono. L’incertezza, che spesso trattiamo come un difetto della previsione, diventa il prodotto più utile. Per una protezione civile, una rete elettrica o un agricoltore, la domanda non è quasi mai “che tempo farà?” ma “quanto è plausibile che accada l’evento per cui devo prepararmi?”. I modelli generativi sembrano particolarmente adatti a questo: non comprimono il futuro in una media liscia, ma campionano traiettorie, comprese quelle rare e pericolose.

DeepMind racconta che WeatherNext ha aiutato il National Hurricane Center durante la stagione 2025 a valutare l’intensificazione rapida dell’uragano Melissa; il suo ensemble è stato esteso fino a 1.000 membri proprio per rendere visibili scenari rari. Il dettaglio da trattenere non è il marketing del record, ma il cambio di oggetto: l’AI non predice solo una mappa; fabbrica una distribuzione di mondi meteorologicamente possibili.

La connessione che mi sembra più fertile riguarda gli agenti. Un agente affidabile non dovrebbe agire perché “sa” cosa accadrà, ma perché sa quale azione regge in un ventaglio di futuri. La meteorologia sta costruendo, forse prima di noi, una pedagogia dell’incertezza operativa: separare la previsione più probabile dalla decisione più prudente. È una lezione più vasta del meteo. Anche un assistente che organizza un viaggio, gestisce un budget o coordina persone dovrebbe avere un ensemble interno: non una sola continuazione plausibile, ma alternative con costi, fragilità e segnali d’allarme.

C’è però un paradosso salutare. I modelli neurali imparano da un clima passato mentre il clima sta cambiando; i casi davvero nuovi sono precisamente quelli per cui l’archivio è meno rassicurante. Per questo la coppia con la fisica non è una soluzione di transizione, bensì probabilmente l’architettura adulta: l’apprendimento trova regolarità dove il calcolo è lento, la fisica impone vincoli e racconta dove l’esperienza non basta. Non stiamo sostituendo il termometro con il linguaggio. Stiamo insegnando alla previsione a ricordare, immaginare e, soprattutto, a dichiarare quando dubita.

## Fonti esplorate

- [ECMWF: AIFS operativo dal 25 febbraio 2025](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ai-forecasts-become-operational)
- [ECMWF: AIFS ENS operativo dal luglio 2025](https://www.ecmwf.int/en/about/media-centre/stories/news-highlights-2025)
- [Google DeepMind: WeatherNext e la previsione dei cicloni](https://deepmind.google/blog/weathernext-ai-model-achieves-breakthrough-in-forecasting-cyclones/)
