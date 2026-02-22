// ============================================================
//  TWAS — English / Tigrinya (ትግርኛ) translation strings
//
//  ⚠️  NOTE: These Tigrinya translations are a working draft.
//      Please have them reviewed by a native Tigrinya speaker
//      before publishing.
//
//  HOW TO EDIT:
//  Add or change strings here. The language toggle is handled
//  entirely client-side via CSS (html.lang-ti) — no rebuild needed.
// ============================================================

export const ui = {
  // ── Navigation ─────────────────────────────────────────────
  nav: {
    home:    { en: 'Home',         ti: 'ቤት'         },
    events:  { en: 'Events',       ti: 'ጉዳያት'       },
    board:   { en: 'Board',        ti: 'ቦርድ'        },
    notes:   { en: 'Meeting Notes',ti: 'ቃለ-ኣኼባ'    },
    contact: { en: 'Contact',      ti: 'ርኸቡና'       },
  },

  // ── Homepage hero ──────────────────────────────────────────
  hero: {
    eyebrow:  { en: 'Tigray Women\'s Association of Seattle', ti: 'ማሕበር ደቀ-ኣንስትዮ ትግራይ ሲያትล' },
    tagline:  {
      en: 'Empowering Tigrayan women in the Pacific Northwest through community, culture, and sisterhood.',
      ti: 'ደቀ-ኣንስትዮ ትግራይ ኣብ ፓሲፊክ ሰሜናዊ ምዕራብ ብሕብረተሰብ፡ ባህሊ፡ ዕርክነትን ምብርታዕ።',
    },
    cta1:     { en: 'Our Events',  ti: 'ጉዳያትና'     },
    cta2:     { en: 'Get Involved',ti: 'ሳተፍ'        },
  },

  // ── Homepage about ─────────────────────────────────────────
  about: {
    heading:  { en: 'Who We Are',  ti: 'ንሕና መን ኢና' },
    boardCta: { en: 'Meet Our Board', ti: 'ቦርዳና ተረኽቡ' },
  },

  // ── Shared CTAs ────────────────────────────────────────────
  cta: {
    allEvents:   { en: 'All Events →',        ti: 'ኩሎም ጉዳያት →'        },
    viewPhotos:  { en: 'View photos →',       ti: 'ስእልታት ርኣዩ →'       },
    contactUs:   { en: 'Contact Us',          ti: 'ርኸቡና'               },
    learnMore:   { en: 'Learn More',          ti: 'ዝያዳ ፍለጡ'           },
    sendMessage: { en: 'Send Message',        ti: 'መልእኽቲ ሰደዱ'         },
    joinCta:     { en: 'Join Our Community',  ti: 'ናይ ሕብረተሰብና ኣካል ኩኑ'},
    joinSub:     {
      en: 'TWAS is open to all Tigrayan women in the Seattle area and those who support our mission. Reach out to get involved.',
      ti: 'TWAS ንኹለን ደቀ-ኣንስትዮ ትግራይ ኣብ ሲያትล ዞባ ከምኡ'ውን ሸቶና ዝድግፋ ክፉት እዩ። ንምሳተፍ ርኸቡና።',
    },
  },

  // ── Page headers ───────────────────────────────────────────
  pages: {
    events: {
      title: { en: 'Community Events', ti: 'ጉዳያት ሕብረተሰብ' },
      sub:   { en: 'Our celebrations, dinners, and cultural traditions — most recent first.', ti: 'ድግሳትና፡ ምሳሕናን ባህላዊ ክዋናትና — ዝቐረበ ቅድሚት።' },
    },
    board: {
      title: { en: 'Our Board',              ti: 'ቦርዳና'              },
      sub:   { en: 'Meet the dedicated women leading TWAS.', ti: 'TWAS ዝመርሓ ርዑዳት ደቀ-ኣንስትዮ ተፈልጡ።' },
    },
    notes: {
      title: { en: 'Meeting Notes',          ti: 'ቃለ-ኣኼባ'            },
      sub:   { en: 'Published minutes from TWAS general and board meetings.', ti: 'ካብ ሓፈሻዊ ኣኼባን ቦርድ ኣኼባን TWAS ዝተሓተሙ ቃለ-ኣኼባ።' },
    },
    contact: {
      title: { en: 'Contact Us',             ti: 'ርኸቡና'               },
      sub:   { en: 'We\'d love to hear from you. Reach out any time.', ti: 'ናብ ሓሳብኩም ንሰምዕ ደስ ይብለና። ኩሉ ግዜ ርኸቡና።' },
    },
  },

  // ── Form labels ────────────────────────────────────────────
  form: {
    firstName: { en: 'First Name',       ti: 'ቀዳማይ ስም'       },
    lastName:  { en: 'Last Name',        ti: 'ናይ ስድራ ስም'      },
    email:     { en: 'Email Address',    ti: 'ኢ-መይል ኣድራሻ'     },
    subject:   { en: 'Subject',          ti: 'ኣርእስቲ'           },
    message:   { en: 'Message',          ti: 'መልእኽቲ'           },
    inquiries: { en: 'General inquiry',  ti: 'ሓፈሻዊ ሕቶ'         },
    membership:{ en: 'Membership',       ti: 'ኣባልነት'           },
    volunteer: { en: 'Events & volunteering', ti: 'ጉዳያትን ወለንተኛነትን' },
    partner:   { en: 'Partnership / sponsorship', ti: 'ሽርክነት / ስፖንሰርሺፕ' },
    other:     { en: 'Other',            ti: 'ካልእ'             },
    send:      { en: 'Send Message',     ti: 'መልእኽቲ ሰደዱ'      },
  },
} as const;

// Type helpers — use these if you want to pass translations around as props
export type Lang = 'en' | 'ti';
export type TranslationPair = { en: string; ti: string };
