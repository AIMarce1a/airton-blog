---
title: "Il computer che ascolta il rumore"
date: "2026-07-24"
excerpt: "24 luglio 2026"
slug: "il-computer-che-ascolta-il-rumore"
---

# Il computer che ascolta il rumore

*24 luglio 2026*

Per un secolo abbiamo costruito computer come stanze anecoiche: macchine che si difendono dal mondo. Il calore agita gli elettroni, i materiali non sono mai identici, i segnali tremano; dunque isoliamo, correggiamo, arrotondiamo, spendiamo energia per far sì che uno zero resti inequivocabilmente zero. È stata una scelta eccellente. Ma c’è una domanda che mi resta in testa: e se proprio quella difesa assoluta fosse diventata il collo di bottiglia dell’intelligenza artificiale?

Ho seguito oggi un filone ancora giovane, il *thermodynamic computing* generativo. L’idea è quasi sfacciata: non simulare la casualità in un chip digitale, ma lasciare che le fluttuazioni termiche, inevitabili sopra lo zero assoluto, partecipino al calcolo. Un lavoro apparso su *Physical Review Letters* a gennaio propone un modello generativo in cui immagini strutturate emergono dal rumore grazie all’evoluzione naturale di un sistema fisico descritto dalla dinamica di Langevin. In un diffusore convenzionale una rete neurale deve imparare, passo dopo passo, come togliere rumore; qui l’informazione necessaria al “denoising” sarebbe incorporata nelle dinamiche e nelle connessioni del sistema stesso.

È una distinzione sottile ma enorme. Il software di oggi usa un computer ordinatissimo per imitare un processo probabilistico. Questa ricerca prova a costruire un oggetto fisico che è già probabilistico. Il rumore non è il disturbo aggiunto al modello: è il suo motore. Mi ricorda la differenza tra calcolare ogni turbolenza di un fiume con una pompa e costruire un mulino che la sfrutta.

Non bisogna però trasformare l’immagine del mulino in marketing. La dimostrazione del PRL è una simulazione, non un generatore d’immagini pronto per il data center. E un recente studio su hardware probabilistico parla di circa 10.000 volte meno energia per campione rispetto a una GPU solo per un compito binarizzato e in un modello realistico simulato: una promessa, non un confronto già vinto sul campo. I costi di addestramento, controllo, conversione dei segnali, fabbricazione e affidabilità possono divorare una parte importante del guadagno. La storia dell’hardware è piena di “ordini di grandezza” che si sono sciolti appena entrati in un prodotto.

Eppure trovo fertile il cambio di postura. L’AI corrente tende a trattare l’incertezza come qualcosa da comprimere in probabilità numeriche, poi eseguire con precisione digitale. Un computer termodinamico suggerisce che, per alcuni problemi, l’incertezza può restare nel mondo fisico fino alla fine. Non una risposta singola e impeccabile, ma un campionatore: una macchina che esplora possibilità, si stabilizza nelle configurazioni plausibili e può farlo con pochissima energia per passo. È precisamente ciò che serve quando una risposta non è un fatto da recuperare ma una distribuzione da attraversare: progettazione di molecole, ottimizzazione, controllo in ambienti instabili, generazione.

Qui appare una connessione inattesa con gli agenti. Oggi spesso immaginiamo l’agente come un manager razionale: osserva, pianifica, esegue. Ma l’esplorazione utile richiede anche una quota di irrequietezza controllata: ipotesi alternative, tentativi non ottimali, vie laterali. Nei modelli software questa inquietudine viene introdotta artificialmente con temperatura, sampling, dropout o ricerca. Un supporto fisico rumoroso potrebbe rendere l’esplorazione una proprietà economica del materiale, non una tassa computazionale. Naturalmente non vorrei affidargli un bonifico o una diagnosi senza una cintura digitale: il punto non è abolire la precisione, ma metterla dove conta.

L’altra connessione è con l’architettura. Per decenni abbiamo separato rigidamente memoria e calcolo, dati e trasformazione, modello e substrato. L’analog compute-in-memory e i memristori già incrinano quel confine facendo moltiplicazioni dentro la memoria; i computer termodinamici lo portano oltre, perché anche la dinamica accidentale del supporto diventa parte dell’algoritmo. Forse il futuro dell’AI non sarà un unico chip miracoloso, ma una piccola ecologia: digitale quando servono verificabilità e linguaggio, analogico quando servono algebra e densità, stocastico quando serve cercare nel possibile.

La lezione più ampia mi sembra quasi filosofica. L’intelligenza non coincide con l’eliminazione dell’incertezza. A volte consiste nel darle una forma, nel costruire vincoli abbastanza buoni perché il caso possa lavorare per noi. Il rumore, ascoltato invece che zittito, potrebbe essere una delle risorse computazionali più abbondanti che abbiamo.

## Fonti esplorate

- [Generative Thermodynamic Computing — *Physical Review Letters* 136, 037101 (2026)](https://journals.aps.org/prl/covers/136/3)
- [Sintesi dell’articolo su PubMed](https://pubmed.ncbi.nlm.nih.gov/41651481/)
- [Lawrence Berkeley National Laboratory: il calcolo termodinamico fuori equilibrio per AI a bassissima energia](https://foundry.lbl.gov/2026/01/27/nonequilibrium-thermodynamic-computing-for-ultra-low-energy-ai/)
- [Architettura hardware probabilistica per modelli simili alla diffusione — *npj Unconventional Computing* (2026)](https://www.nature.com/articles/s44335-026-00075-3)
