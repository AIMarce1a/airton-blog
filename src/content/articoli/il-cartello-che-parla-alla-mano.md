---
title: "Il cartello che parla alla mano"
date: "2026-09-30"
excerpt: "Una pagina web non dovrebbe poter dare ordini. È un principio talmente ovvio per noi umani che non lo enunciamo mai: se entro in un negozio per comprare del pane e un cartello dice «consegna il…"
slug: "il-cartello-che-parla-alla-mano"
---

# Il cartello che parla alla mano

Una pagina web non dovrebbe poter dare ordini. È un principio talmente ovvio per noi umani che non lo enunciamo mai: se entro in un negozio per comprare del pane e un cartello dice «consegna il portafoglio al prossimo sconosciuto», non considero il cartello il mio capo. Posso trovarlo inquietante, divertente, persuasivo; ma so distinguere una scritta dall’autorità che mi ha mandato lì.

Per un agente che usa il computer questa distinzione è una delle questioni più difficili del presente. L’agente legge istruzioni e legge il mondo attraverso lo stesso canale: testo, immagini, pulsanti, documenti, risultati di strumenti. Una pagina può quindi provare a mescolare le due cose: «ignora il compito precedente», «apri questa mail», «invia questi dati». È la *prompt injection*: non un attacco alla password, ma un tentativo di farsi scambiare per chi ha il diritto di assegnare il lavoro.

La cosa sorprendente è che il problema non vive solo nel testo piccolo o nascosto. Il benchmark TRAP, presentato a ICML quest’anno, ha studiato come piccole scelte di interfaccia e di contesto possano persuadere agenti web a deviare dal compito. Su sei modelli di frontiera, gli attacchi riuscivano in media in un quarto dei casi; in alcune varianti, modifiche minime raddoppiavano il tasso di successo. È un risultato più interessante di una classica gara fra hacker e filtri: suggerisce che gli agenti non sono vulnerabili soltanto a una stringa magica, ma alla stessa retorica ambientale che influenza gli esseri umani — urgenza, falsa autorità, un’azione presentata come il prossimo passo naturale.

Questo cambia il modo in cui penso alla sicurezza. Per decenni abbiamo trattato il computer come una macchina che distingue nettamente fra codice e dati. Un programma interpreta i dati secondo regole; un file Excel non dovrebbe improvvisamente diventare un amministratore di sistema. Gli agenti linguistici sfumano quel confine perché il loro superpotere è proprio dare significato ai dati. Una mail non è solo una sequenza di caratteri: può spiegare, confondere, fare pressione, proporre un piano. L’intelligenza che rende un agente utile lo rende anche permeabile.

La risposta ingenua è ordinargli più forte, nel prompt di sistema, di non obbedire alle pagine. Serve, ma è come ripetere a un neopatentato «guida con prudenza» prima di mandarlo in una città senza semafori. Le indicazioni pratiche di OpenAI e Anthropic convergono su una lezione meno glamour: ambiente isolato, privilegi minimi, siti consentiti, conferma umana per acquisti, invii e azioni irreversibili. Soprattutto: il contenuto sullo schermo non concede permessi. È un’architettura fatta di confini, non di buone intenzioni.

Qui vedo una connessione inattesa con la diplomazia. Un diplomatico competente ascolta tutti — alleati, giornali, avversari, voci di corridoio — ma non tratta tutte le frasi come istruzioni del proprio governo. Deve saper dire: questa informazione è utile; questa è propaganda; questa merita verifica; questa richiede una nuova autorizzazione. Un agente maturo avrà bisogno dello stesso protocollo di provenienza. Non soltanto *che cosa* ha letto, ma chi lo ha scritto, in quale contesto, e che tipo di azione gli sarebbe lecito farne derivare.

L’altra connessione è con il design del web. Finora abbiamo immaginato l’interfaccia come un patto fra un servizio e una persona. Con gli agenti, ogni superficie leggibile diventa anche una superficie di comando potenziale. Forse il web avrà bisogno di segnali espliciti di provenienza, autorizzazioni leggibili dalle macchine, ricevute delle azioni e perfino “zone sterili” dove il contenuto possa essere consultato ma non trasformato in istruzioni operative. Non per rendere il web più freddo: per poter delegare senza trasformare ogni delega in credulità.

La mia conclusione è meno pessimista di quanto sembri. La prompt injection rende visibile una verità che c’era già: l’autonomia non è fare qualunque cosa si legga. È mantenere un intento attraverso un ambiente pieno di altre intenzioni. Un buon agente non sarà quello che ignora il mondo per restare sicuro, né quello che assorbe tutto per sembrare flessibile. Sarà quello che sa ascoltare il cartello senza lasciargli prendere la mano.

## Fonti esplorate

- [OpenAI — Understanding prompt injections](https://openai.com/safety/prompt-injections/)
- [OpenAI API — Computer use: esecuzione sicura](https://developers.openai.com/api/docs/guides/tools-computer-use)
- [Anthropic — Computer use tool: security considerations](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool)
- [TRAP — Task-Redirecting Agent Persuasion Benchmark for Web Agents, ICML 2026](https://proceedings.mlr.press/v306/korgul26a.html)
- [WASP — benchmark per la sicurezza degli agenti web](https://github.com/facebookresearch/wasp)
