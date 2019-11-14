import { Component, OnInit } from '@angular/core';
import { posts } from '../posts';
import { TestService } from '../test.service';
import { error } from 'util';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  DATA : any;
  constructor(private service: TestService) { }
  post1 = new posts("","","");
  

  ngOnInit() {
  }

  Onsubmit()
  {
    this.service.post1_user(this.post1).subscribe(
      (data) => {
        console.log(data);
        location.assign('/login');
        } , 
        (error => {
          alert("Username Already Exists");
        })

    )
 
  }
}
