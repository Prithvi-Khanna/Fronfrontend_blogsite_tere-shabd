import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetBlogService } from '../get-blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {

 
  constructor( private service : GetBlogService , private route : ActivatedRoute, private router : Router , private service1 : TestService ) { }
   USER;
   user;
   ID;
   blog;
  ngOnInit() {
 
    let user = sessionStorage.getItem('username')
    this.USER=user;

    this.service1.get1_user(this.USER).subscribe( data => {
      this.user=data;
    })

    this.route.queryParams.subscribe ( param =>{
      this.ID = param.id;
        })
    this.service.get_viewblog(this.ID).subscribe( data => {
      console.log(data);
      this.blog=data;
    }) 
   
    
    }

    submit()
    {
      console.log(this.blog);
       this.service.put_blog(this.blog).subscribe ( data => {
           alert("Your data has been changed");
           location.assign('/edit-blog');
       })
    }

}
