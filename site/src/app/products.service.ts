import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  api= "http://localhost:8081/products";
  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  constructor(private http:HttpClient) { }
  
  /** 
  public getAll(): Observable<object>{
    return this.http.get<Object>(this.api+"/paged",this.httpOptions);

  }
  */
  public list(): Observable<String[]> {
    return this.http.get<String[]>(this.api + '/list', this.httpOptions);
  }
}
