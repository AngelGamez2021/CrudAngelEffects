import { Action, createReducer, on, State } from "@ngrx/store";
import { User } from "../../interfaces/user.interface";
import * as UserActions from '../actions';




export interface UsuariosState {
    usuarios: User[],
    loaded: boolean,
    loading: boolean,
    error: any
};

export const usuariosInitialState: UsuariosState = {
    usuarios: [],
    loaded: false,
    loading: false,
    error: null
};


export const _usuariosReducer = createReducer(
    usuariosInitialState,


    on(UserActions.readUsers, state => ({ ...state, loading: true })),

    on(UserActions.readUsersSuccess, (state, { users }) => ({
        ...state,
       loading: false,
       loaded: true,
       usuarios: [...users]

    })),


    on(
        UserActions.readUsersFailure,(state, {payload}) => ({
            ...state,
            loading: false,
            loaded: true,
            error: {
                url: payload.url,
                name: payload.name,
                message: payload.message
            }
        })
    )


);


export function usuariosReducer(state: UsuariosState | undefined, action: Action){
    return _usuariosReducer(state, action)
}