export interface SearchParamsProps {
  actions: any;
  searchType: any;
  searchItem: any;
  fromDate: any;
  dispatch: any;
  toDate: any;
  onboarding: any;
  showNearestLocations: any;
}

export interface CalendarProps {
  fromDate: any;
  toDate: any;
  onSelectFromDate: any;
  onSelectToDate: any;
}

export interface CalendarState {
  activeDate: any;
}

export interface SearchToggleProps {
  artistClick: any;
  isArtistActive: any;
  cityClick: any;
}
