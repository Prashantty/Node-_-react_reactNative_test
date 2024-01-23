import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { AsyncComponent } from './async/async.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductCompComponent } from './product-comp/product-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AsyncComponent,
    ProductCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
