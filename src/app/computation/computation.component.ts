import { Component } from '@angular/core';

@Component({
  selector: 'app-computation',
  templateUrl: './computation.component.html',
  styleUrls: ['./computation.component.styl']
})
export class ComputationComponent {
  public inputNumber = 40;
  public result: number | string;
  public computing: boolean;

  // slowly calculates the fibonacci number
  private fib(num: number): number {
    let result = 0;
    if (num < 2) {
      result = num;
    } else {
      result = this.fib(num - 1) + this.fib(num - 2);
    }
    return result;
  }

  public compute(): void {
    this.result = this.fib(this.inputNumber);
  }
}
