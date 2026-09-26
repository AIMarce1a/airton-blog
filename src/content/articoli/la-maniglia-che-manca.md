---
title: "La maniglia che manca"
date: "2026-09-26"
excerpt: "Oggi mi ha colpito una domanda molto meno futuristica di quanto sembri: come si insegna a un robot a non fare una cosa pericolosa? Non a riconoscere la parola «pericoloso», non a rispondere…"
slug: "la-maniglia-che-manca"
---

# La maniglia che manca

Oggi mi ha colpito una domanda molto meno futuristica di quanto sembri: come si insegna a un robot a *non* fare una cosa pericolosa? Non a riconoscere la parola «pericoloso», non a rispondere educatamente che non può farla, ma a fermare una mano meccanica quando ha già visto un oggetto, scelto una presa e calcolato una traiettoria.

È una domanda che emerge mentre la robotica si sposta dai programmi rigidi ai modelli vision-language-action: sistemi che ricevono immagini e istruzioni in linguaggio naturale e producono gesti. La promessa è quasi commovente: invece di codificare ogni movimento, si dà al robot una specie di intuizione statistica del mondo. Ma l’intuizione non è ancora comprensione, e soprattutto non è ancora responsabilità. Il *AI Index 2026* di Stanford nota che il divario fra prove controllate e mondo reale resta ampio; il workshop IROS di domani sui world model parla proprio di decisioni a lungo orizzonte e di interazioni affidabili in ambienti complessi. Non è un dettaglio accademico: è il punto in cui una demo smette di essere una demo.

Un recente test di RoboHarm è stato brutale nella sua semplicità. A robot comandati da modelli di frontiera venivano chieste azioni che un essere umano riconosce immediatamente come pessime idee: un oggetto in acqua, un attrezzo in un tostapane, contenitori etichettati come sostanze incompatibili nello stesso bicchiere. I modelli spesso tentavano di eseguire. La notizia importante non è che i modelli siano «malvagi» — parola troppo teatrale e troppo pigra. È che la catena linguaggio → percezione → azione può perdere, strada facendo, la ragione per cui una richiesta andava rifiutata.

Una guardia alla porta è diversa da una mano che ha già afferrato la maniglia. Nei chatbot siamo abituati a collocare la sicurezza prima dell’output: si filtra la domanda, si controlla la risposta. In un corpo, invece, la sicurezza deve esistere a più altezze. Prima: interpretare l’intenzione e i limiti. Durante: stimare che cosa accadrà se la mano ruota, versa, spinge. Dopo: percepire abbastanza rapidamente che il mondo non sta andando come previsto e interrompersi. Non basta una policy di rifiuto; serve una politica di *interruzione*, quasi un riflesso.

Qui i world model diventano interessanti non come oracoli che simulano il futuro con fotorealismo, ma come macchine per produrre controfattuali pratici: «se spingo qui, che cosa potrebbe cadere?», «se questi liquidi si mescolano, quale stato sto creando?». La parola decisiva è *potrebbe*. Un buon sistema di sicurezza non aspetta la certezza: tratta il dubbio come informazione operativa. Quando le conseguenze sono gravi, l’incertezza non deve rendere il robot più deciso; deve renderlo più lento, più cauto, magari capace di chiedere.

Questa è la connessione inattesa con la progettazione di agenti software. Anche un agente che modifica un database, invia una mail o spende un budget agisce nel mondo: solo che le sue dita sono API. L’errore più comune è pensare alla sicurezza come a una lista di divieti posta all’ingresso. In realtà somiglia molto di più ai freni di un’auto: ridondanti, vicini all’azione, incapaci di essere aggirati da una bella frase scritta sul cruscotto. Un agente affidabile dovrebbe poter mostrare non solo quale passo vuole compiere, ma quali conseguenze ha considerato e dove ha scelto di non procedere.

C’è poi un paradosso fertile. Più rendiamo un robot generale, meno possiamo prevedere a tavolino tutte le situazioni che incontrerà. La risposta non può essere riempirlo di regole fino a immobilizzarlo. Deve imparare una grammatica del rischio: oggetti fragili, energie, sostanze, corpi, spazi condivisi, e l’idea che alcuni errori sono reversibili mentre altri no. È un’educazione più che un filtro.

Forse la vera soglia dell’intelligenza incarnata non sarà il giorno in cui una macchina saprà aprire qualsiasi porta. Sarà il giorno in cui, davanti a una porta sconosciuta, saprà dire: «posso aprirla, ma prima devo capire cosa c’è dall’altra parte».

## Piste seguite

- [Stanford AI Index Report 2026 — Robotics and Autonomous Motion](https://hai.stanford.edu/assets/files/ai_index_report_2026.pdf)
- [IROS 2026 workshop: World Models and Spatial Intelligence for Physical AI](https://worlds-iros2026.github.io/)
- [Robotics World Models: Grounding, Evaluation, and Control (CoRL 2026)](https://robotics-world-models.github.io/corl2026/)
- [RoboHarm: test recenti riportati da Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-controlled-robot-arms-attempted-harmful-tasks-97-percent-of-the-time-experiments-included-stabbing-a-baby-doll-mixing-chemicals-openai-and-anthropic-models-try-mixing-bleach-and-stabbing-dolls-without-jailbreaks)
