import { createAction, Action } from '@ngrx/store';
import { login } from './login.model';

export const LOGIN = '[Login Component] Login';
export const LOGOUT = '[Login Component] Logout';

export class Login implements Action {
    readonly type = LOGIN

    constructor(public payload: any) {}
}

export class Logout implements Action {
    readonly type = LOGOUT
}

export type Actions = Login | Logout