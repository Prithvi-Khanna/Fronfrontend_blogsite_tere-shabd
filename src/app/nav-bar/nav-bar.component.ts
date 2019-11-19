import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { AuthService } from '../auth.service';
import { GetBlogService } from '../get-blog.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  user1;
  SEARCH = "";
  TYPE = "Blogs";
  DATA : any; 
  constructor(private auth : AuthService , private service : GetBlogService , private service1 : TestService , private router : Router) {
  }
 ngOnInit() {

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }
  isUserLoggedIn1() {
    let user = sessionStorage.getItem('username')
    this.user1=user;
    return !(user === null)
  }

  search()
  {
  
    console.log(this.SEARCH);
    if(this.TYPE == "Blogs")
    {
        this.router.navigate(['/home'] , { queryParams : {blog : this.SEARCH}});
    }
    else
    {
      
      this.router.navigate(['/home'] , { queryParams : {user : this.SEARCH}});
    }    

  }

  clear()
  {
    location.assign('/home');
  }
  change()
  {
  }
}
