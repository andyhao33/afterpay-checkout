import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material';
import { MatInputModule} from '@angular/material';
import { MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutAddressComponent } from './checkout-address/checkout-address.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';


const appRoutes: Routes = [
  {path: 'checkout', component: CheckoutComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    CheckoutAddressComponent,
    CheckoutPaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule,
    MatExpansionModule,
    MatButtonModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
