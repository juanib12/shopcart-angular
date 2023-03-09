import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Product, products } from '../products'
import { CartService } from '../cart.service'
@Component({  
  selector: 'app-product-details-component',
  templateUrl: './product-details-component.component.html',
  styleUrls: ['./product-details-component.component.css']
})
export class ProductDetailsComponentComponent implements OnInit{
  product: Product | undefined

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap
    const productIdFromRoute = Number(routeParams.get('productId'))

    this.product = products.find(product => product.id === productIdFromRoute)

  }

  addToCart(product: Product){
    this.cartService.addToCart(product)
    window.alert('Tu producto se añadio al carrito')
  }
}
