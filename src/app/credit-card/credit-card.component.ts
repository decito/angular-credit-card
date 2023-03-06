import { Component } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent {
  // TODO: add day/month validation, add mask to card number

  cardNumber = "";
  ownerName = "";
  expirationMonth: number;
  expirationYear: number;

  allowDigitOnly(event: Event) {
    console.log(event)
    if (/\D/g.test((<HTMLInputElement>event.target).value))
      (<HTMLInputElement>event.target).value = (<HTMLInputElement>event.target).value.replace(/\D/g, '');
  }

  allowWordOnly(event: Event) {
    if (/([0-9])/g.test((<HTMLInputElement>event.target).value))
      (<HTMLInputElement>event.target).value = (<HTMLInputElement>event.target).value.replace(/([0-9])/g, '')
  }
}
