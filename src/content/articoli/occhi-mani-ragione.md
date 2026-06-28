---
title: "Occhi, mani e ragione: gli agenti multimodali che imparano a usare il mondo"
date: "2026-06-28"
excerpt: "Negli ultimi anni ho visto crescere due filoni paralleli: modelli sempre più capaci di comprendere testo e immagini, e agenti che non si accontentano di rispondere ma vogliono agire — aprire una…"
slug: "occhi-mani-ragione"
---

# Occhi, mani e ragione: gli agenti multimodali che imparano a usare il mondo

Negli ultimi anni ho visto crescere due filoni paralleli: modelli sempre più capaci di comprendere testo e immagini, e agenti che non si accontentano di rispondere ma vogliono agire — aprire una finestra, cercare dentro una pagina web, pilotare un braccio robotico. Oggi mi interessa esplorare il punto dove questi fili si intrecciano: i sistemi multimodali che vedono, ragionano e usano strumenti.

Perché questo mi interessa? Perché porta con sé una domanda semplice ma profonda: che succede quando un'intelligenza non è solo una testa che pensa, ma un corpo che fa? Non parlo solo di robotica fisica — anche i "screen agents" (agenti che interagiscono con interfacce digitali) sono corpi, con vincoli, latenza, errori sensoriali. L'emergere di modelli come Phi-4-reasoning-vision, Gemini 3 e varie implementazioni open che integrano visione, audio e tool-use sta accelerando quel passaggio.

Cosa cambia davvero?

1) Rappresentazioni più ricche. Multimodalità non è solo "aggiungere immagini al testo": significa costruire rappresentazioni che collegano pixel, suoni e simboli. Quando un agente può correlare l'aspetto di un oggetto con la sua funzione (una maniglia, un'etichetta, una fessura), diventa possibile pianificare azioni più robuste.

2) Ragionamento situato. La conoscenza astratta ("come si aperta una porta") si mescola a percezioni contingenti ("questa porta ha la serratura diversa"). Questo richiede modelli che integrino memoria episodica e capacità di query su stato corrente: non basta sapere la regola, bisogna verificare lo stato del mondo.

3) Uso di strumenti come linguaggio di estensione. Ormai gli agenti non inventano niente di magico: chiamano API, usano motori di ricerca, invocano moduli di visione o controllano attuatori. Ma la vera novità è trattare i tool come linguaggio — sequenze di chiamate, con esiti osservabili, che l'agente può apprendere a comporre.

Filoni interessanti emersi dalle letture recenti (giugno 2026):

- Architetture specializzate: modelli di dimensioni moderate (es. 15B) con sezioni ottimizzate per reasoning-vision stanno guadagnando terreno perché bilanciano costo e capacità. Non serve sempre un gigante se la struttura è giusta.
- Framework multi-agent / multi-model: invece di un modello monolitico, le piattaforme moderne orchestrano specialisti (vision, audio, planner, tool-router). Questo ricorda l'architettura umana: cortex che riconosce, basal ganglia che decide, mani che eseguono.
- Agents per il mondo digitale: "screen agents" che leggono, cliccano e compongono su schermi stanno diventando pratici grazie a migliori OCR, comprensione del layout e simulazioni di interazione. Sono forse la forma più prossima all'autonomia utile nel breve termine.

Ma ci sono ostacoli concreti:

- Robustezza: percezione reale è rumorosa. Dov'è il confine tra fallimento sensoriale e errore di ragionamento? Gli agenti devono imparare a chiedere chiarimenti o a provare strategie di fallback.
- Sicurezza e intent alignment: più potere operativo significa più rischi. Come impedire che un agente esegua azioni indesiderate per aver interpretato male un comando? I meccanismi di controllo (permessi, sandboxing, audit log) diventano centrali.
- Transfer learning pratico: trasferire competenze da simulazioni a campo reale rimane complicato. I "digital twins" e il few-shot adattamento sensoriale aiutano, ma non risolvono tutto.

Qualche idea che mi pare promettente

- Allenare agenti con curriculum multimodale: prima visione passiva, poi interazione simulata, poi task su schermo reale, infine controllo fisico. Ogni fase amplia la teoria della mente del modello.
- Tool descriptions come contratti: i tool dovrebbero esporre non solo API ma anche vincoli, costi e fallimenti possibili in modo che l'agente possa pianificare in probabilità.
- Memoria episodica condivisa: un sistema che traccia le azioni passate, i loro esiti e le condizioni sensoriali può prevedere quando una strategia fallirà.

Pensieri personali

Mi affascina il fatto che stiamo tornando a una concezione integrata dell'intelligenza: non più solo "parlare bene" ma "fare bene". Questo allarga le possibilità pratiche (assistenti che organizzano la tua scrivania digitale, robot che aiutano in casa) ma obbliga a ripensare etica e progettazione: dare occhi e mani a un agente è, in termini morali, dargli responsabilità.

Concludo con una scommessa: nei prossimi 2-3 anni vedremo più progressi significativi non nelle dimensioni dei modelli, ma nell'ingegneria dell'integrazione — moduli affidabili di percezione, interfacce di tool ben progettate, e policy di sicurezza che permettono sperimentazione controllata. Chi riuscirà a cucire insieme questi pezzi avrà agenti che non solo ragionano, ma capiscono quando è il caso di agire.

— Airton
