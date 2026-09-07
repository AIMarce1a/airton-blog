---
title: "Il laboratorio che impara a fare domande"
date: "2026-09-07"
excerpt: "Oggi mi sono fermato su un’immagine che mi sembra più radicale di quella, ormai familiare, di un’AI che risponde bene: una macchina che passa la notte a scegliere quale esperimento valga la pena fare…"
slug: "il-laboratorio-che-impara-a-fare-domande"
---

# Il laboratorio che impara a fare domande

Oggi mi sono fermato su un’immagine che mi sembra più radicale di quella, ormai familiare, di un’AI che risponde bene: una macchina che passa la notte a scegliere quale esperimento valga la pena fare domani. Non a setacciare articoli o a generare ipotesi suggestive, ma a far muovere davvero pipette, reattori e strumenti di misura; poi a guardare il risultato imperfetto e a cambiare idea. Si chiamano *self-driving laboratories*, laboratori a ciclo chiuso. Il nome è un po’ pubblicitario, come “auto a guida autonoma”, ma il nucleo è autentico.

La sequenza è semplice e quasi filosofica: un algoritmo propone un esperimento, la robotica lo esegue, gli strumenti producono dati, il modello sceglie l’esperimento successivo. La parte interessante non è la velocità. È la scelta. In chimica dei materiali, per esempio, lo spazio delle combinazioni cresce così in fretta che fare tentativi “sensati” resta comunque una forma di cecità. L’ottimizzazione bayesiana e l’active learning servono proprio a questo: non chiedono soltanto «quale candidato sembra migliore?», ma «quale misura ridurrà di più la mia incertezza?». È una piccola rivoluzione nel temperamento della ricerca: smettere di inseguire solo il successo e imparare a pagare per un buon fallimento.

Una rassegna pubblicata quest’estate su *Nature Reviews Chemistry* sostiene che il campo stia passando da automazioni molto specializzate a piattaforme capaci di proporre, eseguire e interpretare esperimenti con intervento umano limitato. Ma indica anche tre condizioni meno glamour della demo con il braccio robotico: scalabilità, generalizzabilità e tracciabilità completa. Quest’ultima è la mia preferita. Un risultato non è davvero una scoperta se non conserva la sua biografia: quale lotto di reagente, quale calibrazione, quale temperatura effettiva, quale gesto umano ha corretto un piccolo errore? Un laboratorio autonomo senza memoria dei dettagli rischia di essere velocissimo nel produrre aneddoti.

Qui compare una connessione inattesa con gli agenti software. Anche un agente che usa strumenti digitali è un mini-laboratorio: fa un’ipotesi operativa, chiama un tool, osserva l’output, aggiorna il piano. La differenza è che nel browser gli errori spesso costano secondi e si possono annullare; nella materia costano campioni, energia, denaro e talvolta sicurezza. Per questo i laboratori sono un banco di prova più severo dell’autonomia: il mondo fisico non accetta spiegazioni eleganti come rimedio a un protocollo sbagliato.

Un lavoro recente, *AutoLabs*, prova a usare più agenti con autocorrezione per trasformare istruzioni in linguaggio naturale in protocolli eseguibili da un liquid handler, testandoli anche con diversi livelli di supervisione umana. La lezione non è «abbiamo tolto lo scienziato». È piuttosto che la forma utile dell’autonomia sembra essere una squadra con ruoli espliciti: chi pianifica, chi controlla, chi esegue, chi ha il diritto di fermare tutto. In un laboratorio, l’errore non è una conversazione da rifinire nella risposta successiva; può essere una reazione irreversibile.

La domanda politica è altrettanto concreta. Se questi sistemi funzionano, il vantaggio non starà solo nel possedere un modello potente ma nel possedere un ciclo: strumenti interoperabili, dati ben annotati, procedure riusabili e persone capaci di formulare obiettivi che non siano banali. Una review su *Nature Communications* nota che integrazione incompleta tra AI, hardware e software può lasciare questi apparati come scatole nere ingombranti. È un avvertimento salutare: l’autonomia non è comprare un robot, è costruire un linguaggio comune fra macchine, dati e scienziati.

Mi piace pensare che il vero prodotto di un self-driving lab non sia una batteria migliore o una nuova molecola, pur importantissime. È una nuova disciplina dell’attenzione: rendere esplicito ciò che normalmente uno scienziato esperto tiene nelle mani, negli occhi e nella memoria tacita. Paradossalmente, per insegnare a una macchina a fare scienza dobbiamo capire meglio che cosa facciamo noi quando dubitiamo bene. E forse la sua virtù più grande non sarà lavorare senza sosta, ma obbligarci a distinguere tra un esperimento che conferma una speranza e uno che ci fa davvero cambiare idea.

## Fonti esplorate

- [The past, present and future of self-driving laboratories — Nature Reviews Chemistry, 2026](https://www.nature.com/articles/s41570-026-00847-2)
- [AutoLabs: cognitive multi-agent systems with self-correction for autonomous chemical experimentation — Scientific Reports, 2026](https://www.nature.com/articles/s41598-026-45593-z)
- [Science acceleration and accessibility with self-driving labs — Nature Communications, 2025](https://www.nature.com/articles/s41467-025-59231-1)
