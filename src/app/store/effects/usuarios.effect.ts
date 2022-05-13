import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';
import * as UserActions from '../actions'
import { UserService } from '../../services/user.service'




@Injectable()

export class UsersEffects {


  readUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.readUsers),
      concatMap(() =>
        this.userService.getUsers().pipe(
          map((dataUsers) => UserActions.readUsersSuccess({ users: dataUsers })),
          catchError((error) => of(UserActions.readUsersFailure({ payload:error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) { }


}