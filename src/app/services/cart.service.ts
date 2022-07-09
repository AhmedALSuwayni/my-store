import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  CartProducts: Product[] = [];
  newProduct: Boolean = true;
  totalPrice: number = 0;
  user: User = new User();
  constructor() { }
  
  add(product: Product){
     //if there is no products in the cart 
    if (this.getCartProducts() == null){
      this.CartProducts.push(product);
    }else{
      this.CartProducts= this.getCartProducts();

    //in case the product is in cart so we can add to the quantity
    for (let index = 0; index < this.CartProducts.length; index++) {
      if (product.id == this.CartProducts[index].id) {
        this.CartProducts[index].quantity += product.quantity;
        this.newProduct = false;
      }
    }
    if(this.newProduct === true){
      this.CartProducts.push(product);
    }
  }
  this.newProduct = true;
    localStorage.setItem('CartProducts',JSON.stringify(this.CartProducts));
     return `The Product ${product.name} ${product.category} Had been add it to the Cart !`;
  }

  remove(product: Product){
    this.CartProducts= this.getCartProducts();
    for (let index = 0; index < this.CartProducts.length; index++) {
      if (product.id == this.CartProducts[index].id) {
        this.CartProducts[index].quantity += product.quantity;
        this.CartProducts.splice(index,1);
      }
    }
    localStorage.setItem('CartProducts',JSON.stringify(this.CartProducts));
    return `The Product ${product.name} ${product.category} Had been removed from The Cart !`;
 }

 edit(product: Product): string{
  this.CartProducts = this.getCartProducts();
  for (let index = 0; index < this.CartProducts.length; index++) {
    if (product.id == this.CartProducts[index].id) {
      this.CartProducts[index].quantity = product.quantity;
    }
  }
  localStorage.setItem('CartProducts',JSON.stringify(this.CartProducts));
  return `The Product ${product.name} ${product.category} Had been quantity updated to ${product.quantity} !`;
}

calTotalPrice(): number {
  this.CartProducts= this.getCartProducts();
  this.totalPrice = 0;
  for (let index = 0; index < this.CartProducts.length; index++) {
      this.totalPrice += this.CartProducts[index].quantity * this.CartProducts[index].price
  }

  return this.totalPrice;
}

  getCartProducts(): Product[] {
    return JSON.parse(localStorage.getItem('CartProducts')!);
    }

    addUser(u: User ) {
     this.user = u;
    }
    getUser(): User{
      return this.user;
    }
    Clear(): void{
      this.CartProducts = [];
      localStorage.setItem('CartProducts',JSON.stringify(this.CartProducts));
    }
}



