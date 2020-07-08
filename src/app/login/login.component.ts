import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {

  public checkUserForHome:boolean=false;
  public checkEmail:string;
  
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
    
   });

  onSubmit(){
    this.checkEmail=this.form.value.email;
    this.checkName();
    if(this.checkUserForHome){
      this.router.navigateByUrl('/home');
    }else{
      this.router.navigateByUrl('/error');
    }
    
  }

  constructor(private router: Router , private userServce: UserService) { }

  ngOnInit(): void {
  }

  checkName(){
    this.userServce.getUsers().map(
      user=>{
        if(this.checkEmail===user.email){
          this.checkUserForHome=true;
        }
      }
    );
  }

  

}
