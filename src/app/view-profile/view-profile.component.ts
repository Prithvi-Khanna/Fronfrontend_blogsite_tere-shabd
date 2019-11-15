import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../test.service';
import { GetBlogService } from '../get-blog.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  constructor(private route : ActivatedRoute , private service : TestService , private service1 : GetBlogService , private router :Router) { }
  USERNAME;
  DATA;
  blog1;
  Isfollow = false;
  followers;
  CUR_USERNAME ;
  ngOnInit() {
    this.route.queryParams.subscribe ( param =>{
       this.USERNAME =param.username1;
 
       this.CUR_USERNAME = sessionStorage.getItem('username');

       console.log(this.CUR_USERNAME);
       console.log(this.USERNAME);
       if( this.USERNAME == this.CUR_USERNAME)
       {
        location.assign('/profile'); 
       }
      
   else
  {
    this.service1.checkfollow().subscribe( data => {
       this.followers = data;
       for( let i= 0 ;i<this.followers.length;i++)
       {
         if(this.followers[i].fser1.username == this.USERNAME)
         {
           this.Isfollow = true;
           this.service1.view_followUser(this.USERNAME).subscribe( data => {
            this.DATA = data;
            console.log(this.DATA);

            
            })
            break;
          }
       }
       if(this.Isfollow == false)
       {
        this.service1.view_user(this.USERNAME).subscribe( data => {
          this.DATA = data;
          console.log(this.DATA);
          })
       }
    })
  }
  })
  }

  viewblog(id)
  {
    this.service1.get_viewblog(id).subscribe( data => {
       this.blog1 = data;
    })
  }

  follow()
  {
    this.service1.follow(this.USERNAME).subscribe( data => {
      this.Isfollow=true;
      alert("Now... you are a follower");
      this.ngOnInit();
    })
   
   }

  unfollow()
  {
    this.service1.unfollow(this.USERNAME).subscribe( data => {
      this.Isfollow=false;
      alert("Now... you are NOT a follower");
      location.assign('/home');  
    })
  
    
  }

}
