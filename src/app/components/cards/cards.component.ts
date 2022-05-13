import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/services/user.service';
import { readUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';
import { User } from '../../interfaces/user.interface';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  loading: boolean = false;
  error: any;
  rowData: User[] = [];
  colData: any[] = [
    {
      text: 'Firts Name',
      type: 'first_name',
    },
    {
      text: 'Last Name',
      type: 'last_name',
    },
    {
      text: 'Email',
      type: 'email',
    },
    {
      text: 'Card',
    },
    {
      text: 'Edit',
    },
    {
      text: 'Delete',
    },

  ];

  constructor(private _userService: UserService,
    private store: Store<AppState>) { }

  ngOnInit(): void {

    this.userList();
    this.store.dispatch(readUsers());

  }
  
   userList(){
    this.store.select('usuarios').subscribe(({usuarios, loading, error}) =>{
     this.rowData = usuarios;
     this.loading = loading,
     this.error = error
     console.log('Informacion de usuarios',usuarios);
    })
  }



} 
