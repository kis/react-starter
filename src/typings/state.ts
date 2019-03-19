export interface OntourApp {
  artistInfo?: any;
  artists: any;
  cities: any;
  eventDetails?: any;
  events?: any;
  selectedArtist?: any;
  selectedEvent?: any;
  hottestCities?: any;
  hottestArtists?: any;
  performance?: any;
  isPerformance?: boolean;
  nearestLocations?: any;
  showNearestLocations?: any;
}

export interface SearchParams {
  fromDate?: any;
  searchItem?: any;
  searchType?: any;
  toDate?: any;
  nearestLocations?: any;
}

export interface Loader {
  loader: any;
}

export interface Like {
  favoriteEvents?: any[];
}

export interface Auth {
  errors?: any;
  logged?: boolean;
  token?: string;
  user?: User | undefined;
}

export interface User {
  id?: string;
  email?: string;
  username?: string;
  password?: string;
}

export interface State {
  auth: Auth;
  likes: Like;
  loader: Loader;
  notifications?: any[];
  ontourApp: OntourApp;
  onboarding: any;
  searchParams: SearchParams;
}
