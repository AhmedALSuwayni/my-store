import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  id: number = 0;
  product: Product | undefined;
  productQunt: string[] = ["1","2","3","4","5","6","7","8","9","10"];

  constructor(private productService: ProductService,private activatedRoute: ActivatedRoute,private cartService: CartService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })
    this.productService.getProductById(this.id).subscribe((res:Product) =>{
      this.product=res;
      console.log(this.product);
      console.log(res);
    })
  }

  onSubmit(cartProduct: Product, event: any): boolean{
    const selectedOption = event.target[0].options[event.target[0].options.selectedIndex].value;
      cartProduct.quantity = parseInt(selectedOption);
      alert(this.cartService.add(cartProduct));
     return false;
  }

}
