import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Users } from 'src/app/models/users';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.scss']
})
export class ManageusersComponent implements OnInit {

  @ViewChild('editModal')  editModal: NgbModal;
  @ViewChild('viewUserModal')  viewUserModal: NgbModal;
  @ViewChild('deleteUserModal')  deleteUserModal: NgbModal;

  // Used for pagination
  p: any;

  users: Array<Users> = [];
  updateUser: any;

  selectedUser:any

  constructor(private service: ServiceService, private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getUserData();


    this.updateUser = this.fb.group({
      name: [null],
      surname: [null],
      email: [null]
    })

  }

  getUserData() {
    this.service.getUserData().subscribe(data => {
      console.log(data);

      this.users = data;
      console.log(this.users);

    })
  }


  editmodal(item) {
    this.selectedUser = item;
    this.modalService.open(this.editModal , { size: <any>'lg' });
  }

  viewModal(item) {
    this.selectedUser = item;
    this.modalService.open(this.viewUserModal , { size: <any>'lg' });
  }

  deleteModal(item) {
    this.selectedUser = item;
    this.modalService.open(this.deleteUserModal , { size: <any>'lg' });
  }

  saveUpdateUser(updateUser) {

    let userData = updateUser;
    let userId = this.selectedUser.id;

    this.service.updateUser(userId, userData.value).subscribe(data => {
      console.log(data);

    })
  }

  deleteUser() {
    let userId = this.selectedUser.id;
    this.service.deleteUser(userId).subscribe(data => {
      console.log(data);
      this.getUserData();
    })
  }

}
