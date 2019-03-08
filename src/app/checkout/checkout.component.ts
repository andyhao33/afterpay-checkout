import { Component, AfterViewChecked, ViewChild } from '@angular/core';
import { CheckoutService } from '../services/checkout.service';
import { Contact } from '../shared/contact';
import { CheckoutPaymentComponent } from '../checkout-payment/checkout-payment.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements AfterViewChecked {

  // Using @Input and EventEmitter to communicate between 
  // sibling components CheckoutPaymentComponent and CheckoutAddressComponent

  ifShowAddress: boolean = true;
  contact: Contact  = new Contact();

  constructor(private checkoutService: CheckoutService) { }

  ngAfterViewChecked() {
  }

  onContinue(contact: Contact) {
    this.ifShowAddress = false;
    this.contact = contact;
    // console.log(contact);
  }
  
  onBack(contact: Contact){
    this.ifShowAddress = true;
    // console.log(this.contact);
  }



}
