// ============================================================
//  TWAS — Shared TypeScript interfaces
//  All data shapes live here so every file stays in sync.
// ============================================================

/** A single photo inside an event gallery */
export interface Photo {
  /** Path relative to /public, e.g. "/2017/20170429_benefit1.jpg" */
  src:   string;
  alt:   string;
  /** Human-readable event label shown in the image overlay */
  event: string;
  /** Human-readable date shown in the image overlay */
  date:  string;
}

/** One organisation event (can hold photos, a video, or both) */
export interface OrgEvent {
  /** Unique slug used as an HTML anchor, e.g. "womens-dinner-2017" */
  id:            string;
  title:         string;
  /** ISO 8601 date string — used for sorting */
  date:          string;
  /** Displayed date string, e.g. "April 29, 2017" */
  formattedDate: string;
  description:   string;
  /** Comma-separated tags for filtering / display */
  tags?:         string[];
  photos?:       Photo[];
  /** YouTube embed URL, e.g. "https://www.youtube.com/embed/VIDEO_ID" */
  videoEmbedUrl?: string;
}

/** A board or committee member */
export interface BoardMember {
  id:       string;
  name:     string;
  /** Title / position, e.g. "President" */
  role:     string;
  bio:      string;
  /** 1–2 initials shown in the avatar circle */
  initials: string;
  /** Optional headshot path relative to /public */
  photo?:   string;
}

/** An upcoming scheduled event or recurring meeting */
export interface ScheduleItem {
  id:           string;
  /** ISO 8601 date, e.g. "2026-03-19" */
  date:         string;
  /** Display time, e.g. "7:00 PM" */
  time?:        string;
  title:        string;
  description?: string;
  /** Venue name or "Location TBD" */
  location?:    string;
  /** Controls the color badge shown next to the item */
  type:         'meeting' | 'event' | 'cultural';
}

/** A published set of meeting minutes */
export interface MeetingNote {
  id:          string;
  /** ISO 8601 date string */
  date:        string;
  title:       string;
  /** Short one-line summary */
  summary:     string;
  /** Optional link to a PDF or document */
  fileUrl?:    string;
}
