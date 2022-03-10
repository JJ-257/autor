/*import { Component, OnInit } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User;

  constructor(private loginuserservice: LoginuserService) { }

  ngOnInit(): void {
  }

  userPrijava(){
    console.log(this.user);
    this.loginuserservice.userPrijava(this.user).subscribe(data=>{
      alert("Prijava uspjesna")
    }, error=>alert("Unesite tocno korisnicko ime i lozinku"));
  }


}*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

 // username = 'javainuse'
 // password = ''
  /*public user: User = {
    korisnickoIme: "",
    lozinka: ""

  }*/
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  username: string;
  password : string;/*
  
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: LoginuserService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice?.userPrijava(this.user)
    ) {
      this.router.navigate(['/login'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }*/

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: LoginuserService) {   }

  ngOnInit() {
  }

  handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['login/autor/sviautori']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }
}


