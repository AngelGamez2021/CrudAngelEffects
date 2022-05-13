import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';
import { readUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user!: User | null;
  loading: boolean = false;
  error: any;

  constructor(private router: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit(): void {


    this.router.params.subscribe(({id}) =>{
      this.store.dispatch(readUser({id}))
    })

    this.userView();

  }

  userView(){
    this.store.select('usuario').subscribe(({user, loading, error})=> {
      this.user = user;
      this.loading = loading;
      this.error = error
    })
  }



}
