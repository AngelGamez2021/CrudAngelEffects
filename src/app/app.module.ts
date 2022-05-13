import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; 



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CardsComponent } from './components/cards/cards.component';
import { ModalEditUserComponent } from './components/modal-edit-user/modal-edit-user.component';
import { UserComponent } from './components/user/user.component';

import {HttpClientModule} from '@angular/common/http'

//formularios
import { ReactiveFormsModule } from '@angular/forms';
import { UserTableComponent } from './components/user-table/user-table.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { ErrorComponent } from './components/error/error.component';

//NgRx
import { AppReducers } from './store/app.reducers';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects'
import { EffectsArray } from './store/effects';
import {ToastrModule} from 'ngx-toastr'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    CardsComponent,
    ModalEditUserComponent,
    UserComponent,
    UserTableComponent,
    ModalDeleteComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(AppReducers),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    NgbModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
