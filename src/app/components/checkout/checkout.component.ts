import { Component, OnInit} from '@angular/core';
import { User } from 'src/app/models/User';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: CartService) { }

  emoji: string = "🎉";
  user: User = new User;

  ngOnInit(): void {
    this.user = this.cartService.getUser();
  }

}
