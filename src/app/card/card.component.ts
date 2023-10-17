import { Component, Input } from '@angular/core';

interface CardProps {
  case:  "total" | "saida" | "entrada"
  valor: number,
  title: string,
  src: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() cardProps: any;
  @Input() case:  "total" | "saida" | "entrada" = 'total';
  @Input() valor: number = 0;
  @Input() title: string = "";

  constructor() {
    console.log(this.title)
  }
}
