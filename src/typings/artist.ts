export interface ArtistType {
  url?: string;
  mbid?: string;
  name?: string;
  ontour?: string;
  image?: ArtistImage[];
  bio: ArtistBio;
  tags: ArtistTags;
  stats: ArtistStats;
  similar: ArtistSimilar;
  genre?: any;
  streamable?: string;
}

export interface ArtistShortType {
  displayName?: string;
  id?: number;
  identifier?: Identifier[];
  onTourUntil?: any;
  uri?: string;
}

export interface Identifier {
  eventsHref?: string;
  href?: string;
  mbid?: string;
  setlistsHref?: string;
}

export interface ArtistBio {
  links?: object;
  published?: string;
  summary?: string;
  content: string;
}

export interface ArtistTags {
  tag: object[];
}

export interface ArtistStats {
  listeners: string;
  playcount: string;
}

export interface ArtistSimilar {
  artist: any[];
}

export interface ArtistImage {
  '#text'?: string;
  size?: string;
}

export interface ArtistProps {
  actions: any;
  artistInfo: ArtistType;
}

export interface ArtistState {
  backgroundColor: any;
}
