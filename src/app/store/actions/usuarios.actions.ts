import { createAction, props } from "@ngrx/store";
import { User } from "src/app/interfaces/user.interface";



export const readUsers = createAction ('[User component] Read Users');

export const readUsersSuccess = createAction(
    '[Users] Read Users Success',
    props<{users: User[]}>()
);

export const readUsersFailure = createAction (
    '[Users] Read Users Failure',
    props<{payload: any}>()
);