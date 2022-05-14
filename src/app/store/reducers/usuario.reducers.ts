import { Action, createReducer, on } from "@ngrx/store";
import { User } from "src/app/interfaces/user.interface";
import * as UserActions from "../actions";



export interface UsuarioState {
    id        : string,
    user      : User | null,
    loading   : boolean,
    loaded    : boolean,
    error     : any
}

export const usuarioInitialState: UsuarioState = {

    id        : '',
    user      : null,
    loading   : false,
    loaded    : false,
    error     : null,

}


const _usuarioReducer = createReducer(usuarioInitialState,

    on(UserActions.readUser, (state, { id }) => ({
        ...state,
        loading: true,
        id: id
    })),


    on(UserActions.readUserSuccess, (state, { user }) => ({
        ...state,
        loading: false,
        loaded: true,
        user: {...user}
    })),


    on(UserActions.readUserFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }

    }))

// deleteUser


// on(UserActions.deleteUser)





)
export function usuarioReducer(state: UsuarioState | undefined, action: Action) {
    return _usuarioReducer(state, action)
}
 
    
    
    