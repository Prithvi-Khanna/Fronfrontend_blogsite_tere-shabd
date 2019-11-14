import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetBlogService {

  constructor(private http : HttpClient) { }
  post_blog(blog)
  {
    return this.http.post<any>('http://localhost:2020/blog/post1' , blog , { headers : new HttpHeaders( { 'Content-Type' : 'application/json' } )});
  }

  get_bloguser()
  {
    return this.http.get('http://localhost:2020/blog/get_userblog');
  }
  get_viewblog(id)
  {
    return this.http.get('http://localhost:2020/blog/get_viewblog/'+ id);
  }

  put_blog(blog)
  {
    return this.http.put<any>('http://localhost:2020/blog/put_blog' , blog);
  }

  search(search1)
  {
    return this.http.get('http://localhost:2020/blog/searchblog/'+ search1);
  }

  view_user(username)
  {
      return this.http.get('http://localhost:2020/blog/view_user/'+username);
  }
}
