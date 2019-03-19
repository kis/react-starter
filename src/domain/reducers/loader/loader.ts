const initConfig = {
  loader: false,
};

export default function loader(state = initConfig, action: any) {
  switch (action.type) {
    case 'SET_LOADER':
      return { ...state, loader: action.loader };

    default:
      return state;
  }
}
