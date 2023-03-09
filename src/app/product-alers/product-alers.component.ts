import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Product } from '../products'

@Component({
  selector: 'app-product-alers',
  templateUrl: './product-alers.component.html',
  styleUrls: ['./product-alers.component.css']
})
export class ProductAlersComponent {
  @Input() product!: Product | undefined
  @Output() notify = new EventEmitter()
}
