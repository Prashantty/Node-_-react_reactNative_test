import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { product } from 'src/Product';

@Injectable({
  providedIn: 'root'
})
export class CallServiceService {

  constructor(private _http : HttpClient) { }

  baseUrls = "http://localhost:5281/api/roles/";

  getProducts()
  {
    return this._http.get<product[]>(this.baseUrls);
  }

  getProductById(id : number)
  {
    return this._http.get<product>(this.baseUrls + id);
  }
  DeleteProductBy(id : number)
  {
    return this._http.delete<product>(this.baseUrls + id)
  }

  AddProduct(product : product)
  {
    return this._http.post<product>(this.baseUrls, 
      JSON.stringify(product), {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      }
    )} 
    
  EditProduct(id:  number, product : product)
  {
    return this._http.put<product>(this.baseUrls + id, product);
  }

}
