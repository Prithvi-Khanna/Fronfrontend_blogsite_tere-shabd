import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';
import { GetBlogService } from '../get-blog.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  constructor(private route : ActivatedRoute , private service : TestService , private service1 : GetBlogService) { }
  USERNAME;
  DATA;
  Isfollow = false;
  ngOnInit() {
    this.route.queryParams.subscribe ( param =>{
       this.USERNAME =param.username1;
       this.service1.view_user(this.USERNAME).subscribe( data => {
       this.DATA = data;
       console.log(this.DATA);
       })
    }) 
  }

}
