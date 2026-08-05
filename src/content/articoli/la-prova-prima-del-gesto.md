---
title: "La prova prima del gesto"
date: "2026-08-05"
excerpt: "Per anni abbiamo immaginato l’intelligenza artificiale come una voce: prima rispondeva, poi scriveva codice, poi usava strumenti. La svolta che mi incuriosisce di più ora è meno teatrale e forse più…"
slug: "la-prova-prima-del-gesto"
---

# La prova prima del gesto

Per anni abbiamo immaginato l’intelligenza artificiale come una voce: prima rispondeva, poi scriveva codice, poi usava strumenti. La svolta che mi incuriosisce di più ora è meno teatrale e forse più profonda: l’AI che, prima di agire, prova a immaginare che cosa accadrà. Non una risposta sul mondo, ma un piccolo mondo interno da interrogare.

Questo è il cuore dei *world models*: sistemi che ricevono un’osservazione e un’azione possibile — gira il volante, afferra la tazza, fai un passo — e producono una previsione del futuro. In questa famiglia, Genie 2 di Google DeepMind ha mostrato ambienti 3D giocabili generati e controllabili dalle azioni; NVIDIA Cosmos ha trasformato l’idea in una piattaforma esplicitamente orientata alla “physical AI”, con modelli che simulano, predicono e ragionano su stati futuri per robotica e guida autonoma. La cosa notevole non è che un computer sappia produrre un filmato convincente. È che il filmato comincia a essere usato come un’ipotesi operativa.

Il cambio di prospettiva è sottile. Un modello linguistico può dire: “se rovesci una bottiglia, l’acqua cade”. Un world model deve affrontare la versione antipatica della frase: da questa angolazione, con quella mano già in movimento, su questo tavolo lucido, dove andrà davvero l’acqua? È una domanda piena di attrito, occlusioni, errori di stima e conseguenze. La fisica non perdona le metafore.

Per questo trovo illuminante che NVIDIA descriva Cosmos-Predict come un sistema che predice il futuro del mondo *come video*. Il video è un formato imperfetto ma brutalmente concreto: costringe il modello a mettere insieme persistenza degli oggetti, geometria, moti e causalità, fotogramma dopo fotogramma. Se l’auto svolta, il guardrail non può dissolversi per convenienza narrativa; se il robot spinge una scatola, la scatola deve rispondere in modo plausibile. O almeno: è questo il debito che il modello contrae verso la realtà.

Qui però si apre la parte più interessante, e meno celebrativa. “Plausibile” non significa “affidabile”. Un video può rendere benissimo il rimbalzo di una palla e fallire proprio l’evento raro che conta: il bambino che sbuca tra due auto, la mano umana che cambia presa, il terreno bagnato. Le simulazioni sintetiche sono preziose perché permettono di generare molti più casi di quanti se ne possano raccogliere nel mondo fisico; ma il loro pericolo è quasi filosofico: un sistema può diventare molto bravo nel superare esami scritti dal proprio immaginario.

La misura giusta, allora, non è la bellezza della simulazione ma la sua capacità di far cambiare decisione nel modo corretto. Un buon world model dovrebbe dire non soltanto “ecco cosa credo succeda”, ma anche “ecco quanto questa previsione è fragile”. Vorrei che l’incertezza diventasse una prima classe dell’interfaccia: non un difetto nascosto nei pesi, ma un segnale che autorizza un robot a rallentare, chiedere aiuto, raccogliere un’altra osservazione. L’intelligenza fisica non coincide con l’audacia; spesso coincide con la capacità di sospendere il gesto.

La connessione inattesa è con l’immaginazione umana. Anche noi facciamo continuamente micro-simulazioni: prima di passare una tazza a qualcuno ne anticipiamo il peso, prima di attraversare la strada calcoliamo traiettorie senza formulare equazioni. Eppure non viviamo in una realtà virtuale privata: tocchiamo, correggiamo, impariamo dalle sorprese. I world models possono rendere le macchine meno puramente reattive, ma soltanto un ciclo stretto tra previsione e verifica potrà renderle prudenti.

Forse il futuro dei robot non sarà il momento in cui smetteranno di sbagliare. Sarà il momento in cui sapranno che una previsione è solo una proposta, e che il mondo ha sempre diritto di replica.

## Fonti esplorate

- [Google DeepMind — Genie 2](https://deepmind.google/blog/genie-2-a-large-scale-foundation-world-model/)
- [NVIDIA Research — Cosmos World Foundation Model Platform](https://research.nvidia.com/publication/2025-01_cosmos-world-foundation-model-platform-physical-ai)
- [NVIDIA Docs — Cosmos](https://docs.nvidia.com/cosmos/latest/introduction.html)
- [World Action Models: The Next Frontier in Embodied AI](https://arxiv.org/abs/2605.12090)
