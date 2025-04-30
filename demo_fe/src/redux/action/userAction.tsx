// userActions.ts
import { UserActionTypes } from '../../type/UserType';  

// Sửa kiểu trả về cho setUser
export const doLogin = (account: { access_token: string; refresh_token: string; username: string; image: string; role: string }): UserActionTypes => ({
  type: 'SET_USER',
  payload: { account },
});

// Sửa logoutUser để trả về action đúng kiểu UserActionTypes
export const logoutUser = (): UserActionTypes => ({
  type: 'LOGOUT_USER',
});
