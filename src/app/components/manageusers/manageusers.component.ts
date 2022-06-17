import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.scss']
})
export class ManageusersComponent implements OnInit {

  users: any;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.service.getUserData().subscribe(data => {
      console.log(data);

      this.users = data;
      console.log(this.users);

    })
  }

}
