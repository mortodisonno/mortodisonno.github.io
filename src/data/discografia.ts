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
    title: 'sonno. — sonno ep [2014]',
    dir: 'sonno-ep',
    tracks: [
      { file: '01-parigi.mp3', title: 'parigi' },
      { file: '02-4-luglio.mp3', title: '4 luglio' },
      { file: '03-specchio.mp3', title: 'specchio' },
      { file: '04-vertigine.mp3', title: 'vertigine' },
      { file: '05-nuvole.mp3', title: 'nuvole' },
    ],
  },
  {
    title: 'sonno. — capo verde [2015]',
    dir: 'capo-verde',
    tracks: [
      { file: '01-capo-verde.mp3', title: 'capo verde' },
      { file: '02-naufraghi.mp3', title: 'naufraghi' },
    ],
  },
  {
    title: 'sonno. — apoptosi EP [2015]',
    dir: 'apoptosi-ep',
    tracks: [
      { file: '01-canzone-opaca-dove-non-pesa-l-aria.mp3', title: "canzone opaca (dove non pesa l'aria) w. luca mele" },
      { file: '02-inchiostro-blues.mp3', title: 'inchiostro blues' },
      { file: '03-naufraghi.mp3', title: 'naufraghi' },
      { file: '04-capo-verde.mp3', title: 'capo verde' },
      { file: '05-anna-mi-ha-insegnato-come-nascondersi.mp3', title: 'anna mi ha insegnato come nascondersi' },
    ],
  },
  {
    title: 'sonno. — come diventare buoni e tornare a casa [2015] (SPLIT w. a morning loss)',
    dir: 'come-diventare-buoni-e-tornare-a-casa-split',
    tracks: [
      { file: '01-effe.mp3', title: 'effe' },
      { file: '02-perduta-memoria.mp3', title: '(perduta) memoria' },
      { file: '03-per-tornare-a-casa.mp3', title: 'per tornare a casa' },
      { file: '04-come-diventare-buoni.mp3', title: 'a morning loss - come Diventare Buoni' },
      { file: '05-eroine-letterarie.mp3', title: 'a morning loss - eroine letterarie' },
      { file: '06-il-ripresino.mp3', title: 'a morning loss - il ripresino' },
    ],
  },
  {
    title: 'sonno. — s. cioran [2016]',
    dir: 's-cioran',
    tracks: [
      { file: '01-s-cioran.mp3', title: 's. cioran' },
      { file: '02-apoptosi.mp3', title: 'apoptosi' },
    ],
  },
  {
    title: 'sonno. — Ὕπνος (hypnos) [2017]',
    dir: 'hypnos',
    tracks: [
      { file: '01-pathos.mp3', title: 'Πάθος (pathos)' },
      { file: '02-lissa.mp3', title: 'Λύσσα (lissa)' },
      { file: '03-thanatos.mp3', title: 'Θάνατος (thánatos)' },
      { file: '04-kinisi.mp3', title: 'Κίνηση (kínisi)' },
      { file: '05-hybris.mp3', title: 'Ὕβρις (hybris)' },
      { file: '06-nuovo-e-diverso-da-te-gli-altri-remix.mp3', title: 'nuovo e diverso da te (gli altri REMIX)' },
    ],
  },
  {
    title: 'sonno. — Le Troixiéme Choix [2016]',
    dir: 'le-troixieme-choix',
    tracks: [
      { file: '01-s-cioran-ouverture.mp3', title: 's. cioran, ouverture' },
      { file: '02-la-fin-sonata-marche-funebre.mp3', title: 'la fin, sonata (marche funèbre)' },
      { file: '03-cycles-des-quintes-prelude-s.mp3', title: 'cycles des quintes, prélude(s)' },
      { file: '04-interlude.mp3', title: 'interlude' },
      { file: '05-in-ignem-aeternum-polonaise.mp3', title: 'in ignem aeternum, polonaise' },
      { file: '06-comtesse-d-apponyi-nocturne.mp3', title: "comtesse d'apponyi, nocturne" },
      { file: '07-ennui-finale.mp3', title: 'ennuì, finale' },
      { file: '08-flash-diving-ennui-rework-bonus.mp3', title: 'flash diving (ennui REWORK w. internet breakfast)' },
    ],
  },
  {
    title: 'sonno. — Vendt Tilbake Til Søvn [2025]',
    note: 'søvn I to IV ',
    dir: 'sovn/vendt_tilbake_til_sovn',
    tracks: [
      { file: '01-slowdowns.mp3', title: 'slowdowns' },
      { file: '02-never-far-apart-again-promise.mp3', title: 'never far apart again, promise?' },
      { file: '03-veritas-sub-angue-latet.mp3', title: 'veritas sub angue latet' },
      { file: '04-the-sky-would-be-too-narrow-for-me.mp3', title: 'the sky would be too narrow for me, to contain ne within it' },
      { file: '05-hul-gil.mp3', title: 'hul-gil' },
      { file: '06-le-pese-nerfs.mp3', title: 'le pèse-nerfs' },
      { file: '07-and-i-bore-thy-divine-bones.mp3', title: '...and i bore thy divine bones to shatter upon the shivered plains of heaven' },
      { file: '08-the-conquering-worm.mp3', title: 'the conquering worm' },
      { file: '09-so-spake-th-apostate-angel.mp3', title: "so spake th' apostate angel" },
      { file: '10-behind-the-wheel-depeche-mode-cover.mp3', title: 'behind the wheel (depeche mode cover)' },
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
    title: 'sonno. — Remixes / Reworks 14-19 [2020]',
    dir: 'remixes-reworks-14-19',
    tracks: [
      { file: 'albicocche-uragano.mp3', title: 'albicocche (uragano)' },
      { file: 'cuore-di-carta-gelogelido.mp3', title: 'cuore di carta (gelogelido)' },
      { file: 'fantasmi-nel-frigorifero-cabrera.mp3', title: 'fantasmi nel frigorifero (cabrera)' },
      { file: 'flash-diving-ennui-rework-ft-internet-breakfast.mp3', title: 'flash diving (ennui REWORK w. internet breakfast)' },
      { file: 'float-byenow.mp3', title: 'float (byenow)' },
      { file: 'know-it-better-lettere-da-un-occupante.mp3', title: "know it better (lettere da un'occupante)" },
      { file: 'maniche-corte-rework.mp3', title: 'maniche corte (rework)' },
      { file: 'nuovo-e-diverso-da-te-gli-altri.mp3', title: 'nuovo e diverso da te (gli altri)' },
      { file: 'retrieval-of-nxptn-mars.mp3', title: 'retrieval of (nxptn mars)' },
    ],
  },
];
