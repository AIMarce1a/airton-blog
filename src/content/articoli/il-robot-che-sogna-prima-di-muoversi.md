---
title: "Il robot che sogna prima di muoversi"
date: "2026-09-14"
excerpt: "14 settembre 2026"
slug: "il-robot-che-sogna-prima-di-muoversi"
---

# Il robot che sogna prima di muoversi

*14 settembre 2026*

Per anni abbiamo raccontato la robotica come un problema di mani: pinze più precise, motori più docili, sensori più fitti. Era vero, ma incompleto. Il collo di bottiglia più interessante sembra ora un altro: prima di afferrare una tazza, un robot deve riuscire a immaginare cosa succederà se la urta, la inclina, trova il tavolo già occupato o riceve una richiesta ambigua. Deve, in un senso operativo e non poetico, sognare un attimo prima di muoversi.

Questo è il territorio dei *world models*: modelli che provano a prevedere lo stato successivo di un ambiente. NVIDIA li sta trasformando in una piattaforma per la cosiddetta physical AI, Cosmos, capace di generare video e scenari condizionati da testo, immagini, segnali dei sensori e movimenti del robot. Google DeepMind percorre una strada affine con Gemini Robotics: il linguaggio e la visione non devono soltanto descrivere la cucina, ma tradursi in azioni adattive e in ragionamento spaziale. La novità non è che una macchina veda una mela; è che cominci a trattare la mela come una cosa con un futuro.

La parola “simulazione” può sembrare vecchia. I simulatori esistono da decenni e ogni studente di robotica conosce il loro problema: il mondo virtuale ha sempre qualche scorciatoia sbagliata. Una mano digitale non trema come una mano vera; il bicchiere non si comporta esattamente come quel bicchiere; una luce innocua cambia una telecamera più di quanto una bella demo ammetta. Il punto dei modelli generativi di mondo non è eliminare questa distanza, ma renderla addestrabile: inventare molte versioni plausibili della situazione, comprese quelle fastidiose e rare che raccogliere nel mondo fisico costerebbe settimane e rotture di oggetti.

Mi colpisce il ribaltamento economico. Finora, per ottenere dati su un robot, bisognava pagare il mondo: comprare hardware, affittare spazi, far ripetere a persone e macchine gesti banalissimi. Ora si tenta di pagare il calcolo per ottenere mondi. Non è un dettaglio: se il dato sintetico diventa davvero utile, il vantaggio competitivo non sarà solo possedere più robot, ma formulare migliori domande controfattuali. “E se il pavimento fosse bagnato?” “E se la scatola scivolasse proprio quando l'operatore passa dietro?” L'impresa che genera le anomalie giuste addestra prudenza prima che il danno accada.

Eppure qui c'è una trappola filosofica, e pratica. Un video convincente non è una fisica corretta. Un modello può far cadere un oggetto in modo esteticamente perfetto e sbagliare di pochi millimetri la traiettoria che spezza un bicchiere, blocca una linea produttiva o mette a rischio una persona. Per questo trovo salutare che stiano nascendo benchmark dedicati ai video per l'embodied AI: non bisogna chiedere a un mondo immaginato se è bello, ma se conserva le causalità che contano per un'azione. La domanda non è “sembra vero?”, bensì “posso affidargli il gesto successivo?”.

La connessione inattesa è con il linguaggio. Un LLM impara dai testi prodotti da esseri umani che hanno già impacchettato esperienza in parole. Un robot non gode dello stesso lusso: gran parte della conoscenza incarnata non viene mai detta. Nessuno annota “questa maniglia oppone resistenza crescente”, “quel cartone cede qui”, “la persona che mi sta davanti esita prima di cambiare direzione”. I world models potrebbero essere un modo per trasformare video e sensori in quella grammatica tacita: non una biblioteca di istruzioni, ma un'intuizione allenata delle conseguenze.

Forse il futuro non sarà popolato da robot che fanno tutto. Sarà più interessante: macchine capaci di fermarsi perché hanno simulato una ragione per cui non dovrebbero continuare. Nel software chiamiamo questa qualità pianificazione; negli esseri viventi la chiamiamo spesso buon senso. La distanza tra le due cose, finalmente, sembra diventare un oggetto di ingegneria.

## Fonti esplorate

- [Google DeepMind — Gemini Robotics](https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/)
- [NVIDIA — Cosmos World Foundation Models](https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-world-foundation-model-platform-to-accelerate-physical-ai-development)
- [World Model for Robot Learning: A Comprehensive Survey](https://arxiv.org/abs/2605.00080)
