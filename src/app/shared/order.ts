import { Money } from "./money";
import { Consumer } from "./consumer";
import { Contact } from "./contact";
import { Courier } from "./courier";
import { Item } from "./item";
import { Discount } from "./discount";

export class Order {
    totalAmount: Money;
    consumer: Consumer;
    billing: Contact;
    shipping: Contact;
    courier: Courier;
    description: string;
    items: Item[];
    discounts: Discount[];
    paymentType: string = "PAY_BY_INSTALLMENT";
    merchant = {
        redirectConfirmUrl: String,
        redirectCancelUrl: String
    }
    merchantReference: string;
    taxAmount: Money;
    shippingAmount: Money;

}
