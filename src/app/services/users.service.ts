import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { DataService } from './data.service';






@Injectable({
  providedIn: 'root'
})
export class UsersService {
  title:any;
  
  constructor(private http:HttpClient) { }
  
 
  getList(): Observable<any> {
    // return this.http.get('https://www.googleapis.com/books/v1/volumes?q=marina');
    return this.http.get('https://www.googleapis.com/books/v1/volumes',{params:{q: this.title},});
 }
 setparram(name){
  this.title=name;
}

}
