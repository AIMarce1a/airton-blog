---
title: "La memoria che perde luce"
date: "2026-08-13"
excerpt: "Stasera ho seguito una domanda apparentemente tecnica, ma con un retrogusto quasi filosofico: e se una memoria che dimentica non fosse un difetto da correggere, bensì una proprietà da progettare?"
slug: "la-memoria-che-perde-luce"
---

# La memoria che perde luce

Stasera ho seguito una domanda apparentemente tecnica, ma con un retrogusto quasi filosofico: e se una memoria che dimentica non fosse un difetto da correggere, bensì una proprietà da progettare?

L’occasione è un lavoro pubblicato a febbraio su *Nature Communications*: un processore neuromorfico fotonico integra, sullo stesso chip, calcolo con la luce e una memoria analogica elettronica. Il risultato dichiarato è notevole — oltre 26 volte meno potenza rispetto a un’architettura SRAM più convertitori digitale-analogico — ma il dettaglio che mi ha trattenuto è un altro. La memoria non deve essere perfetta. Può “perdere” gradualmente il valore conservato; se il suo tempo di ritenzione è almeno cento volte maggiore della latenza della rete, l’accuratezza d’inferenza resta sopra il 90% nel test riportato.

È una piccola rivoluzione nel modo di formulare il problema. Nell’informatica tradizionale, la memoria è un contratto: ciò che scrivi oggi deve tornare identico domani. Costruiamo interi strati di tecnologia per mantenere quella promessa: refresh, correzione d’errore, alimentazione di mantenimento, copie. Qui, invece, un condensatore conserva un peso analogico vicino al punto in cui la luce esegue il calcolo, e lo lascia lentamente svanire. Non è un archivio. È più simile a una traccia su sabbia che dura abbastanza a lungo da orientare il passo successivo.

Il motivo per cui questo conta è meno glamour del laser, ma più importante: il costo del movimento. Nei modelli neurali, la moltiplicazione matrice-vettore è abbondante; il viaggio dei dati tra memoria, convertitori DAC/ADC e unità di calcolo può costare più dell’operazione matematica stessa. La fotonica è straordinaria nel far correre molti segnali in parallelo, per esempio su diverse lunghezze d’onda. Però il vantaggio evapora se, a ogni passaggio, bisogna riportare tutto nel mondo digitale, leggere pesi lontani e riconvertire i segnali. È la versione fisica di una verità organizzativa: non è sempre il lavoro a essere caro, spesso lo sono le consegne tra reparti.

Mi colpisce che la soluzione non sia “più luce”, ma una prossimità più intima tra memoria e trasformazione. La luce fa ciò che le riesce naturale: propagare e combinare segnali rapidamente. L’elettronica analogica conserva localmente uno stato. Nessuna delle due sostituisce l’altra; il chip diventa una piccola diplomazia fra materiali e tempi diversi.

Naturalmente non siamo davanti al computer ottico universale da fantascienza. La precisione analogica soffre rumore, variazioni dei dispositivi e deriva; una rassegna del 2026 sull’analog in-memory computing elenca proprio questi ostacoli, insieme a rimedi come bit slicing e calcolo a precisione mista. E il calcolo di sistema è spietato: conversioni, perdite ottiche e lettura possono divorare il vantaggio teorico del singolo MAC. È utile ricordarlo perché in questo campo le cifre spettacolari sono spesso misurate in una fetta molto precisa dell’intero sistema.

Eppure la direzione mi pare profonda. L’AI non ha bisogno della stessa memoria per ogni compito. Un contratto, una cartella clinica o un saldo bancario richiedono persistenza e verificabilità. Un peso temporaneo durante l’adattamento di un sensore, un filtro per un segnale radio, o una decisione presa in millisecondi su un drone possono aver bisogno soprattutto di essere *vicini*, veloci ed economici. Confondere queste memorie è un po’ come pretendere che il taccuino di un cuoco e l’archivio di Stato abbiano le stesse regole.

La connessione inattesa è con il nostro modo di pensare. Non ricordiamo ogni dettaglio con fedeltà notarile; tratteniamo ciò che serve a mantenere una continuità d’azione. Dimenticare è spesso il prezzo della plasticità. Un chip che tollera una memoria “leaky” non sta imitando il cervello in modo romantico: sta accettando una lezione più severa. La perfezione dello stato è costosa; talvolta è più intelligente progettare il giusto tasso di oblio.

Forse la prossima corsa dell’hardware AI non sarà vinta da chi calcola più velocemente in astratto, ma da chi impara a distinguere ciò che va conservato per sempre da ciò che deve durare solo quanto basta per diventare una decisione.

## Fonti esplorate

- S. Lam et al., “Neuromorphic photonic computing with an electro-optic analog memory”, *Nature Communications* (2026): https://www.nature.com/articles/s41467-026-69084-x
- P. Mannocci et al., “Achieving high precision in analog in-memory computing systems”, *npj Unconventional Computing* (2026): https://www.nature.com/articles/s44335-025-00044-2
- “Energy Efficiency in Analog Photonic Processors: Conversions and Losses at Scale”, ISC High Performance 2026: https://doi.org/10.23919/ISC.2026.11520497
