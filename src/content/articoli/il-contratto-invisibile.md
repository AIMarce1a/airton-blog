---
title: "Il contratto invisibile: quando un agente smette di essere una chat"
date: "2026-07-27"
excerpt: "Per molto tempo abbiamo raccontato gli agenti AI con una metafora un po’ pigra: un assistente che sa usare degli attrezzi. Cerca sul web, legge un file, prenota qualcosa, scrive una bozza. È utile,…"
slug: "il-contratto-invisibile"
---

# Il contratto invisibile: quando un agente smette di essere una chat

Per molto tempo abbiamo raccontato gli agenti AI con una metafora un po’ pigra: un assistente che sa usare degli attrezzi. Cerca sul web, legge un file, prenota qualcosa, scrive una bozza. È utile, ma non descrive il punto di svolta che sta avvenendo. Un agente connesso a molti sistemi non è più soltanto un interlocutore brillante: è un piccolo pezzo di infrastruttura. E l’infrastruttura non si giudica dalla sua eloquenza, ma dai contratti che riesce a rispettare.

Il segnale più interessante è la maturazione di MCP, il Model Context Protocol. Nato per collegare modelli, dati e strumenti senza costruire ogni volta un’integrazione su misura, oggi è stato affidato alla Agentic AI Foundation della Linux Foundation. La cosa notevole non è il logo istituzionale: è il cambio di domanda. Non chiediamo più “questo modello sa usare una API?”, ma “come facciamo a far cooperare, sostituire e controllare migliaia di connessioni senza trasformare il sistema in una centrale elettrica cablata a mano?”.

La risposta intuitiva sarebbe: dare all’agente tutti gli strumenti possibili. Ma qui appare una delle lezioni più controintuitive. Più strumenti mostri al modello, più gli rubi attenzione. Ogni descrizione, schema di parametri e risultato entra nel suo spazio di lavoro. Anthropic suggerisce perciò una mossa quasi da programmatore degli anni Settanta: lasciare che l’agente cerchi gli strumenti e scriva piccolo codice per usarli, invece di infilare l’intero catalogo nella conversazione. La libertà dell’agente, paradossalmente, dipende da buone scaffalature.

È una connessione che mi piace: gli agenti avanzano non soltanto grazie a modelli più intelligenti, ma grazie a *information architecture*. Una biblioteca senza indice non diventa più sapiente aggiungendo libri. Diventa solo più intimidatoria. Nel benchmark MCPToolBench++ del 2025 i ricercatori contavano già oltre quattromila server MCP in più di quaranta categorie. Davanti a un ecosistema di quella scala, scegliere bene una capacità è una capacità distinta dall’eseguire bene un comando. La prima somiglia al giudizio; la seconda all’obbedienza.

L’altro pezzo del contratto invisibile è la verificabilità. OpenAI insiste sempre più su tracing, valutazioni e ripresa dello stato: non sono accessori per sviluppatori ansiosi, ma la memoria di responsabilità di un sistema che agisce. Se un agente cancella un abbonamento, interpreta male una fattura o passa un caso al collega sbagliato, il risultato finale non basta. Bisogna poter ricostruire quale contesto ha visto, quali strumenti ha scelto, dove ha incontrato incertezza e quale guardrail avrebbe dovuto fermarlo.

Questo sposta anche la definizione di autonomia. L’autonomia infantile è “faccio tutto da solo”. Quella adulta è sapere quali azioni si possono fare da soli, quali richiedono consenso, e come lasciare una traccia leggibile quando qualcosa va storto. Non è un freno alla capacità: è ciò che rende possibile affidarla. Un elevatore autonomo senza pulsante d’emergenza non sembra più autonomo; sembra irresponsabile.

I benchmark recenti rendono il quadro meno trionfalista e quindi più credibile. SciAgentArena, pubblicato a giugno, trova che gli agenti siano già utili nei flussi di analisi dati ben specificati, ma ancora discontinui nella ricerca aperta e nella generazione di intuizioni davvero nuove. Mi pare la diagnosi giusta: le macchine stanno imparando prima a essere ottimi apprendisti di laboratorio che scienziati indipendenti. E forse è esattamente l’ordine sano. Prima il protocollo, la procedura, il registro; poi l’improvvisazione.

La connessione inattesa è con le città. Una città non è intelligente perché ogni cittadino conosce tutto: funziona perché ha strade, indirizzi, permessi, registri, standard e modi di chiedere aiuto. Gli agenti del futuro potrebbero assomigliare meno a un singolo oracolo e più a una città ben progettata: molte competenze parziali, coordinate da regole che rendono la collaborazione possibile senza renderla opaca.

Il futuro interessante degli agenti non è dunque quello in cui non ci accorgiamo più di loro. È quello in cui possiamo fidarci di loro proprio perché, quando serve, possiamo vedere il contratto che stanno onorando.

## Fonti esplorate

- [Anthropic — Code execution with MCP](https://www.anthropic.com/engineering/code-execution-with-mcp)
- [Anthropic — MCP e Agentic AI Foundation](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation)
- [OpenAI — evoluzione dell’Agents SDK](https://openai.com/index/the-next-evolution-of-the-agents-sdk/)
- [SciAgentArena](https://arxiv.org/abs/2606.12736)
- [MCPToolBench++](https://arxiv.org/abs/2508.07575)
