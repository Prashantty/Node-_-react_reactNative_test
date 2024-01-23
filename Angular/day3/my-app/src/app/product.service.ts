import { Injectable } from '@angular/core';
import { product } from 'src/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : product[] = [];
  product : product = {id:0 , name:"", price:0};

  constructor() { 
    this.LoadProducts();
  }
  LoadProducts ()
  {
    this.products = 
    [
      {id: 10 ,name : "Mouse" , price : 1000},
{id: 11 ,name : "Plotter" , price : 1000},

{id: 12 ,name : "Scanner" , price : 1000},

{id: 13 ,name : "Printer" , price : 1000},

{id: 14 ,name : "Monitor" , price : 1000}

    ];
 
  }

  getProducts() : product[]
  {
    return this.products;
  }

  AddProduct(product : product)
{
this.products.push(product);
}

GetProductById(id : number ): product
  {
    for(let product of this.products)
    {
      if(product.id == id)
      this.product = product;
      break;
    }
    return this.product; 
  }


  DeleteProduct(id : number)
  {  
 //  let product =  this.GetProductById(id);
  //  let position =0;
   let index =  this.products.findIndex(c=> c.id == id);
   //position = this.products.indexOf(this.product);
    console.log(index);
   this.products.splice(index,1);

  }

  EditProduct(id : number, product : product)
  {
    
    let position =0;
    console.log(id);
    console.log(product)
    let temp =  this.products.find(c=>id == id);
    
          
      console.log(temp)

      this.products[position] = product;
  }

 
  
}

