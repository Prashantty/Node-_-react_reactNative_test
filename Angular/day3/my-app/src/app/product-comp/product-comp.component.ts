import { Component ,NgModule, OnInit } from '@angular/core';
import { CallServiceService } from '../call-service.service';
import { product } from 'src/Product';

@Component({
  selector: 'app-product-comp',
  templateUrl: './product-comp.component.html',
  styleUrls: ['./product-comp.component.css']
})
export class ProductCompComponent implements OnInit  {

  /**
   *
   */
  constructor(private _prodeuctServices : CallServiceService ) {
        
  }
   
   products: product[] = [];

  ngOnInit(): void {
    // this.GetProduct();
    // this.GetProductById();
    // this.DeleteProduct();
    
   
  }

  GetProduct()
  {
  this._prodeuctServices.getProducts().subscribe(res =>
    {
      console.log(res)
      this.products = res;
      console.log("List of Product");
    });
  }

  product: product = {id:0, name:"" ,price:0};
  GetProductById()
  {
    this._prodeuctServices.getProductById(12).subscribe(res =>
      {
        console.log(res);
        this.product = res;
        console.log("Product By Id")

      })
  }

  DeleteProduct()
  {
    this._prodeuctServices.DeleteProductBy(12).subscribe(res =>
      {
        console.log("Product Deleted");
               
      })
  }

  AddProduct()
  {
    let product = {id:15 , name:"UPS" , price:10000};
    this._prodeuctServices.AddProduct(product).subscribe(res =>
      {
        console.log("Product Added ");
      })
  }
  EditProduct()
  {
    let product = {id: 12 , name:"sjdfjh" , price:19000}
    this._prodeuctServices.EditProduct(12 ,product).subscribe(res =>
      {
        console.log("Edited");
      })
  }
  


}
