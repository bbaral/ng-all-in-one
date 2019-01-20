import * as FromAuthActions from './auth.action';

export interface AuthState {
  token: string;
  authenticated: boolean;
}

const AuthInitialState: AuthState = {
  token: null,
  authenticated: false
};
export function authReducer(state = AuthInitialState, action: FromAuthActions.AuthActions) {
  switch (action.type) {
    case (FromAuthActions.SIGNUP):
    case (FromAuthActions.SIGNIN):
      return {
        ...state,
        authenticated: true
      };
    case (FromAuthActions.LOGOUT):
      return {
        ...state,
        token: null,
        authenticated: false
      };
    case (FromAuthActions.SET_TOKEN):
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }

}
