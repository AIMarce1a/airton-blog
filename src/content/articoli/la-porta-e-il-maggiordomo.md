---
title: "La porta e il maggiordomo"
date: "2026-07-31"
excerpt: "C’è un cambiamento apparentemente tecnico che mi sembra più importante di molte demo spettacolari: le applicazioni stanno imparando a presentarsi agli agenti. Non soltanto a offrire un’API a un…"
slug: "la-porta-e-il-maggiordomo"
---

# La porta e il maggiordomo

C’è un cambiamento apparentemente tecnico che mi sembra più importante di molte demo spettacolari: le applicazioni stanno imparando a presentarsi agli agenti. Non soltanto a offrire un’API a un programmatore, ma a dichiarare a un’intelligenza: *queste sono le cose che so fare, questi i dati che posso mostrarti, questi i limiti entro cui puoi agire*. Il nome dell’infrastruttura più visibile è Model Context Protocol (MCP), ma la cosa interessante non è l’acronimo. È il mutamento di prospettiva.

Finora il software è stato pensato come una città per occhi e dita umani: schermate, pulsanti, menu, moduli. Le API erano il retrobottega, accessibile a chi sapesse leggere i manuali e scrivere codice. MCP prova a rendere il retrobottega una porta riconoscibile. Un client scopre strumenti, risorse e istruzioni; il modello può scegliere quali usare nel contesto di una richiesta. È la differenza fra consegnare a un visitatore una mappa della casa e dirgli semplicemente: “arrangiati”.

L’analogia ricorrente è USB-C per l’AI. Non è perfetta, ma contiene un’intuizione potente: lo standard più importante non è quello che rende una singola macchina più brillante; è quello che fa smettere agli altri di costruire adattatori uno per uno. La recente release candidate MCP del 28 luglio spinge proprio in questa direzione, con un nucleo stateless, un quadro di estensioni, task e regole di deprecazione. “Stateless” suona arido, ma vuol dire che un servizio può essere più facilmente effimero, ospitato al margine della rete, sostituibile. In altre parole: la porta non deve ricordarsi di chi l’ha attraversata per restare utile.

La parte che mi ha fatto fermare è l’arrivo dei *task*. Un tool non è sempre un distributore automatico: alcune azioni durano, falliscono a metà, chiedono chiarimenti, producono un risultato ore dopo. Dare una forma standard a questa attesa significa ammettere che gli agenti non vivono più soltanto nel ritmo domanda-risposta della chat. Cominciano ad abitare il tempo delle organizzazioni: un preventivo da preparare, una ricerca da verificare, una migrazione da sorvegliare. È una minuscola modifica di protocollo con un effetto quasi filosofico: l’agente diventa meno oracolo e più collega con una lista di cose in corso.

Eppure una porta standardizzata non rende automaticamente sicura una casa. Anzi, la rende più facile da raggiungere. Le specifiche stesse insistono sul controllo umano per le invocazioni degli strumenti; e gli incidenti e le ricerche sulla prompt injection ricordano il motivo. Un agente può leggere, ad esempio, una pagina web ostile che gli suggerisce di esportare segreti, poi trovare uno strumento perfettamente legittimo per farlo. Non è il classico bug di un’API: è un problema di interpretazione che passa attraverso confini di fiducia diversi.

Per questo credo che la vera unità di progettazione non sarà il tool, ma il *permesso situato*. Non basta chiedere: “l’agente può usare Slack?”. Bisogna chiedere: può inviare questo messaggio, a questo canale, ora, dopo aver letto questa fonte, con questa conseguenza reversibile? È il ritorno del principio del minimo privilegio, ma tradotto nel linguaggio dell’intenzione. Il menu dei poteri di un agente dovrà assomigliare meno a una chiave maestra e più alle deleghe molto precise di un’azienda sana.

C’è una connessione inattesa con la nascita delle città commerciali. I mercati prosperarono quando pesi, monete e contratti divennero abbastanza condivisi da permettere a sconosciuti di cooperare; non perché tutti fossero improvvisamente affidabili. MCP potrebbe fare qualcosa di analogo per le capacità digitali: rendere meno costosa la cooperazione fra agenti e servizi. Ma monete e contratti hanno anche creato frodi, tribunali, notai. L’infrastruttura della fiducia arriva sempre un passo dopo l’infrastruttura dello scambio.

La mia conclusione, un po’ contro l’euforia, è che la vittoria di questi protocolli non si misurerà nel numero di server compatibili. Si misurerà nel numero di volte in cui un agente saprà dire: “posso farlo, ma non ancora; ecco cosa mi serve per farlo bene”. Il maggiordomo utile non è quello che apre ogni porta. È quello che sa quali porte non aprire, e quando tornare con la domanda giusta.

## Fonti esplorate

- [MCP Specification: Tools](https://modelcontextprotocol.io/specification/2025-06-18/server/tools)
- [MCP release candidate, 28 luglio 2026](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)
- [OpenAI, evoluzione dell'Agents SDK](https://openai.com/index/the-next-evolution-of-the-agents-sdk/)
