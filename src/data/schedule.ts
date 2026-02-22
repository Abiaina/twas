// ============================================================
//  TWAS — Upcoming events & recurring meetings
//
//  HOW TO USE:
//  • Add each meeting or event as its own entry below.
//  • Past dates are automatically hidden on the events page
//    (filtered client-side, so no rebuild needed as time passes).
//  • "type" controls the badge color:
//      'meeting'  → blue  (regular monthly meetings)
//      'event'    → gold  (community dinners, fundraisers, etc.)
//      'cultural' → red   (Ashenda, cultural celebrations)
//
//  HOW TO ADD A NEW ENTRY:
//  Copy any block below, update the fields, save. Done.
// ============================================================

import type { ScheduleItem } from './types';

export const schedule: ScheduleItem[] = [

  // ── 2026 meetings — add more as the year goes on ────────────
  {
    id:       'meeting-2026-03',
    date:     '2026-03-19',
    time:     '7:00 PM',
    title:    'Monthly General Meeting',
    type:     'meeting',
    location: 'Seattle (location TBD)',
  },
  {
    id:       'meeting-2026-04',
    date:     '2026-04-16',
    time:     '7:00 PM',
    title:    'Monthly General Meeting',
    type:     'meeting',
    location: 'Seattle (location TBD)',
  },
  {
    id:       'meeting-2026-05',
    date:     '2026-05-21',
    time:     '7:00 PM',
    title:    'Monthly General Meeting',
    type:     'meeting',
    location: 'Seattle (location TBD)',
  },
  {
    id:       'meeting-2026-06',
    date:     '2026-06-18',
    time:     '7:00 PM',
    title:    'Monthly General Meeting',
    type:     'meeting',
    location: 'Seattle (location TBD)',
  },

  // ── Special events ───────────────────────────────────────────
  // Replace these placeholders with your real upcoming events.
  {
    id:          'dinner-2026',
    date:        '2026-04-25',
    time:        '6:30 PM',
    title:       'Annual Women\'s Dinner',
    description: 'Our annual community dinner celebrating Tigrayan women in Seattle.',
    type:        'event',
    location:    'Seattle (venue TBD)',
  },
  {
    id:          'ashenda-2026',
    date:        '2026-08-22',
    time:        'TBD',
    title:       'Ashenda Celebration',
    description: 'Annual celebration of the traditional Tigrayan women\'s festival.',
    type:        'cultural',
    location:    'Seattle (venue TBD)',
  },

  // ── ADD NEW EVENTS BELOW ─────────────────────────────────────
  // {
  //   id:          'unique-id',
  //   date:        '2026-09-15',   // YYYY-MM-DD
  //   time:        '7:00 PM',
  //   title:       'Event Title',
  //   description: 'Optional short description.',
  //   type:        'meeting',      // 'meeting' | 'event' | 'cultural'
  //   location:    'Venue Name, Seattle',
  // },
];

// ── Helpers used by pages ─────────────────────────────────────

/** Badge label shown next to each schedule type */
export const typeLabel: Record<ScheduleItem['type'], string> = {
  meeting:  'Meeting',
  event:    'Event',
  cultural: 'Cultural',
};

/** Sort schedule ascending by date */
export const scheduleByDate = [...schedule].sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
);
