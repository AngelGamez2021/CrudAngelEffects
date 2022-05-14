import { createAction, props } from "@ngrx/store";
import { User } from "src/app/interfaces/user.interface";



export const readUser = createAction(
    '[User] Read User',
    props<{ id: string }>()
);


export const readUserSuccess = createAction(
    '[User] read User Success',
    props<{ user: User }>()
);

export const readUserFailure = createAction(
    '[User] read User Failure',
    props<{ payload: any }>()

);


//Delete user


export const deleteUser = createAction(
    '[User] Delete User',
    props<{ id: string }>()
);

export const deleteUserSuccess = createAction(
    '[User] Delete User Success',
    props<{user: User}>()
);

export const deleteUserFailure = createAction(
    '[User] Delete User Failure',
    props<{ payload: any }>()
)


