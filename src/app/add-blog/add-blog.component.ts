import { Component, OnInit } from '@angular/core';
import { blog } from '../blog';
import { GetBlogService } from '../get-blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {

  constructor(private service : GetBlogService) { }
  
  BLOG = new blog("" , "",false);
  ngOnInit() {
 
  }

  onsubmit()
  {
    
    this.service.post_blog(this.BLOG).subscribe( data => {
     alert("Your Blog has been added..");
     location.assign('/add-blog');
      
    })
  }
}
