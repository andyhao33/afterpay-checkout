import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../shared/contact';
import { CheckoutService } from '../services/checkout.service';
import { MatFormFieldModule} from '@angular/material';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.css']
})
export class CheckoutAddressComponent implements OnInit {

  email: string;
  firstName:string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  country: string;
  state: string;
  zipCode: string;
  phone: string;

  savedContact = new Contact();
  showInvalidMsg: boolean=false;
  @Output() continueClicked = new EventEmitter<Contact>();
  
  constructor(private checkoutServie: CheckoutService) { }

  ngOnInit() {
  }

  isEmailValid(){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.email && re.test(this.email)){
      return true;
    }
    else {
      return false;
    }

  }

  isZipCodeValid(){
    // Zip code is optional, so it is invalid only when there is a value but
    // does not follow the pattern
    if (this.zipCode && !/^[0-9]{5}/.test(this.zipCode)){
      return false;
    }
    else {
      return true;
    }
  }

  isPhoneValid(){
    // Phone is optional, so it is invalid only when there is a value but
    // does not follow the pattern
    if (this.phone && !/^[0-9]{10}/.test(this.phone)){
      return false;
    }
    else {
      return true;
    }
  }

  // Form Validation
  isValid(){
    if (this.isEmailValid() 
         && this.isZipCodeValid()
         && this.isPhoneValid() 
         && this.firstName
         && this.lastName
         && this.address1
         && this.country
         && this.state) {
      return true;
    }
    else {
      return false;
    }
  }

  // when continue is clicked and form is valid, checkoutAddress component will emit an 
  // event to parent component checkout
  continue() {
    if (this.isValid()) {
      this.showInvalidMsg = false;
      this.savedContact.name = this.firstName + " " + this.lastName;
      this.savedContact.line1 = this.address1;
      this.savedContact.line2 = this.address2;
      this.savedContact.suburb = this.city;
      this.savedContact.state = this.state;
      this.savedContact.postcode = this.zipCode;
      this.savedContact.countryCode = this.country;
      this.savedContact.phoneNumber = this.phone;


      this.continueClicked.emit(this.savedContact);

    }
    else {
      this.showInvalidMsg=true;
    }
    
  }

}
