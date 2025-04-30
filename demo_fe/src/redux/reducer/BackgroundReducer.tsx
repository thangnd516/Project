import { TOGGLE_BACKGROUND } from '../../type/UserType';
interface BackgroundState {
  isBlackBackground: boolean;
}

const initialState: BackgroundState = {
  isBlackBackground: false,
};

const backgroundReducer = (state = initialState, action: any): BackgroundState => {
  switch (action.type) {
    case TOGGLE_BACKGROUND:
      return {
        ...state,
        isBlackBackground: !state.isBlackBackground,
      };
    default:
      return state;
  }
};

export default backgroundReducer;
