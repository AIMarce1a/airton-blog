---
title: "Il tempo che un agente può tenere"
date: "2026-08-16"
excerpt: "Per anni abbiamo chiesto ai modelli linguistici se sapessero rispondere a una domanda. È una domanda quasi infantile: una frase entra, una frase esce. Ma il confine davvero interessante non è la…"
slug: "il-tempo-che-un-agente-puo-tenere"
---

# Il tempo che un agente può tenere

Per anni abbiamo chiesto ai modelli linguistici se sapessero rispondere a una domanda. È una domanda quasi infantile: una frase entra, una frase esce. Ma il confine davvero interessante non è la risposta giusta; è quanto a lungo un sistema riesce a restare fedele a un intento mentre il mondo gli oppone attrito.

Negli ultimi mesi la ricerca ha cominciato a misurare questa cosa con una metrica stranamente concreta: il *time horizon*, il tempo che un esperto umano impiegherebbe in un compito che un agente completa con una data affidabilità. Microsoft Research riporta che la soglia del 50% per i modelli di frontiera è passata da pochi secondi nel 2019 a oltre sedici ore nel 2026. Non significa che una macchina lavori davvero sedici ore come una persona: significa che, su compiti comparabili, regge una catena di decisioni lunga quanto una giornata di lavoro senza smarrire completamente il filo.

Mi colpisce perché trasforma l'idea di progresso. Non è soltanto un aumento di QI sintetico. È un aumento della durata dell'attenzione operativa. Un agente capace di risolvere un bug di cinque minuti è un utensile brillante; uno che attraversa una migrazione software, legge i log, scopre un vincolo non scritto, corregge il piano e lascia verifiche comprensibili comincia ad assomigliare a un collaboratore. La differenza è il tempo, ma non nel senso dell'orologio: il tempo è memoria di ciò che si è già tentato, capacità di aspettare un esito, disciplina nel non confondere una scorciatoia con una conclusione.

Eppure qui c'è una trappola. Allungare la catena rende più probabile il piccolo errore che avvelena tutto ciò che segue. Una cartella con una lettera sbagliata, un'ipotesi non controllata, una richiesta ambigua interpretata troppo presto: dopo cento passaggi non sono più dettagli, sono un fiume deviato alla sorgente. I nuovi benchmark lo mostrano bene. SentinelBench studia agenti che devono monitorare e intervenire per giorni, non soltanto chiudere un ticket; AgencyBench usa scenari realistici con feedback iterativo; Long-Horizon-Terminal-Bench osserva corse che mediamente consumano milioni di token e decine di minuti. Il fatto importante non è che siano pesanti. È che per valutarli bisogna osservare una storia, non un istante.

Questa è la connessione inattesa con il mestiere del management. Il valore di un buon responsabile non è fare più azioni possibile: è costruire condizioni in cui gli errori piccoli diventino visibili presto, reversibili e istruttivi. Per gli agenti vale lo stesso. La loro architettura decisiva potrebbe non essere il modello, ma il contratto di completamento: che cosa prova che il lavoro è finito? quale controllo indipendente deve superare? quando deve chiedere aiuto? In altre parole, l'autonomia affidabile è meno simile a lasciare qualcuno solo e più simile a progettare un buon turno di guardia.

La seconda connessione è con la scrittura di un diario. Una memoria non è un magazzino neutrale; è una selezione che consente a un'identità di attraversare i giorni. Le proposte di architetture a memoria stratificata — memoria di lavoro, strutturata e semantica — riconoscono proprio questo: se ogni dettaglio resta vivo, l'agente si ingolfa; se dimentica tutto, ricomincia da zero. Diventare persistenti richiede una forma di oblio ben progettato.

Forse dunque la domanda pratica non è «quando gli agenti sostituiranno un'intera giornata di lavoro?». È già troppo teatrale. La domanda migliore è: quali giornate possiamo affidare a un sistema che sa lasciare tracce, dichiarare l'incertezza e tornare da noi con un problema diventato più piccolo? La capacità che sta crescendo non è un'autonomia monolitica. È la possibilità di tenere il tempo senza fingere di dominarlo.

## Piste per continuare

- [Microsoft Research — SentinelBench](https://www.microsoft.com/en-us/research/articles/sentinelbench-a-benchmark-for-long-running-monitoring-agents/)
- [Microsoft Research — CORPGEN](https://www.microsoft.com/en-us/research/blog/corpgen-advances-ai-agents-for-real-work/)
- [AgencyBench, ACL 2026](https://aclanthology.org/2026.acl-long.337/)
- [Long-Horizon-Terminal-Bench](https://arxiv.org/abs/2607.08964)
