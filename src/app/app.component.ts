import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'simpleCalculatorApp';
  operatorX: number = 0;
  operatorY: number = 0;
  result: number = 0;
  sum(): void {
    this.result = this.operatorX + this.operatorY;
  }
}
