import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value"><p>{{ value }}</p></button>
    <button nbButton hero status="success" *ngIf="value == 'X'"><p>{{ value }}</p></button>
    <button nbButton hero status="info" *ngIf="value == 'O'"><p>{{ value }}</p></button>
  `,
  styles: []
})
export class SquareComponent {

@Input() value: 'X' | 'O';

}
