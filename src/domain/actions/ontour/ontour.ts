import * as types from './types';

export function requestSetInitLocation() {
  return {
    type: types.REQUEST_SET_INIT_LOCATION,
  };
}

export function initLocation(location: any) {
  return {
    type: types.INIT_LOCATION,
    location,
  };
}

export function clearAutocomplete() {
  return {
    type: types.CLEAR_AUTOCOMPLETE,
  };
}

export function setEvents(events: any) {
  return {
    type: types.SET_EVENTS,
    events,
  };
}

export function setNearestLocations(nearestLocations: any) {
  return {
    type: types.SET_NEAREST_LOCATIONS,
    nearestLocations,
  };
}

export function showNearestLocations(showNearestLocations: any) {
  return {
    type: types.SHOW_NEAREST_LOCATIONS,
    showNearestLocations,
  };
}

export function setHottestArtists(artistsList: any) {
  return {
    type: types.SET_HOTTEST_ARTISTS,
    artistsList,
  };
}

export function setHottestCities(citiesList: any) {
  return {
    type: types.SET_HOTTEST_CITIES,
    citiesList,
  };
}

export function setHottestDefault() {
  return {
    type: types.SET_HOTTEST_DEFAULT,
  };
}

export function setPerformance(performance: any) {
  return {
    type: types.SET_PERFORMANCE,
    performance,
  };
}

export function selectEvent(event: any) {
  return {
    type: types.SELECT_EVENT,
    event,
  };
}

export function setLoader(loader: boolean) {
  return {
    type: types.SET_LOADER,
    loader,
  };
}

export function clearEntities() {
  return {
    type: types.CLEAR_ENTITIES,
  };
}
