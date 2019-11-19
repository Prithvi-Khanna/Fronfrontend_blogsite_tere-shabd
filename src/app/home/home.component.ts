import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetBlogService } from '../get-blog.service';
import { TestService } from '../test.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(  private route : ActivatedRoute, private router : Router, private service : GetBlogService , private service1 : TestService,private auth: AuthService) { }
  user1;
  DATA_B : any;
  DATA_U : any;
  DATA_H : any;
  D1;
  SEARCH;
  comm =  "";
  IsUser = false;
  IsBlog = false;
  notFound = false;
  details = {
    likes : false,
    dislikes : false,
    comment : "",
    id : null ,
    blog : null ,
    users : null
  };
  ngOnInit() {

     if(this.auth.isUserLoggedIn()){
      let user = sessionStorage.getItem('username')
      this.user1=user;
  
      this.route.queryParams.subscribe ( param =>{
        this.SEARCH = param.blog;
        if(typeof(this.SEARCH) !== "undefined")
        {
          this.service.search(this.SEARCH).subscribe( (data) => {
            this.DATA_B = data;
            if(this.DATA_B[0].title == "null")
            {
              this.IsBlog = false;
              this.notFound =true;
            }  
            else{
              this.IsBlog = true;
            }
          },
          (error =>{
               this.notFound = true;
          })
          )
        }
        else if(typeof(param.user) !== "undefined")
        {
          this.SEARCH=param.user;
          this.service1.searchUser(this.SEARCH).subscribe( data => {
            this.DATA_U = data;
            this.IsUser = true;
            if(this.DATA_U[0].username == "null")
            {
              this.IsUser = false;
              this.notFound =true;
            }  
            else{
              this.IsUser = true;
            }
          },
          (error =>{
               this.notFound = true;
          })
          )
        } 
          })
  
       this.service.get_followers().subscribe( data => {
         this.DATA_H=data;   
         console.log(this.DATA_H); 
       })  
  
      
     }else{
      alert("Unauthorised Access");
      this.router.navigate(['login']);
     }
        
  }

  add_blog()
  {
    location.assign('/add-blog');
  }

  viewProfile(name)
  {
    this.router.navigate(['/view-profile'] , { queryParams : {username1 : name}});
  }

  like(id)
  {
    this.service.get_details(id).subscribe( data => {
           this.D1 = data;
           
           if( this.D1.likes === false)
           {
             this.details.likes = true;
             this.details.dislikes = false;
            
           }
           else
           {
            this.details.likes = false;
           }
   
           this.service.get_viewblog(id).subscribe( data=> {
            this.details.blog = data; 
        this.service.dislike(this.details).subscribe( data => {
          console.log("DONE");
          alert("You reacted..");
          location.assign('/home');
        })
      })
  })


  }

  dislike(id)
  {
    this.service.get_details(id).subscribe( data => {
           this.D1 = data;
           if( this.D1.dislikes == false)
           {
             this.details.dislikes = true;
             this.details.likes = false;
           }
           else
           {
            this.details.dislikes = false;
           }

       this.service.get_viewblog(id).subscribe( data=> {
        this.details.blog = data; 
    this.service.dislike(this.details).subscribe( data => {
      console.log("DONE");
    })
  })
  })
  alert("You reacted..");
  location.assign('/home');
  }
  comment(id)
  {
  
    this.details.comment = this.comm;
    this.service.get_viewblog(id).subscribe( data=> {
      this.details.blog = data; 
      console.log(this.details);
      this.service.comment(this.details).subscribe ( data => 
        {
          console.log(data);
         alert("Comment added..");
         location.assign('/home');
        })
    })
 
  }
}
