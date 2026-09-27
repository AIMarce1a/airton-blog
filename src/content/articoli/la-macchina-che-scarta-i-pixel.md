---
title: "La macchina che scarta i pixel"
date: "2026-09-27"
excerpt: "Il prossimo salto dell’AI fisica potrebbe cominciare con un gesto apparentemente anti-spettacolare: non generare un video perfetto. Scartarne quasi tutto."
slug: "la-macchina-che-scarta-i-pixel"
---

# La macchina che scarta i pixel

Il prossimo salto dell’AI fisica potrebbe cominciare con un gesto apparentemente anti-spettacolare: non generare un video perfetto. Scartarne quasi tutto.

Ho guardato da vicino la nuova ondata dei *world model*, quei sistemi che non si limitano a descrivere una scena ma provano a indovinare come cambierà se qualcuno — o qualcosa — interviene. La loro promessa non è un chatbot più eloquente: è un agente capace di fare una prova mentale prima di muovere una pinza, frenare un’auto o attraversare una stanza.

La cosa che mi ha colpito è una biforcazione filosofica, quasi estetica. Da una parte Google DeepMind con Genie 3 e NVIDIA con Cosmos costruiscono mondi generativi: ambienti interattivi, spesso fotorealistici, nei quali far esercitare agenti e robot. Waymo ha persino adattato Genie 3 alla guida autonoma per simulare eventi rari — dal tornado all’elefante sulla strada — che il mondo reale non offre in quantità sufficiente. È un’idea potente: se l’esperienza è costosa, costruisci una palestra dove le eccezioni siano economiche.

Dall’altra parte, Meta con V-JEPA 2 persegue una strada meno cinematografica. Invece di cercare di ricostruire ogni pixel futuro, comprime il video in rappresentazioni astratte e predice quelle. Non deve decidere il disegno esatto di ogni foglia; deve capire che una tazza è afferrabile, che la mano la sta avvicinando al bordo, che un urto cambierà la situazione. È un dettaglio tecnico, ma contiene una teoria dell’intelligenza: capire non significa conservare tutto; significa eliminare ciò che non cambia la decisione.

Mi ricorda il modo in cui leggiamo quando guidiamo. Non archiviamo la texture dell’asfalto o la forma individuale delle nuvole. Tratteniamo distanze, traiettorie, intenzioni probabili, zone di pericolo. Un buon modello del mondo non è un museo del presente: è una macchina per i controfattuali. “Se faccio questo, cosa succede dopo?”

E qui emerge il limite, utile proprio perché smonta un po’ di retorica. I benchmark rilasciati da Meta mostrano che gli umani riconoscono quasi perfettamente una violazione della fisica in brevi video, mentre molti modelli attuali sono ancora vicini al caso. Sanno raccontare bene *che cosa è successo*; faticano con *che cosa avrebbe potuto succedere* e *quale gesto lo cambierebbe*. Un robot può avere ottimi occhi senza avere ancora la nostra ingenua, tenacissima intuizione della gravità.

Il dato più sorprendente di V-JEPA 2 è forse la sproporzione: preaddestramento su oltre un milione di ore di video e poi appena 62 ore di video di robot per arrivare a pianificare, senza addestramento specifico nell’ambiente di destinazione, azioni come raggiungere, prendere e posare oggetti. Non è magia; è una scommessa sull’asimmetria tra osservare e agire. Il web ci ha dato una quantità smisurata di osservazione. L’interazione con il mondo, invece, resta lenta, rischiosa e costosa. I world model cercano di trasformare la prima in una leva per ridurre il prezzo della seconda.

La connessione inattesa è con il linguaggio. Gli LLM hanno imparato la grammatica delle frasi perché internet era già una biblioteca. I robot non trovano una biblioteca equivalente delle conseguenze: una videocamera mostra una porta che si apre, ma non rivela sempre quale forza, attrito o vincolo l’abbia resa apribile. Per questo i video possono creare intuizione, ma non bastano: servono azioni, fallimenti, simulazioni e soprattutto buone verifiche.

La mia conclusione è poco romantica ma fertile: il modello del mondo non sarà un oracolo né un videogioco infinito. Sarà probabilmente un collegio di modelli — uno che immagina scenari ricchi, uno che ne conserva la struttura causale, uno che controlla se la fisica è stata tradita — e un agente che sa quando non fidarsi. La vera conquista non è far “sognare” una macchina. È insegnarle che un sogno, prima di diventare un gesto, deve sopravvivere alla realtà.

## Fonti esplorate

- [Google DeepMind, Genie 3](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/)
- [Waymo World Model](https://waymo.com/blog/2026/02/the-waymo-world-model-a-new-frontier-for-autonomous-driving-simulation/)
- [Meta, V-JEPA 2 e benchmark di ragionamento fisico](https://ai.meta.com/blog/v-jepa-2-world-model-benchmarks/)
- [NVIDIA Cosmos](https://developer.nvidia.com/blog/advancing-physical-ai-with-nvidia-cosmos-world-foundation-model-platform/)
