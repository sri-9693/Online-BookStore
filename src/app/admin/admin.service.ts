import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  
  constructor(private httpClient:HttpClient){}

  
  public onsubmitService(txt1: string, txt2: string, txt3: string):Observable<any>{
    const url='http://localhost:8087/admin/signup';
    const data = {
      "name": txt1,
      "email": txt2,
      "password": txt3,
    };

    return this.httpClient.post(url,data);
  }


  public onLoginService(txt1: string, txt2: string):Observable<any> {
    const url='http://localhost:8087/admin/login';
    const data = {
      "email": txt1,
      "password": txt2,
      
    };

    return this.httpClient.post(url,data);
  }

  public insertBook(authorId:string,publisherId:string,title:string,category:string,link:string,price:number):Observable<any>
  {

    const url = 'http://localhost:8087/book/';
    const data = {
        "authorId": {
            "authorID": authorId
        },
        "publisherId": {
            "publisherID": publisherId
        },
        "title": title,
        "category": category,
        "link": link,
        "price": price
    };

    return this.httpClient.post(url,data);
  }

  public updateBook(bookId:number,quantity:number):Observable<any>
  {

    const url = 'http://localhost:8087/inventory/updateinventory/'+bookId+'/'+quantity;
    const options = {
      withCredentials: true
    };

    return this.httpClient.get(url,options);
  }



  public showInventory() : Observable<any>
  {
    const options={
      withCredentials:true
    }
      return this.httpClient.get('http://localhost:8087/inventory',options);
  }

  public showPopularBooks() : Observable<any>
  {
    const options={
      withCredentials:true
    }
      return this.httpClient.get('http://localhost:8087/admin/popularbooks',options);
  }

  public logOut():Observable<any>{
    const url='http://localhost:8087/admin/logout';
    const options = {

      withCredentials: true

    };
    return this.httpClient.get(url,options);
  }
}
