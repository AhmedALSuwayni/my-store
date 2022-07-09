import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productQunt: string[] = ["1","2","3","4","5","6","7","8","9","10"];
  constructor(private productService: ProductService,private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data =>{
      this.products = data;
    });
  }

  onSubmit(cartProduct: Product, event: any): boolean{
    const selectedOption = event.target[0].options[event.target[0].options.selectedIndex].value;
      cartProduct.quantity = parseInt(selectedOption);
      alert(this.cartService.add(cartProduct));
     return false;
  }

}
