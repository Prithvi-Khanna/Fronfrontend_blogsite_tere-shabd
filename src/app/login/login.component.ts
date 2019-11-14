import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  DATA : any;
  invalidLogin = false;

  constructor( private auth : AuthService , private router : Router , private service : TestService ){}

  ngOnInit() {
    sessionStorage.removeItem('username')
  }

  check_login(username,password) {

    (this.auth.authenticate(username,password).subscribe(
      data => {
        this.router.navigate(['/home'])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true

      }
    )
    );

  }

 Sign()
  {
    location.assign('/sign-up');
  }

}
