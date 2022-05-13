import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../interfaces/user.interface';
import { ModalEditUserComponent } from '../modal-edit-user/modal-edit-user.component';
import {ToastrService} from 'ngx-toastr'



@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  @Input() rowData!: any[];
  @Input() colData!: any[];


  gridData: any[] = [];
  titleData: any[] = [];
  infoData!: User[];
  seeData!: User[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _userService: UserService,
    private toastrSrv: ToastrService) { }

    

  ngOnInit(): void {

  }

  ngOnChanges() {
    this.gridData = this.rowData;
    this.titleData = this.colData;
  }



  removeUser(id: string) {
    this._userService.deleteUser(id).subscribe(data => {
      console.log(id);
      const newGridData = this.gridData.filter((dataId) => dataId.id !== id)
      console.log('nueva lista', newGridData);
    this.toastrSrv.error('removed to user list', 'User Remove')

      this.gridData = newGridData;


    }, error => {
      console.log(error);
    })
  }

  //al presionar el boton eliminar, creamos un nuevo array y filtramos el grid data 
  // y comparamos el id, y luego nuevamente usamos el grid data y 
  // eso sera igual al nuevo grid para que acutalice la tabla 



  editUser(id: string) {
    this._userService.updateUser(id).subscribe(data => {
      
      this.infoData = data;
      this.router.navigate(['/editUser', id]);


    }, error => {
      console.log(error);


    })

  }




  seeUser(id: string) {

if(!id){

return;


}else{
  this.router.navigate(['/user', id])
}


  }


}
