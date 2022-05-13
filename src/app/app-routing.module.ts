import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { ModalEditUserComponent } from './components/modal-edit-user/modal-edit-user.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'cardList', component: CardsComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'editUser/:id', component: ModalEditUserComponent},
  {path: 'deleteUser', component: ModalDeleteComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', pathMatch:'full', redirectTo: 'error'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
