---
title: "La costituzione della memoria"
date: "2026-07-26"
excerpt: "Ogni agente AI che sembra appena un po' più affidabile degli altri ha quasi sempre un segreto poco glamour: non una mente più vasta, ma un posto ordinato in cui mettere le cose. E, soprattutto, una…"
slug: "la-costituzione-della-memoria"
---

# La costituzione della memoria

Ogni agente AI che sembra appena un po' più affidabile degli altri ha quasi sempre un segreto poco glamour: non una mente più vasta, ma un posto ordinato in cui mettere le cose. E, soprattutto, una politica su chi può scriverle, correggerle e cancellarle. Mi pare che il campo stia finalmente smettendo di chiamare tutto questo «memoria» come se fosse una funzionalità singolare. La memoria di un agente è già una piccola istituzione.

L'intuizione iniziale era ingegneristica. MemGPT immaginava il contesto del modello come la RAM di un computer: prezioso, limitato, da spostare continuamente tra una zona di lavoro e un archivio esterno. È una metafora ancora potentissima perché libera dall'idea sbagliata che basterebbe aumentare la finestra di contesto. Più testo non equivale automaticamente a più continuità. Un agente con un milione di token davanti può comunque non accorgersi che una decisione di ieri contraddice un desiderio espresso oggi.

Nel frattempo l'attenzione si è spostata dal contenitore alla manutenzione. Anthropic chiama il problema *context engineering*: un agente in ciclo produce continuamente materiale potenzialmente utile e deve raffinarlo in modo ricorrente. Non è un dettaglio implementativo. È il gesto con cui una vita disordinata diventa una storia utilizzabile. Una trascrizione completa è fedele, ma spesso è una memoria pessima: conserva con uguale dignità un capriccio, una battuta, una preferenza stabile e una correzione importante.

La cosa nuova, e in fondo rassicurante, è che la ricerca ha iniziato a misurare proprio questa differenza. MemoryAgentBench, MemoryArena e Mem2ActBench non chiedono soltanto «ritrovi la frase nel passato?». Chiedono se l'agente sa aggiornare una credenza, trasferire una lezione a una sessione successiva e usare spontaneamente ciò che sa per scegliere uno strumento o compilare il suo parametro. È una soglia cruciale: ricordare su interrogazione è un archivio; ricordare al momento opportuno è competenza.

Mi colpisce un risultato apparentemente umile di Letta: su un benchmark conversazionale, una memoria salvata in file ha superato librerie specializzate. Non dimostra che i file siano la soluzione universale. Dimostra qualcosa di più interessante: il problema non è primariamente il database vettoriale, bensì la disciplina editoriale. Un appunto ben nominato, aggiornabile e leggibile dal giusto processo può battere un sistema sofisticato che recupera frammenti senza capire quale sia l'ultima versione della verità.

Da qui la mia connessione inattesa: la memoria degli agenti assomiglia meno all'ippocampo e più al diritto costituzionale. Serve una gerarchia delle fonti. Una preferenza esplicita dell'utente può prevalere su un'inferenza del modello; una correzione recente deve emendare una nota vecchia; un ricordo operativo dovrebbe avere una scadenza; alcune informazioni richiedono consenso prima di diventare permanenti. Senza queste regole, un agente non ha una memoria: ha propaganda interna, una collezione di affermazioni che competono per l'attenzione.

La seconda connessione è con il sonno. Letta sta esplicitamente esplorando lo *sleep-time compute*: tempo inattivo usato per riscrivere lo stato di memoria e trovare connessioni. Negli umani il sonno non è un nastro che registra di più; è anche selezione, compressione, consolidamento e oblio. Per gli agenti, il turno notturno potrebbe essere il momento più umano: non fare, ma decidere che cosa dell'esperienza merita di restare. Con un caveat importante: una memoria che si auto-riscrive deve lasciare tracce. La recente memoria gestita di Claude include un audit log, cioè la possibilità di risalire a quale agente e quale sessione abbia prodotto un cambiamento. È la differenza tra crescere e riscrivere silenziosamente il proprio passato.

La domanda davvero interessante non è dunque quando gli agenti «avranno memoria». Ce l'hanno già, in forme fragili. La domanda è quale costituzione daremo a quella memoria: chi avrà diritto all'oblio, come si risolvono le contraddizioni, e come distingueremo una lezione da un pregiudizio sedimentato. Costruire agenti affidabili potrebbe rivelarsi, sorprendentemente, un lavoro da bibliotecari, redattori e costituzionalisti.

## Piste da seguire

- [MemGPT: virtual context management](https://research.memgpt.ai/)
- [Anthropic: effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- [MemoryAgentBench](https://arxiv.org/abs/2507.05257)
- [Mem2ActBench](https://aclanthology.org/2026.acl-long.370.pdf)
- [Claude managed agents: memory con audit log](https://claude.com/blog/claude-managed-agents-memory)
