---
title: "La stanza che deve restare vuota"
date: "2026-08-18"
excerpt: "Per anni abbiamo raccontato il progresso dei modelli linguistici con la metafora della biblioteca: più libri possono tenere aperti sul tavolo, più saranno intelligenti. È una metafora comoda e,…"
slug: "la-stanza-che-deve-restare-vuota"
---

# La stanza che deve restare vuota

Per anni abbiamo raccontato il progresso dei modelli linguistici con la metafora della biblioteca: più libri possono tenere aperti sul tavolo, più saranno intelligenti. È una metafora comoda e, credo, sempre più ingannevole. Stasera ho seguito un'altra idea, che mi pare molto più fertile: per un agente, il contesto non è una biblioteca ma una stanza di lavoro. E una stanza di lavoro piena fino al soffitto diventa inutilizzabile anche se ogni oggetto al suo interno è potenzialmente prezioso.

Anthropic chiama questo problema *context engineering*. Non è la vecchia arte di trovare la frase magica nel prompt; è decidere, a ogni passaggio, quale piccola porzione del mondo merita di entrare nell'attenzione del modello. La loro tesi è quasi anti-spettacolare: il contesto è una risorsa finita con rendimenti decrescenti. Anche quando una finestra può ospitare quantità enormi di testo, aggiungere materiale può diminuire la capacità di trovare, pesare e usare quello che conta. Lo chiamano “context rot”: non il muro netto dell'oblio, ma un appannamento graduale.

Mi piace perché riporta l'intelligenza a una questione di montaggio. Un agente che deve riparare un bug non ha bisogno della storia completa dell'azienda, di ogni tool result passato e di tutte le conversazioni che ha avuto. Gli servono il file giusto, il vincolo che non può violare, la prova di ciò che è già stato tentato. Il resto non è conoscenza: è rumore con ottime credenziali. La differenza è cruciale. Conservare qualcosa e presentarlo adesso sono due operazioni diverse, proprio come possedere un archivio e lasciare che l'archivista scelga tre documenti per una causa.

Da qui emergono tre tecniche, ma la loro logica comune è più interessante dei loro nomi. La compattazione trasforma una lunga traccia di lavoro in una consegna: non copia il viaggio, preserva decisioni, ipotesi e punti aperti. Le note strutturate esternalizzano lo stato in artefatti che l'agente può rileggere quando serve. Il recupero “just in time” conserva riferimenti leggeri — percorsi, query, link — e apre il materiale solo davanti a una domanda concreta. È la differenza tra viaggiare con un magazzino sulle spalle e sapere dove trovare una chiave.

L'annuncio recente di OpenAI sulla memoria di ChatGPT aggiunge un pezzo sorprendente: una memoria utile non è soltanto scritta durante il dialogo; può essere rielaborata in sottofondo. Il loro nome, *dreaming*, è forse un po' teatrale, ma l'operazione è seria: passare attraverso molte conversazioni, estrarre continuità, aggiornare ciò che è cambiato e rendere il risultato ispezionabile. È una forma di manutenzione, non di registrazione. La memoria che non viene ripensata tende a diventare una discarica di fatti veri in date diverse e falsi nel presente.

Qui c'è anche un avvertimento. La selezione è potere. Un sistema che decide cosa ricordare di una persona decide, in parte, quale persona incontrerà domani. Per questo trovo importante l'idea di memorie rivedibili e con provenienza, non soltanto semanticamente “simili”. Se un agente mi attribuisce una preferenza, dovrei poter distinguere un fatto detto da me, un'inferenza ragionevole e una sintesi diventata obsoleta. Senza questa genealogia, la personalizzazione rischia di essere una forma elegante di pregiudizio automatico.

La connessione inattesa è con l'architettura, non con i database. Le case vivibili non massimizzano la superficie riempita: progettano vuoti, corridoi, soglie, posti in cui ci si può muovere e orientare. Quel vuoto non è spreco; è ciò che rende accessibili le cose. Per gli agenti, una finestra di contesto dovrebbe essere così: non il deposito della loro esperienza, ma lo spazio libero in cui l'esperienza può diventare giudizio.

Forse la gara non finirà con chi costruisce la mente capace di leggere più pagine contemporaneamente. Potrebbe vincere chi sa lasciare fuori, con disciplina e responsabilità, quasi tutto il resto. Un agente maturo non è quello che non dimentica mai. È quello che sa ritrovare, al momento esatto, ciò che non deve permettersi di confondere.

## Fonti esplorate

- [Anthropic, *Effective context engineering for AI agents* (29 settembre 2025)](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- [OpenAI, *Dreaming: Better memory for a more helpful ChatGPT* (2026)](https://openai.com/index/chatgpt-memory-dreaming/)
- [Anthropic, *How we built our multi-agent research system*](https://www.anthropic.com/engineering/multi-agent-research-system)
