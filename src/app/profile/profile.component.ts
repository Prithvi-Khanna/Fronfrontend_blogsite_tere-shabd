import { Component, OnInit } from '@angular/core';
import { Profile } from 'selenium-webdriver/firefox';
import { blog } from '../blog';
import { GetBlogService } from '../get-blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private service : GetBlogService , private router : Router) { }
  DATA : any;
  blog1;
  ngOnInit() {
    
       this.service.get_bloguser().subscribe( data =>
        {
          console.log(data);
         this.DATA = data;
        })
  }

  editprofile()
  {
    location.assign('/edit-profile');
  }

  editblog(id)
  {
    this.router.navigate(['/edit-blog'] , { queryParams : {id : id }});
    
  }
  viewblog(id)
  {
    this.service.get_viewblog(id).subscribe( data => {
       this.blog1 = data;
    })
  }
  
  deleteblog(id)
  {
    
  }
  
}
