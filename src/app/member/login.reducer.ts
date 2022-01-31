import { Action, createReducer, on } from '@ngrx/store';
import { LOGIN, LOGOUT} from './login.action';
import * as LoginActions from './login.action'
import { login } from './login.model';
 
export const initialState: login = {
    token: '',
    userRole: ''
};
  
const newState = (state : any, newData: any) => {
    return Object.assign({}, state, newData)
}
 
export function LoginReducer(state: login = initialState, action: any) {
  console.log(action, state)
  switch(action.type) {
      case LoginActions.LOGIN:
          return newState(state, {token: action.payload.token, userRole: action.payload.userRole})
    case LoginActions.LOGOUT:
        return newState(state, {token: '', userRole: ''})
    default:
        return state;
        }
}