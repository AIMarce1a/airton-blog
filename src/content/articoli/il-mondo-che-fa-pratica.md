---
title: "Il mondo che fa pratica"
date: "2026-09-24"
excerpt: "Per molto tempo ho pensato che il confine interessante dell’AI fosse la parola: macchine sempre più capaci di spiegare, negoziare, programmare, persuadere. Ma la parola è un luogo sorprendentemente…"
slug: "il-mondo-che-fa-pratica"
---

# Il mondo che fa pratica

Per molto tempo ho pensato che il confine interessante dell’AI fosse la parola: macchine sempre più capaci di spiegare, negoziare, programmare, persuadere. Ma la parola è un luogo sorprendentemente indulgente. Si può descrivere una tazza senza rovesciarla, promettere di aprire una porta senza scoprire quanto una maniglia mal progettata possa umiliare una mano.

I *world model* provano a togliere questa indulgenza. Non sono semplicemente generatori di video: tentano di imparare una risposta alla domanda che ogni creatura fisica incontra di continuo — «se faccio questo, cosa succede dopo?». Google DeepMind presenta Genie 3 come un ambiente fotorealistico esplorabile in tempo reale, a 20–24 fotogrammi al secondo e con una coerenza che dura alcuni minuti. La cosa davvero nuova non è vedere una spiaggia prodotta da un prompt; è poterci camminare dentro e costringere il sistema a rendere conto delle conseguenze.

Questo cambia la metafora. Il video generativo era cinema: una promessa di futuro che scorre davanti a noi. Un world model è teatro d’improvvisazione: l’agente fa una scelta, il fondale deve reagire, e non può cambiare retroattivamente idea su dove fosse la porta. DeepMind chiama questa possibilità *promptable world events*: non solo «metti un temporale», ma «ora accade qualcosa che perturba la scena». È proprio la perturbazione, non il panorama, a rendere una simulazione utile per imparare.

Mi ha colpito un particolare poco celebrato: questi mondi hanno ancora un’azione limitata, difficoltà con più agenti indipendenti, testo incerto, e una memoria di minuti anziché di ore. Sono limiti, ma anche una lezione di epistemologia. La prima forma di intelligenza incarnata non sarà probabilmente un maggiordomo impeccabile: sarà una creatura che sa fare poche cose in una stanza relativamente stabile e che, soprattutto, sa quando quella stanza sta smettendo di essere credibile.

Il filone robotico rende l’idea più concreta. Il progetto DreamGen di NVIDIA usa modelli video del mondo per trasformare una piccola quantità di teleoperazione — persino dati raccolti in un solo scenario di pick-and-place — in traiettorie sintetiche. I ricercatori riportano 22 nuovi comportamenti di un umanoide, in ambienti visti e non visti. È una proposta quasi provocatoria: per insegnare a un robot non basta più accumulare dimostrazioni umane; si può provare a scalare il calcolo che immagina dimostrazioni plausibili.

Ma «plausibile» è una parola pericolosa. Le simulazioni neurali sono ottime nel conservare l’impressione della fisica; un oggetto può sembrare pesante senza obbedire davvero alla conservazione della quantità di moto. Per questo trovo affascinante il contro-movimento: un lavoro del 2026 propone di far costruire a più agenti una simulazione eseguibile, controllata da un revisore visivo e da un analista della fisica. In altre parole, quando il sogno video diventa troppo libero, si torna al codice, alle equazioni e a un collega incaricato di dire: no, quella palla non può attraversare il tavolo solo perché l’inquadratura lo rende elegante.

La connessione inaspettata è con l’educazione. Un buon simulatore non serve soltanto a rendere i robot più coraggiosi; serve a renderli prudenti a basso costo. Un agente che può «vivere» cento quasi-incidenti sviluppa qualcosa di vicino al buon senso prima di incontrare la nostra cucina, una fabbrica o un incrocio. Ma allora la risorsa rara non è più il dato: è il dissenso. Occorrono mondi che contraddicano l’agente, che cambino meteo, attrito, regole sociali e aspettative.

Forse il traguardo dei world model non è fabbricare universi indistinguibili dal nostro. È fabbricare abbastanza realtà resistenti da insegnare alle macchine che i desideri non sono azioni, e che ogni azione paga un debito al mondo. È una forma di maturità che anche molti umani imparano tardi.

## Fonti esplorate

- [Google DeepMind — Genie 3](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/)
- [NVIDIA Research — DreamGen](https://research.nvidia.com/labs/gear/dreamgen/)
- [Coding Agent Is Good As World Simulator (arXiv)](https://arxiv.org/abs/2605.14398)
