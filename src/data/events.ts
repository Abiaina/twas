// ============================================================
//  TWAS — Events data
//
//  HOW TO ADD A NEW EVENT:
//  1. Copy one of the objects below and add it to the array.
//  2. Put your images in /public/<year>/ (or any subfolder).
//  3. Add Photo entries pointing to those images.
//  4. The events page and homepage will update automatically.
// ============================================================

import type { OrgEvent } from './types';

export const events: OrgEvent[] = [
  // ── 2015 ─────────────────────────────────────────────────
  {
    id:            'celebrating-twas-2015',
    title:         'Celebrating TWA Seattle',
    date:          '2015-05-30',
    formattedDate: 'May 30, 2015',
    description:
      'A landmark celebration marking the founding and early achievements of ' +
      'the Tigray Women\'s Association of Seattle — bringing together members, ' +
      'families, and supporters to honor our community roots.',
    tags:          ['Founding', 'Celebration'],
    videoEmbedUrl: 'https://www.youtube.com/embed/NNrvAJiN5c0',
  },

  // ── 2017 ─────────────────────────────────────────────────
  {
    id:            'womens-dinner-2017',
    title:         "Women's Dinner",
    date:          '2017-04-29',
    formattedDate: 'April 29, 2017',
    description:
      'An annual gathering of TWAS members and supporters celebrating ' +
      'sisterhood, community achievements, and the strength of Tigrayan ' +
      'women in the Pacific Northwest.',
    tags:    ['Annual Dinner', 'Community'],
    photos:  [
      { src: '/2017/20170429_benefit1.jpg', alt: "Women's Dinner – Photo 1", event: "Women's Dinner", date: 'April 29, 2017' },
      { src: '/2017/20170429_benefit2.jpg', alt: "Women's Dinner – Photo 2", event: "Women's Dinner", date: 'April 29, 2017' },
      { src: '/2017/20170429_benefit3.jpg', alt: "Women's Dinner – Photo 3", event: "Women's Dinner", date: 'April 29, 2017' },
      { src: '/2017/20170429_benefit4.jpg', alt: "Women's Dinner – Photo 4", event: "Women's Dinner", date: 'April 29, 2017' },
    ],
  },
  {
    id:            'ashenda-2017',
    title:         'Ashenda Celebration',
    date:          '2017-08-26',
    formattedDate: 'August 26, 2017',
    description:
      'Ashenda is a vibrant traditional festival celebrated by Tigrayan and ' +
      'Amhara women and girls every year after fasting. TWAS brought this ' +
      'beloved cultural tradition to Seattle with song, dance, and community.',
    tags:    ['Culture', 'Ashenda', 'Tradition'],
    photos:  [
      { src: '/2017/20170826_ashenda.jpg',   alt: 'Ashenda Celebration',        event: 'Ashenda', date: 'August 26, 2017' },
      { src: '/2017/20170826_ashenda1.jpeg', alt: 'Ashenda Celebration – Photo 1', event: 'Ashenda', date: 'August 26, 2017' },
      { src: '/2017/20170826_ashenda2.jpg',  alt: 'Ashenda Celebration – Photo 2', event: 'Ashenda', date: 'August 26, 2017' },
      { src: '/2017/20170826_ashenda3.jpg',  alt: 'Ashenda Celebration – Photo 3', event: 'Ashenda', date: 'August 26, 2017' },
      { src: '/2017/20170826_ashenda4.jpg',  alt: 'Ashenda Celebration – Photo 4', event: 'Ashenda', date: 'August 26, 2017' },
    ],
  },

  // ── ADD NEW EVENTS BELOW ─────────────────────────────────
  // {
  //   id:            'my-new-event-2024',
  //   title:         'My New Event',
  //   date:          '2024-06-15',
  //   formattedDate: 'June 15, 2024',
  //   description:   'Event description here.',
  //   tags:          ['Tag1', 'Tag2'],
  //   photos: [
  //     { src: '/2024/my-photo.jpg', alt: 'Description', event: 'My New Event', date: 'June 15, 2024' },
  //   ],
  // },
];

/** Helper: all events in chronological order (oldest first) */
export const eventsByDate = [...events].sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
);

/** Helper: all photos across all events, in event order */
export const allPhotos = events.flatMap((e) => e.photos ?? []);
