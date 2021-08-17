import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class calculatorService {

  static readonly SUM: string = '+';
  static readonly SUBTRACTION: string = '-';
  static readonly MULTIPLICATION: string = '*';
  static readonly DIVISION: string = '/';

  constructor() { }

  calculate(num1: number, num2: number, operate: string): number {
    let result: number;

    switch (operate) {
      case calculatorService.SUM:
        result = num1 + num2;
        break;
      case calculatorService.SUBTRACTION:
        result = num1 - num2;
        break;
      case calculatorService.MULTIPLICATION:
        result = num1 * num2;
        break;
      case calculatorService.DIVISION:
        result = num1 / num2;
        break;
      default:
        result = 0;
        break;
    }
    return result;
  }
}
