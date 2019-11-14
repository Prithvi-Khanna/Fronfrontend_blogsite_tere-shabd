import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { posts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http : HttpClient) { }

  get1_user(username){
    return this.http.get('http://localhost:2020/users/get_user/'+username);
  }

  post1_user( posts : posts)
  {
    return this.http.post<any>('http://localhost:2020/users/post1' , posts , { headers : new HttpHeaders( { 'Content-Type' : 'application/json' } )});
  }

  put_user(user)
  {
   const headers = new HttpHeaders({Authorization : sessionStorage.getItem('basicauth')}); 
    return this.http.put<any>('http://localhost:2020/users/put_user' , user , {headers} );
  }

  searchUser(search)
  {
    return this.http.get('http://localhost:2020/users/searchUser/'+ search);
  }
}
