import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product();
  @Output() notifyAdd: EventEmitter<string>= new EventEmitter<string>();

  productQunt: string[] = ["1","2","3","4","5","6","7","8","9","10"];

  constructor(private cartService:CartService,private productService:ProductService) { }

  ngOnInit(): void {
  }

  onSubmit(cartProduct: Product, event: any): boolean{
    const selectedOption = event.target[0].options[event.target[0].options.selectedIndex].value;
      cartProduct.quantity = parseInt(selectedOption);
      this.notifyAdd.emit(this.cartService.add(cartProduct));
     return false;
  }
  
}
