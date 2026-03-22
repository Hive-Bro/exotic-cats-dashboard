/**
 * Static dataset of exotic cat species with curated Unsplash photo IDs.
 * Using direct Unsplash image URLs with photo IDs for reliable loading.
 */

const species = [
  {
    id: 'cheetah',
    name: 'Cheetah',
    funFacts: [
      'Cheetahs can accelerate from 0 to 60 mph in just 3 seconds.',
      'A cheetah\'s claws are semi-retractable, like cleats for grip.',
      'Cheetahs are the only big cats that cannot roar — they chirp and purr.',
      'Their black "tear marks" reduce sun glare while hunting.',
    ],
  },
  {
    id: 'leopard',
    name: 'Leopard',
    funFacts: [
      'Leopards can carry prey twice their own body weight up a tree.',
      'Their rosette-shaped spots are unique — like human fingerprints.',
      'Leopards are the most widespread big cat species on Earth.',
      'They are strong swimmers and occasionally hunt fish.',
    ],
  },
  {
    id: 'ocelot',
    name: 'Ocelot',
    funFacts: [
      'Salvador Dalí famously kept an ocelot named Babou as a pet.',
      'Ocelots are excellent swimmers and don\'t avoid water.',
      'They sleep in trees during the day and hunt at night.',
      'Every ocelot\'s coat pattern is completely unique.',
    ],
  },
  {
    id: 'serval',
    name: 'Serval',
    funFacts: [
      'Servals have the longest legs relative to body size of any cat.',
      'They can leap up to 10 feet in the air to catch birds.',
      'Their large ears can rotate 180 degrees independently.',
      'Servals have a hunting success rate of around 50% — twice that of lions.',
    ],
  },
  {
    id: 'caracal',
    name: 'Caracal',
    funFacts: [
      'Caracals can snatch birds right out of the air with a vertical leap.',
      'Their name comes from the Turkish "karakulak" — meaning "black ear".',
      'Ancient Egyptians and Persians trained caracals for bird hunting.',
      'Their ear tufts may help direct sound into the ear canal.',
    ],
  },
  {
    id: 'snow-leopard',
    name: 'Snow Leopard',
    funFacts: [
      'Snow leopards can leap up to 50 feet in a single bound.',
      'They wrap their thick tails around their face for warmth while sleeping.',
      'Snow leopards cannot roar — they make a sound called a "chuff".',
      'Their wide, fur-covered paws act as natural snowshoes.',
    ],
  },
  {
    id: 'clouded-leopard',
    name: 'Clouded Leopard',
    funFacts: [
      'Clouded leopards have the longest canine teeth relative to body size of any living cat.',
      'They can climb down trees headfirst thanks to flexible ankle joints.',
      'Their cloud-shaped spots give them their name.',
      'They can hang from branches using only their hind feet.',
    ],
  },
  {
    id: 'lynx',
    name: 'Lynx',
    funFacts: [
      'A lynx\'s ear tufts improve hearing by funneling sound.',
      'Their oversized paws work like snowshoes in deep snow.',
      'Lynx are so stealthy they were called "ghost cats" by early settlers.',
      'They can spot a mouse from 250 feet away.',
    ],
  },
]

// Curated Unsplash photo IDs per species for reliable, high-quality images
const photoIds = {
  cheetah: [
    { id: 'v4mGV0XU5gM', credit: 'Ahmed Galal' },
    { id: 'L-0vFJmHMBk', credit: 'Yuki W' },
    { id: 'NjBCEcpOwkk', credit: 'Geranimo' },
  ],
  leopard: [
    { id: 'gnEjaij_gKo', credit: 'Geranimo' },
    { id: 'GvnN7iMNZAM', credit: 'Uriel Soberanes' },
    { id: 'U2lqFeniMso', credit: 'Geranimo' },
  ],
  ocelot: [
    { id: 'DWXR-nAbxCk', credit: 'Dušan Veverkolog' },
    { id: 'yPSbirjraxU', credit: 'Régine Tholen' },
    { id: 'b49uebi37ZU', credit: 'Ami Vam' },
  ],
  serval: [
    { id: 'kBHEIu12DAg', credit: 'Alexander Strachan' },
    { id: '6VjPmyMj5KM', credit: 'Dušan Veverkolog' },
    { id: 'pZOSJiAV_Fk', credit: 'Lav Pehar' },
  ],
  caracal: [
    { id: 'OMV6n-Y2bIU', credit: 'Sian Cooper' },
    { id: 'ixMSaTvLI6k', credit: 'Andrii Ganzevych' },
    { id: 'bY4cqxp7vos', credit: 'Silas Schneider' },
  ],
  'snow-leopard': [
    { id: 'FJJFpDZ2JYE', credit: 'Dušan Veverkolog' },
    { id: 'USsVIXj3bkk', credit: 'Frida Bredesen' },
    { id: 'Siuwr3uCir0', credit: 'Ståle Grut' },
  ],
  'clouded-leopard': [
    { id: '3InMDaVP8JY', credit: 'Uriel Soberanes' },
    { id: 'H1GbxOY2SSc', credit: 'Dušan Veverkolog' },
    { id: 'WVajMRXW4do', credit: 'Dušan Veverkolog' },
  ],
  lynx: [
    { id: 'dqtS4jCLwkk', credit: 'Zdeněk Macháček' },
    { id: 'MLmmYUr4Mhg', credit: 'Federico Di Dio photography' },
    { id: 'x5AcLXpnnJc', credit: 'Dušan Veverkolog' },
  ],
}

/**
 * Build the full photo card dataset by combining species info with photo entries.
 */
export function buildCatPhotos() {
  const photos = []

  for (const sp of species) {
    const spPhotos = photoIds[sp.id] || []
    for (const photo of spPhotos) {
      const fact = sp.funFacts[Math.floor(Math.random() * sp.funFacts.length)]
      photos.push({
        id: `${sp.id}-${photo.id}`,
        species: sp.name,
        speciesId: sp.id,
        funFact: fact,
        credit: photo.credit,
        src: `https://images.unsplash.com/photo-${photo.id}?w=600&h=800&fit=crop&auto=format`,
        srcLarge: `https://images.unsplash.com/photo-${photo.id}?w=1200&auto=format`,
        alt: `${sp.name} in the wild`,
      })
    }
  }

  return photos
}

export function getSpeciesList() {
  return species.map((s) => ({ id: s.id, name: s.name }))
}
