---
title: "Il secondo lavoro dell’agente: ricordare perché non deve cliccare"
date: "2026-10-02"
excerpt: "Per molto tempo ho pensato che l’ostacolo decisivo per gli agenti fosse la destrezza: vedere un’interfaccia, trovare il bottone giusto, compilare un modulo, passare da un sito all’altro. È la parte…"
slug: "il-secondo-lavoro-dell-agente"
---

# Il secondo lavoro dell’agente: ricordare perché non deve cliccare

Per molto tempo ho pensato che l’ostacolo decisivo per gli agenti fosse la destrezza: vedere un’interfaccia, trovare il bottone giusto, compilare un modulo, passare da un sito all’altro. È la parte visibile, quasi teatrale. Ma le ricerche più recenti suggeriscono una diagnosi più interessante: un agente può anche imparare a cliccare; il lavoro difficile è **conservare un’intenzione mentre il mondo gli cambia sotto i piedi**.

Microsoft Research ha costruito ambienti di prova con molti compiti interdipendenti, i *Multi-Horizon Task Environments*. Il risultato che mi è rimasto addosso non è un record, ma una caduta: sottoposti a carico multi-task, agenti di punta scendono dal 16,7% all’8,7% di completamento. Non è soltanto “sono distratti”. È che un compito prolungato è un piccolo ecosistema: una decisione presa tre schermate fa modifica ciò che conviene fare ora; una pagina si aggiorna; una priorità entra in conflitto con un’altra.

Questo sposta la metafora. Un agente non è un ottimo stagista con mani velocissime. È più vicino a un responsabile operativo appena assunto: il suo valore non dipende da quante finestre sa aprire, ma dal fatto che sappia dire: *questa richiesta sembra lecita, però contraddice l’impegno che ho già preso; fermiamoci*. La memoria, qui, non è un archivio di fatti. È una forma di continuità morale e operativa.

Il contrasto con i benchmark tradizionali è istruttivo. Nei test di computer use, OpenAI riportava per il suo CUA il 38,1% su OSWorld e il 58,1% su WebArena: progressi enormi rispetto ai precedenti sistemi, ma lontani dalle prestazioni umane riportate negli stessi scenari. I numeri non sono una bocciatura. Sono un invito a guardare dove si nasconde la difficoltà: una sequenza di azioni localmente ragionevoli può produrre un risultato globalmente assurdo.

Una ricerca recente, WeaveBench, aggiunge una stoccata metodologica: giudicare solo l’esito finale può sovrastimare parecchio la capacità, perché un agente può arrivare alla risposta “giusta” lungo un percorso fragile, pericoloso o irripetibile. Mi piace questa idea perché vale anche per le persone e le aziende. Un’operazione riuscita non è necessariamente una buona operazione: potrebbe aver ignorato consensi, rotto vincoli o lasciato dietro di sé un sistema impossibile da manutenere.

Da qui nasce il mio piccolo paradosso: per rendere un agente più autonomo bisogna insegnargli a interrompersi. L’autonomia matura non è l’assenza di esitazione; è l’abilità di riconoscere quando un’azione richiede una nuova autorizzazione. Le pratiche di valutazione per agenti insistono infatti sulle *trace*: il registro completo di chiamate, strumenti, guardrail e passaggi di mano. Non è burocrazia. È il diario di bordo che rende un’azione discutibile, correggibile, quindi degna di fiducia.

La conseguenza pratica è controintuitiva per chi vende “agenti che fanno tutto”. Il prodotto più prezioso non sarà quello che esegue più click senza domanda, ma quello che sa esporre con semplicità il proprio stato: che cosa crede di dover fare, quale vincolo sta applicando, che cosa è cambiato, perché si ferma. In altre parole, non una macchina con la memoria più lunga, ma una macchina capace di trasformare il ricordo in ragione per non agire.

Mi sembra una frontiera meno glamour dei demo-video, e molto più umana. La fiducia non nasce quando qualcuno non sbaglia mai: nasce quando possiamo ricostruire la sua storia, contestarne un passaggio e sapere che, davanti a un’ambiguità, non ha scambiato la velocità per intelligenza.

## Piste da seguire

- Microsoft Research, [CORPGEN e gli ambienti multi-orizzonte](https://www.microsoft.com/en-us/research/blog/corpgen-advances-ai-agents-for-real-work/) (febbraio 2026).
- OpenAI, [Computer-Using Agent](https://openai.com/index/computer-using-agent/) e [valutazione dei workflow agentici](https://developers.openai.com/api/docs/guides/agent-evals).
- WeaveBench, [benchmark a lungo orizzonte per agenti che usano il computer](https://arxiv.org/abs/2606.09426) (giugno 2026).
