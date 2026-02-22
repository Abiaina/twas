// ============================================================
//  TWAS — Meeting notes data
//
//  HOW TO ADD A NEW SET OF MINUTES:
//  1. Add an object to the array below (newest at top).
//  2. Upload the PDF/doc to /public/notes/ and set fileUrl.
//  3. The meeting-notes page updates automatically.
// ============================================================

import type { MeetingNote } from './types';

export const meetingNotes: MeetingNote[] = [
  // ── Add real notes below — newest first ─────────────────
  // Uncomment and fill in when you have actual meeting notes:
  //
  // {
  //   id:       '2024-10-01',
  //   date:     '2024-10-01',
  //   title:    'October 2024 General Meeting',
  //   summary:  'Budget review, upcoming Ashenda planning, new member vote.',
  //   fileUrl:  '/notes/2024-10-general.pdf',
  // },

  // ── Placeholder entries (remove once you have real data) ─
  {
    id:      '2017-12-01',
    date:    '2017-12-01',
    title:   'December 2017 General Meeting',
    summary: 'Year-end review, officer elections, 2018 event planning.',
  },
  {
    id:      '2017-09-01',
    date:    '2017-09-01',
    title:   'September 2017 General Meeting',
    summary: 'Ashenda follow-up, community outreach discussion.',
  },
  {
    id:      '2017-04-01',
    date:    '2017-04-01',
    title:   'April 2017 General Meeting',
    summary: "Women's Dinner preparation and logistics.",
  },
  {
    id:      '2017-01-01',
    date:    '2017-01-01',
    title:   'January 2017 General Meeting',
    summary: 'New year planning, membership drive review.',
  },
  {
    id:      '2016-10-01',
    date:    '2016-10-01',
    title:   'October 2016 General Meeting',
    summary: 'Community programs update, budget discussion.',
  },
  {
    id:      '2016-06-01',
    date:    '2016-06-01',
    title:   'June 2016 General Meeting',
    summary: 'Mid-year review and cultural event planning.',
  },
  {
    id:      '2015-11-01',
    date:    '2015-11-01',
    title:   'November 2015 General Meeting',
    summary: 'Follow-up from founding celebration, charter discussion.',
  },
  {
    id:      '2015-05-01',
    date:    '2015-05-01',
    title:   'May 2015 Founding Meeting',
    summary: 'Organisational formation, officer elections, mission statement ratification.',
  },
];

/** Helper: notes grouped by year, descending */
export function notesByYear(notes: MeetingNote[]): Map<string, MeetingNote[]> {
  const map = new Map<string, MeetingNote[]>();
  const sorted = [...notes].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  for (const note of sorted) {
    const year = new Date(note.date).getFullYear().toString();
    if (!map.has(year)) map.set(year, []);
    map.get(year)!.push(note);
  }
  return map;
}
