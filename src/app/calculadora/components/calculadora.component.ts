import { Component, OnInit } from '@angular/core';

import { calculatorService } from './../services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class calculatorComponent implements OnInit {

  private number1: string;
  private number2: string;
  private result: number;
  private operate: string;

  constructor(
    private calculateService: calculatorService
  ) { }

  ngOnInit() {
    this.limpar();
  }

  limpar(): void {
    this.number1 = '0';
    this.number2 = null;
    this.operate = null;
    this.result = null;
  }

  addNumber(number: string): void {
    if (this.operate === null) {
      this.number1 = this.operateNumber(this.number1, number);
    } else {
      this.number2 = this.operateNumber(this.number2, number);
    }
  }

  operateNumber(numberCurrent: string, numConcat: string): string {
    if (numberCurrent === '0' || numberCurrent === null) {
      numberCurrent = '';
    }

    if (numConcat === '.' && numberCurrent === '') {
      return '0.';
    }

    if (numConcat === '.' && numberCurrent.indexOf('.') > -1) {
      return numberCurrent;
    }

    return numberCurrent + numConcat;
  }

  operation(operate: string): void {
    if (this.operate === null) {
      this.operate = operate;
      return;
    }

    if (this.number2 !== null) {
      this.result = this.calculateService.calculate(
        parseFloat(this.number1),
        parseFloat(this.number2),
        this.operate);

      this.operate = operate;
      this.number1 = this.result.toString();
      this.number2 = null;
      this.result = null;
    }
  }

  calculate(): void {
    if (this.number2 === null) {
      return;
    }

    this.result = this.calculateService.calculate(
      parseFloat(this.number1),
      parseFloat(this.number2),
      this.operate);
  }

  get display(): string {
    if (this.result !== null) {
      return this.result.toString();
    }

    if (this.number2 !== null) {
      return this.number2;
    }

    return this.number1;
  }
}
