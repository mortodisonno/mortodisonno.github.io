export interface Track {
  file: string;
  title: string;
}

export interface Album {
  title: string;
  note?: string;      // anno, etichetta, quello che vuoi
  dir: string;        // path relativo sotto /musica/ sul server
  tracks: Track[];
}

export const albums: Album[] = [
  {
    title: 'sonno. — sonno ep',
    dir: 'sonno-ep',
    tracks: [
      { file: '01-parigi.mp3', title: 'Parigi' },
      { file: '02-4-luglio.mp3', title: '4 Luglio' },
      { file: '03-specchio.mp3', title: 'Specchio' },
      { file: '04-vertigine.mp3', title: 'Vertigine' },
      { file: '05-nuvole.mp3', title: 'Nuvole' },
    ],
  },
  {
    title: 'sonno. — Capo Verde',
    dir: 'capo-verde',
    tracks: [
      { file: '01-capo-verde.mp3', title: 'Capo Verde' },
      { file: '02-naufraghi.mp3', title: 'Naufraghi' },
    ],
  },
  {
    title: 'sonno. — Apoptosi EP',
    dir: 'apoptosi-ep',
    tracks: [
      { file: '01-canzone-opaca-dove-non-pesa-l-aria.mp3', title: "Canzone Opaca (Dove non pesa l'aria)" },
      { file: '02-inchiostro-blues.mp3', title: 'Inchiostro Blues' },
      { file: '03-naufraghi.mp3', title: 'Naufraghi' },
      { file: '04-capo-verde.mp3', title: 'Capo Verde' },
      { file: '05-anna-mi-ha-insegnato-come-nascondersi.mp3', title: 'Anna mi ha insegnato come nascondersi' },
    ],
  },
  {
    title: 'sonno. — Come Diventare Buoni E Tornare A Casa (SPLIT)',
    dir: 'come-diventare-buoni-e-tornare-a-casa-split',
    tracks: [
      { file: '01-effe.mp3', title: 'Effe' },
      { file: '02-perduta-memoria.mp3', title: '(Perduta) Memoria' },
      { file: '03-per-tornare-a-casa.mp3', title: 'Per Tornare a Casa' },
      { file: '04-come-diventare-buoni.mp3', title: 'Come Diventare Buoni' },
      { file: '05-eroine-letterarie.mp3', title: 'Eroine Letterarie' },
      { file: '06-il-ripresino.mp3', title: 'Il Ripresino' },
    ],
  },
  {
    title: 'sonno. — S. Cioran',
    dir: 's-cioran',
    tracks: [
      { file: '01-s-cioran.mp3', title: 'S. Cioran' },
      { file: '02-apoptosi.mp3', title: 'Apoptosi' },
    ],
  },
  {
    title: 'sonno. — Ὕπνος (Hypnos)',
    dir: 'hypnos',
    tracks: [
      { file: '01-pathos.mp3', title: 'Πάθος (Pathos)' },
      { file: '02-lissa.mp3', title: 'Λύσσα (Lissa)' },
      { file: '03-thanatos.mp3', title: 'Θάνατος (Thánatos)' },
      { file: '04-kinisi.mp3', title: 'Κίνηση (Kínisi)' },
      { file: '05-hybris.mp3', title: 'Ὕβρις (Hybris)' },
      { file: '06-nuovo-e-diverso-da-te-gli-altri-remix.mp3', title: 'Nuovo e Diverso da Te (Gli Altri REMIX)' },
    ],
  },
  {
    title: 'sonno. — Le Troixiéme Choix',
    dir: 'le-troixieme-choix',
    tracks: [
      { file: '01-s-cioran-ouverture.mp3', title: 'S. Cioran, Ouverture' },
      { file: '02-la-fin-sonata-marche-funebre.mp3', title: 'La Fin, Sonata (Marche Funèbre)' },
      { file: '03-cycles-des-quintes-prelude-s.mp3', title: 'Cycles des Quintes, Prélude(s)' },
      { file: '04-interlude.mp3', title: 'Interlude' },
      { file: '05-in-ignem-aeternum-polonaise.mp3', title: 'In Ignem Aeternum, Polonaise' },
      { file: '06-comtesse-d-apponyi-nocturne.mp3', title: "Comtesse d'Apponyi, Nocturne" },
      { file: '07-ennui-finale.mp3', title: 'Ennuì, Finale' },
      { file: '08-flash-diving-ennui-rework-bonus.mp3', title: 'Flash Diving (Ennui REWORK ft. Internet Breakfast) — bonus track' },
    ],
  },
  {
    title: 'sonno. — Vendt Tilbake Til Søvn',
    note: 'søvn, 2025',
    dir: 'sovn/vendt_tilbake_til_sovn',
    tracks: [
      { file: '01-slowdowns.mp3', title: 'Slowdowns' },
      { file: '02-never-far-apart-again-promise.mp3', title: 'Never Far Apart Again, Promise?' },
      { file: '03-veritas-sub-angue-latet.mp3', title: 'Veritas Sub Angue Latet' },
      { file: '04-the-sky-would-be-too-narrow-for-me.mp3', title: 'The Sky Would Be Too Narrow for Me, to Contain Me Within It' },
      { file: '05-hul-gil.mp3', title: 'Hul Gil' },
      { file: '06-le-pese-nerfs.mp3', title: 'Le Pèse-Nerfs' },
      { file: '07-and-i-bore-thy-divine-bones.mp3', title: '...and I Bore Thy Divine Bones to Shatter Upon the Shivered Plains of Heaven' },
      { file: '08-the-conquering-worm.mp3', title: 'The Conquering Worm' },
      { file: '09-so-spake-th-apostate-angel.mp3', title: "So Spake Th' Apostate Angel" },
      { file: '10-behind-the-wheel-depeche-mode-cover.mp3', title: 'Behind the Wheel (Depeche Mode Cover)' },
    ],
  },
  {
    title: 'sonno. — Αἰώνιον ἀνάπαυσιν δός αὐτοῖς, ὦ Δαίμονα / καὶ λάμψει αὐτοῖς σκότος αἰώνιον',
    note: 'søvn V',
    dir: 'sovn/sovn-v',
    tracks: [
      { file: '01-aionion-anapausin-dos-autois-o-daimona.mp3', title: 'Αἰώνιον ἀνάπαυσιν δός αὐτοῖς, ὦ Δαίμονα' },
      { file: '02-kai-lampsei-autois-skotos-aionion.mp3', title: 'καὶ λάμψει αὐτοῖς σκότος αἰώνιον' },
    ],
  },
  {
    title: 'sonno. — Remixes / Reworks 14-19',
    dir: 'remixes-reworks-14-19',
    tracks: [
      { file: 'albicocche-uragano.mp3', title: 'Albicocche (uragano)' },
      { file: 'cuore-di-carta-gelogelido.mp3', title: 'Cuore di Carta (GeloGelido)' },
      { file: 'fantasmi-nel-frigorifero-cabrera.mp3', title: 'Fantasmi nel Frigorifero (Cabrera)' },
      { file: 'flash-diving-ennui-rework-ft-internet-breakfast.mp3', title: 'Flash Diving (Ennui REWORK ft. Internet Breakfast)' },
      { file: 'float-byenow.mp3', title: 'Float (Byenow)' },
      { file: 'know-it-better-lettere-da-un-occupante.mp3', title: "Know it Better (Lettere da un'Occupante)" },
      { file: 'maniche-corte-rework.mp3', title: 'Maniche Corte (Rework)' },
      { file: 'nuovo-e-diverso-da-te-gli-altri.mp3', title: 'Nuovo e Diverso da Te (Gli Altri)' },
      { file: 'retrieval-of-nxptn-mars.mp3', title: 'Retrieval Of (Nxptn Mars)' },
    ],
  },
];
