import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router:Router, private auth:AuthService){}

  goToHome(){
    this.router.navigate(["home"]);
  }

  logout(){
      this.auth.logout();
  }
}
