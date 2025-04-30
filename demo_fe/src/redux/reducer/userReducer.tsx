// userReducer.ts
import { UserState, SET_USER, LOGOUT_USER, UserActionTypes } from '../../type/UserType';

const initialState: UserState = {
  account: {
    access_token: "",
    refresh_token: "",
    username: "",
    image: "",
    role: "",
  },
  isAuthenticated: false,
};

// Chỉ định rõ ràng kiểu state là UserState
const userReducer = (state: UserState = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case SET_USER:
      return { ...state, account: action.payload.account, isAuthenticated: true };
    case LOGOUT_USER:
      return { ...initialState }; // reset về giá trị mặc định
    default:
      return state;
  }
};

export default userReducer;
