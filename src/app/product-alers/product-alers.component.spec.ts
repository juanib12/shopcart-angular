import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductAlersComponent } from './product-alers.component'

describe('ProductAlersComponent', () => {
  let component: ProductAlersComponent
  let fixture: ComponentFixture<ProductAlersComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAlersComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(ProductAlersComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
