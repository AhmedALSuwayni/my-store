import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];
  productQunt: number[] = [1,2,3,4,5,6,7,8,9,10];
  totalPrice: number = 0;
  user: User =new User();
  fullName: string = "";
  CCN: number = 0;
  Address: string = "";

  
  constructor(private cartService: CartService,public router: Router) { }

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartProducts();
    this.totalPrice = this.cartService.calTotalPrice();
  }
  changeOption(product: Product, event: any): void {
    
    const selectedOption = event.target.options[event.target.options.selectedIndex].value;
    product.quantity = selectedOption;
    alert(this.cartService.edit(product));
    this.cartProducts = this.cartService.getCartProducts();
    this.totalPrice = this.cartService.calTotalPrice();
    

  }
  removeCart(product: Product){
    alert(this.cartService.remove(product));
    this.cartProducts = this.cartService.getCartProducts();
    this.totalPrice = this.cartService.calTotalPrice();

  }
  onSubmit(fullName: string,Address: string,CCN: number){
    this.user.Fullname = fullName
    this.user.Address = Address;
    this.user.CCN = CCN;
    this.user.total = this.totalPrice;
    this.cartService.addUser(this.user);
    this.cartService.Clear();
    this.router.navigate(['../checkout'])

  }
}
