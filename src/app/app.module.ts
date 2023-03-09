import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProductComponent } from './product/product.component'
import { TopbarComponent } from './topbar/topbar.component'
import { ProductAlersComponent } from './product-alers/product-alers.component'
import {ProductDetailsComponentComponent } from './product-details-component/product-details-component.component'
import { CartComponent } from './cart/cart.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TopbarComponent,
    ProductAlersComponent,
    ProductDetailsComponentComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: ProductComponent},
      {path: 'products/:productId', component: ProductDetailsComponentComponent },
      {path: 'cart', component: CartComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
