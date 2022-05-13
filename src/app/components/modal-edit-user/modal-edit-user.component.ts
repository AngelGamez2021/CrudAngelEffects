import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modal-edit-user',
  templateUrl: './modal-edit-user.component.html',
  styleUrls: ['./modal-edit-user.component.css']
})
export class ModalEditUserComponent implements OnInit {

  // labels = {
  //   first_name: '',
  //   last_name: '',
  //   ast_name: '',
  //   email: '',
  // }

  // id: string | null;

  // constructor(private aRoute: ActivatedRoute,
  //   private _userService: UserService) {

  //   this.id = this.aRoute.snapshot.paramMap.get('id')
  //   console.log('id de usuario a editar', this.id);
  // }

   ngOnInit(): void {

  //   this.userEdit();
   }

  // userEdit() {
  //   if (this.id != null) {

  //     this._userService.updateUser(this.id).subscribe(data => {
  //       this.labels = data;
  //       console.log('Usuario a editar', this.labels);

  //     })

  //   }
  // }

}
