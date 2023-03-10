import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username="";
  password="";
  errorMessage = "";

  constructor(private auth:AuthService, private router:Router){}

  ngOnInit(): void{
  }

  login(){
    if(this.username.trim().length === 0){
      this.errorMessage = "User is required";
    }else if(this.password.trim().length === 0){
      this.errorMessage = "Password is required";
    }else{
      this.errorMessage ="";
      let res = this.auth.login(this.username,this.password);
      if(res === 200){
        this.router.navigate(['home']);
      }

      if(res === 403){
        this.errorMessage = "Invalid Credentials";
      }
    }
  }
}
