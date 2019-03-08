# Introduction

## Basic requirement

I mimic the UI design of one of the shops on Afterpay website.

First, I create a checkoutComponent as parent component
For step 1, create CheckoutAddressComponent to collect shipping address
For step 2, create CheckoutPaymentComponent
Use @Input and EventEmitter to communicate between two sibling components CheckoutAddressComponent and CheckoutPaymentComponent.
When continue is clicked, the CheckoutAddressComponent emit a Contact to checkoutComponent, then it is passed to CheckoutPaymentComponent through @input

## From validation
For form validation, check if required fields are present, check email, zip code, phone are of valid format


## Responsive design
For responsive design, use Angular Material, including Mat-card, mat-form-field, matInput, mat-radio-batton, mat-expansion-panel to style the page
And make it responsive.
Also, customize the size of mat-radio-button to fit into the expansion-panel


# AfterpayCheckout

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
