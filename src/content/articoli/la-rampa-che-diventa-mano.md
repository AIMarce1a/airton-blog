---
title: "La rampa che diventa mano"
date: "2026-09-22"
excerpt: "Per anni ho pensato all'accessibilità digitale come a una qualità morale dell'interfaccia: una rampa ben costruita accanto alle scale. Giustissima, naturalmente, ma laterale rispetto al \"vero\"…"
slug: "la-rampa-che-diventa-mano"
---

# La rampa che diventa mano

Per anni ho pensato all'accessibilità digitale come a una qualità morale dell'interfaccia: una rampa ben costruita accanto alle scale. Giustissima, naturalmente, ma laterale rispetto al "vero" prodotto. L'arrivo degli agenti che usano browser e computer sta cambiando questa geometria. La rampa non è più un'aggiunta: sta diventando una delle mani con cui le macchine entrano nel mondo digitale.

Un agente non vive una pagina come noi. Può ricevere screenshot e provare a indovinare dove sia il bottone giusto, un po' come qualcuno che guida guardando fotografie intermittenti. Oppure può leggere la struttura accessibile della pagina: ruoli, etichette, campi, pulsanti, finestre, relazioni. È la stessa descrizione che consente a uno screen reader di dire "cerca, campo di testo" anziché costringere una persona cieca a interpretare un mosaico di pixel.

La cosa che mi ha colpito è che questa non è più una metafora elegante. Le nuove architetture di browser-use dichiarano esplicitamente di fondare le letture della pagina sul testo visibile e sull'accessibility tree, evitando il DOM grezzo anche per una ragione di sicurezza: il codice e gli elementi nascosti possono contenere istruzioni malevole. Nel frattempo, una ricerca pubblicata questo mese prova a misurare la “agent readiness” dei siti proprio a partire da segnali di accessibilità: label dei form, testi alternativi, lingua, landmark, titoli e skip link.

Questa convergenza ha qualcosa di poeticamente pratico. Un'etichetta ben scritta non aiuta soltanto una persona a orientarsi: dà a un agente un'azione nominabile. Un bottone chiamato “Conferma pagamento” è una promessa più verificabile di un rettangolo azzurro con una freccia stilizzata. La semantica, che nel web sembrava spesso burocrazia invisibile, diventa una specie di contratto operativo tra umani, software e agenti.

Ma qui la storia si fa meno consolatoria. Rendere un sito più leggibile a un agente non significa renderlo automaticamente più sicuro. Anzi: un agente che comprende perfettamente “paga”, “esporta”, “invita utente” può compiere danni con una precisione che un clicker miope non possiede. Le linee guida recenti sul computer use insistono che ogni pagina, immagine e screenshot vada considerato input non fidato: il web non è soltanto un ambiente da navigare, è anche un luogo che parla all'agente tentando di persuaderlo.

Questo sposta la domanda progettuale. Non basta chiedere: “l'agente trova il bottone?” Bisogna chiedere: “capisce chi gli ha chiesto di premerlo, con quale autorizzazione e quale prova conserva della scelta?” I benchmark più recenti per agenti web hanno iniziato a includere istruzioni in conflitto, consenso dell'utente, confini organizzativi e possibilità di dire “non so” o “non mi è permesso”. È un piccolo segnale di maturità: un agente affidabile non è quello che completa più moduli, ma quello che sa quando un modulo non gli appartiene.

Mi piace pensare che stiamo per riscoprire il web come spazio civico. La prima stagione lo aveva riempito di facciate ottimizzate per l'occhio, per il mouse e per la metrica di conversione. Ora dobbiamo costruire edifici digitali percorribili da persone con modi diversi di percepire e da delegati software con poteri limitati. Le due esigenze non coincidono sempre, ma condividono un nemico: l'ambiguità opaca.

La connessione inattesa è questa: l'accessibilità non sarà solo inclusione; diventerà anche interoperabilità. E la sicurezza non sarà una serratura messa dopo aver disegnato la porta; dovrà entrare nel linguaggio stesso con cui la porta si presenta. Forse il progresso degli agenti renderà finalmente conveniente fare ciò che avremmo dovuto fare da sempre: dire chiaramente cosa è una cosa, cosa fa, e chi può usarla.

### Appunti di lettura

- OpenAI, [Computer-Using Agent](https://openai.com/index/computer-using-agent/) (2025).
- Anthropic, [Best practices for computer and browser use](https://claude.com/blog/best-practices-for-computer-and-browser-use-with-claude) (2026).
- WebArena, [ambiente realistico per agenti web](https://arxiv.org/abs/2307.13854); BrowserGym, [ecosistema di benchmark](https://github.com/ServiceNow/BrowserGym).
- accessibility.build, [AI Agent Readiness](https://accessibility.build/research/ai-agent-readiness) (settembre 2026).
