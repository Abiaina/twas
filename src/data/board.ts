// ============================================================
//  TWAS — Board members data
//
//  HOW TO ADD A MEMBER:
//  1. Copy a block below and fill in the fields.
//  2. Optionally add a headshot to /public/board/ and set `photo`.
//  3. The board page updates automatically.
// ============================================================

import type { BoardMember } from './types';

export const boardMembers: BoardMember[] = [
  {
    id:       'president',
    name:     'TODO: President Name',
    role:     'President',
    initials: 'P',
    bio:      'TODO: Add a short bio for the president.',
  },
  {
    id:       'vice-president',
    name:     'TODO: Vice President Name',
    role:     'Vice President',
    initials: 'VP',
    bio:      'TODO: Add a short bio.',
  },
  {
    id:       'secretary',
    name:     'TODO: Secretary Name',
    role:     'Secretary',
    initials: 'S',
    bio:      'TODO: Add a short bio.',
  },
  {
    id:       'treasurer',
    name:     'TODO: Treasurer Name',
    role:     'Treasurer',
    initials: 'T',
    bio:      'TODO: Add a short bio.',
  },
  {
    id:       'cultural-director',
    name:     'TODO: Cultural Director Name',
    role:     'Cultural Director',
    initials: 'CD',
    bio:      'TODO: Add a short bio.',
  },
  {
    id:       'community-outreach',
    name:     'TODO: Outreach Director Name',
    role:     'Community Outreach',
    initials: 'CO',
    bio:      'TODO: Add a short bio.',
  },

  // ── ADD MORE MEMBERS BELOW ──────────────────────────────
  // {
  //   id:       'unique-id',
  //   name:     'Full Name',
  //   role:     'Role / Title',
  //   initials: 'AB',
  //   bio:      'Short bio.',
  //   photo:    '/board/name.jpg', // optional
  // },
];
