import { createAction, props } from "@ngrx/store";
import { User } from "src/app/interfaces/user.interface";



export const readUser = createAction(
    '[User component] Read User',
    props<{id: string}>()
);


export const readUserSuccess = createAction(
    '[User] read User Success',
    props<{user: User}>()
);

export const readUserFailure = createAction(
    '[User] read User Failure',
     props<{payload: any}>()

);