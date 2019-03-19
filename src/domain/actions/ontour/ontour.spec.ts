import * as actions from './ontour';

describe('ontour actions', () => {
  it('should set events', () => {
    const events = [
      {
        title: 'Rock am Ring Festival',
        place: 'Germany',
      },
      {
        title: 'U2 at Wembley Stadium',
        place: 'London',
      },
    ];
    const expectedAction = {
      type: 'SET_EVENTS',
      events,
    };
    expect(actions.setEvents(events)).toEqual(expectedAction);
  });

  it('should set loader', () => {
    const loader = true;
    const expectedAction = {
      type: 'SET_LOADER',
      loader,
    };
    expect(actions.setLoader(loader)).toEqual(expectedAction);
  });
});
