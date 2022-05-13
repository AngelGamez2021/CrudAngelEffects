import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of, tap } from 'rxjs';
import { UserService } from '../../services/user.service';
import * as UserActions from '../actions/usuario.actions';




@Injectable()

export class UserEffects {

constructor(
  private actions$: Actions,
  private userService: UserService,
) { }

  readUser$ = createEffect(
    () => this.actions$.pipe(
      ofType(UserActions.readUser),
      concatMap((action) => this.userService.getUserById(action.id)
      .pipe(
          map(dataUser => UserActions.readUserSuccess({ user: dataUser })),
          // POSIBLEMENTE EL ERRRO SEA POR LO QUE SE QUITO AHORITA PARA LOS ERRORES
          catchError((error) => of(UserActions.readUserFailure({ payload:error })))
        )
      )
    )
  );


//   cargarUsuario$ = createEffect(
//     () => this.actions$.pipe(
//         ofType(usuarioActions.cargarUsuario),
//         concatMap((action) => this.usuariosService.getUserById(action.id)
//             .pipe(
//                 // tap(data => console.log('getUsers effects', data))...esto sirve para imprimir aca en el effects
//                 map(user => usuarioActions.cargarUsuarioSuccess({ usuario: user })),
//                 catchError(error => of(usuarioActions.cargarUsuarioError({ payload: error })))
//             ))));





}