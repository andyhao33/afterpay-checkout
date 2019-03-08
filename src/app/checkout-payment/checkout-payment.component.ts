import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../shared/contact';
import { Order } from '../shared/order';
import { CheckoutService } from '../services/checkout.service';
import { Router } from '@angular/router';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.css']
})
export class CheckoutPaymentComponent implements OnInit {

  @Input() contact: Contact;
  @Output() backClicked = new EventEmitter<Contact>();
  paymentMethod: string;

  order: Order = new Order();

  constructor(private checkoutService: CheckoutService, private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.backClicked.emit(this.contact);
  }

  onSelectPaymentMethod(method: string){
    this.paymentMethod = method;
    console.log(this.paymentMethod);
  }

  // Upon creating order,it mimics the process by redirecting to different payment websites
  createOrder() {
    // Here it sends an order to the afterpay api by calling checkout service
    if (this.paymentMethod == "installments-afterpay"){
      this.order.billing = this.contact;
      this.checkoutService.createOrder(this.order);
      window.location.href = "https://portal.afterpay.com/us/checkout/login-email";
    }

    else if (this.paymentMethod == "credit-card") {
      
    }

    else if (this.paymentMethod == "paypal"){
      window.location.href = "https://www.paypal.com/us/signin";
    }

    else if (this.paymentMethod == "amazon"){
      window.location.href = "https://pay.amazon.com/us";
    }
  }



}
