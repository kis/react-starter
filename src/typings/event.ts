export interface EventDetails {
  performance?: any[];
  performers?: any[];
  title?: string;
  place?: any;
  venue: Venue;
  start?: any;
  uri?: any;
  location?: any;
  displayName?: string;
  type?: any;
  ageRestriction?: any;
  likesCount?: any;
  like?: any;
  id?: any;
}

export interface Venue {
  uri?: string;
  displayName?: string;
  description?: string;
  capacity?: string;
  website?: string;
  phone?: string;
  street?: string;
  zip?: string;
  lng?: any;
  lat?: any;
}

export interface EventProps {
  actions?: any;
  eventDetails?: any;
}
