import { Component  , OnInit} from '@angular/core';
import { product } from 'src/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers :[ProductService]
})
export class ProductComponent implements OnInit{

  products : product [] =[];
  

  product :product ={id:0, name:"", price:0};
  
  constructor( private _productservices : ProductService) {
    
    
  }

 ngOnInit() :void 
 {
  this.getProducts();
 }

 getProducts()
 {
  this.products= this._productservices.getProducts();
 }
 AddProduct()
{
  this.product = {id:15, name : "UPS", price:1000};
  this._productservices.AddProduct(this.product)
}

GetProductById()
{
  console.log("inside the GetProductById in Product.ts component");
  this.product = this._productservices.GetProductById(1);
}

DeleteProduct()
  {this._productservices.DeleteProduct(12);
 
  }

  EditProduct()
  {
    this.product = {id:11, name : "Keybord", price:1000};
    this._productservices.EditProduct(11, this.product )
  }



}   
