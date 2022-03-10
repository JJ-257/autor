import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authentocationService: LoginuserService,
    private router: Router) {

  }

  ngOnInit() {
    this.authentocationService.logout();
    this.router.navigate(['login']);
  }

}