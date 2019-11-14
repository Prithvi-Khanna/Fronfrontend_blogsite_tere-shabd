import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetBlogService } from '../get-blog.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(  private route : ActivatedRoute, private router : Router, private service : GetBlogService , private service1 : TestService) { }
  user1;
  DATA_B : any;
  DATA_U : any;
  SEARCH;
  IsUser = false;
  IsBlog = false;
  ngOnInit() {
    let user = sessionStorage.getItem('username')
    this.user1=user;

    this.route.queryParams.subscribe ( param =>{
      this.SEARCH = param.blog;
      if(typeof(this.SEARCH) !== "undefined")
      {
        this.service.search(this.SEARCH).subscribe( data => {
          this.DATA_B = data;
          this.IsBlog = true;
          })
      }
      else if(typeof(param.user) !== "undefined")
      {
        this.SEARCH=param.user;
        this.service1.searchUser(this.SEARCH).subscribe( data => {
          this.DATA_U = data;
          this.IsUser = true;
         })
      } 
        })

        
  }

  add_blog()
  {
    location.assign('/add-blog');
  }

  viewProfile(name)
  {
    this.router.navigate(['/view-profile'] , { queryParams : {username1 : name}});
  }
}
