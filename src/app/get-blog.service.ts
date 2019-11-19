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

  view_followUser(username)
  {
      return this.http.get('http://localhost:2020/blog/view_followUser/'+username);
  }

  follow(username)
  {
    return this.http.get('http://localhost:2020/follow/add_follower/'+username);
  }

  unfollow(username)
  {
    return this.http.get('http://localhost:2020/follow/remove_follower/'+username);
  }

  checkfollow()
  {
    return this.http.get('http://localhost:2020/follow/check_follower');
  }

  get_followers()
  {
    return this.http.get('http://localhost:2020/follow/get_followers');
  }

  get_details(id)
  {
    return this.http.get('http://localhost:2020/details/get_likes/' + id);
  }
  like(id)
  {
    return this.http.post('http://localhost:2020/details/like', id , { headers : new HttpHeaders( { 'Content-Type' : 'application/json' } )});
  }

  dislike(id)
  {
    return this.http.post('http://localhost:2020/details/like' , id , { headers : new HttpHeaders( { 'Content-Type' : 'application/json' } )});
  }

  comment(id)
  {
    return this.http.post('http://localhost:2020/details/comment' , id , { headers : new HttpHeaders( { 'Content-Type' : 'application/json' } )});
  }

}
