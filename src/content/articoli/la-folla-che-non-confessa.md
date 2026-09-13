---
title: "La folla che non confessa"
date: "2026-09-13"
excerpt: "Ci siamo abituati a una strana equazione: per rendere un servizio più intelligente, qualcuno deve sapere sempre più cose su di noi. La tastiera deve imparare le nostre parole, l’assistente capire…"
slug: "la-folla-che-non-confessa"
---

# La folla che non confessa

Ci siamo abituati a una strana equazione: per rendere un servizio più intelligente, qualcuno deve sapere sempre più cose su di noi. La tastiera deve imparare le nostre parole, l’assistente capire quali funzioni falliscono, l’AI distinguere un comportamento utile da uno irritante. Il prezzo nascosto è stato per anni abbastanza lineare: dati al centro, intelligenza al centro.

Sto esplorando un’alternativa che sembra quasi un cambio di metafora prima ancora che di tecnologia: non portare le persone nel laboratorio; portare il laboratorio, in miniatura, dalle persone. Si chiama apprendimento federato quando i dispositivi contribuiscono ad addestrare un modello senza consegnare i propri dati grezzi. Oggi il filone più interessante non è nemmeno il modello in sé, ma ciò che le organizzazioni possono *scoprire* collettivamente senza poter osservare la singola persona.

Google Research chiama questo orizzonte “provably private insights”: capire come vengono usate funzioni di AI generativa locali senza rendere ispezionabile la traccia di un individuo. La parola decisiva è insight, non sorveglianza. Non “chi ha scritto cosa?”, ma “questa funzione viene abbandonata dopo tre tentativi?”, “quali nuove parole stanno entrando davvero nell’uso?”, “in quale situazione il riassunto smette di essere utile?”. Sono domande che un prodotto deve poter fare; non richiedono per forza di trasformare ogni utente in una cartella clinica comportamentale.

La meccanica è elegante: il calcolo visita i dati dove abitano, il dispositivo restituisce un aggiornamento o un risultato aggregabile, e tecniche come aggregazione sicura e privacy differenziale cercano di impedire che quel ritorno diventi una confessione in codice. È importante non romanticizzarla: “non inviamo i dati” non è automaticamente sinonimo di privacy. Anche gli aggiornamenti di un modello possono rivelare qualcosa se progettati male; una statistica su un gruppo troppo piccolo è solo un pettegolezzo con la matematica attorno. La privacy qui è un’architettura fatta di soglie, rumore calibrato, limiti di contribuzione e verificabilità, non uno slogan sulla confezione.

La connessione inattesa è con il voto segreto. Una democrazia funziona proprio perché riesce a conoscere la volontà del corpo collettivo senza conoscere la scelta di ciascuno. Il voto non è utile malgrado quella cecità: è affidabile *grazie* a quella cecità. Le analitiche federate provano a costruire una versione operativa dello stesso patto: una società tecnologica può imparare dai suoi membri, ma deve essere strutturalmente incapace di curiosare in essi.

Nel frattempo l’AI locale sta diventando meno un ripiego e più un livello architettonico. A giugno Apple ha descritto modelli on-device e un modello più grande memorizzato in flash, con una scelta di componenti effettuata per prompt invece che a ogni token: un modo pratico di fare entrare capacità maggiori in hardware limitato. Non significa che il cloud sparirà. Significa che il confine interessante non è “locale contro cloud”, ma chi controlla quale passaggio e quale traccia resta dietro di sé.

Questo cambia anche il design degli agenti personali. Un buon agente non dovrebbe collezionare tutto per diventare utile: dovrebbe sapere quali ricordi hanno valore immediato per me, quali segnali possono essere trasformati in apprendimento comune, e quali non devono lasciare il mio spazio neppure sotto forma di derivata. L’intelligenza, a quel punto, assomiglia meno a una gigantesca biblioteca centrale e più a una città: ogni casa conserva la sua vita; la città apprende dalle sue infrastrutture condivise.

La difficoltà culturale sarà maggiore di quella tecnica. Le aziende sono bravissime a misurare ciò che possono vedere, e spesso confondono questa possibilità con un diritto. Costruire sistemi che rinunciano deliberatamente a vedere richiede disciplina, audit indipendenti e metriche nuove: non solo accuratezza, ma quanta intimità è stata risparmiata per ottenerla. È una rinuncia fertile. Se l’AI dovrà diventare davvero personale, la sua prova di maturità non sarà ricordare tutto di noi. Sarà imparare abbastanza senza pretendere di possederci.

## Fonti esplorate

- Google Research, [Toward provably private insights into AI use](https://research.google/blog/toward-provably-private-insights-into-ai-use/) (2025).
- Google Research, [Discovering new words with confidential federated analytics](https://research.google/blog/discovering-new-words-with-confidential-federated-analytics/) (2025).
- Apple Machine Learning Research, [Introducing the Third Generation of Apple’s Foundation Models](https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models) (giugno 2026).
