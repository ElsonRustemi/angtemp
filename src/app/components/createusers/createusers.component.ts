import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-createusers',
  templateUrl: './createusers.component.html',
  styleUrls: ['./createusers.component.scss']
})
export class CreateusersComponent implements OnInit {

  userForm: any;

  constructor(private fb: FormBuilder, private service: ServiceService, private router: Router) { }

  ngOnInit(): void {


    this.userForm = this.fb.group({
      name: [null],
      surname: [null],
      email: [null]
    })


  }

  addUser() {
    console.log(this.userForm.value);


    this.service.addUser(this.userForm.value).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/manageuser');
    })

    this.userForm.reset();
  }


}
