import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  
  private _calculatorService: CalculatorService;
  private _num1: string;
  private _num2: string;
  private _result: number;
  private _operation: string;     
  
  constructor(calculatorService: CalculatorService) {
    this._calculatorService = calculatorService; 
   }

  ngOnInit(): void {
    this.clean();
  }

  //Returns the value for displaying on the calculator screen  
  public get display(): string {
    if (this._result !== null) return this._result.toString();

    if (this._num2 != null) return this._num2;

    return this._num1;
  }

    /**
   * Return the value concatenated and set up the decimal value.
   * @param currentNumber string 
   * @param numConcat string
   * @returns string
   */
  private concatenateNumber(currentNumber: string, numConcat: string): string {
    
    // Restart the value
    if (currentNumber === '0' || currentNumber === null) currentNumber = '';

    // Concatenate '0' if first digit is '.'
    if (numConcat === '.' && currentNumber === '') return '0.';

    // If user type '.' and it already contain '.' 
    if (numConcat === '.' && currentNumber.indexOf('.') > -1) return currentNumber;

    return currentNumber + numConcat;
  }

  // Clean the calculator (AC button)
  public clean(): void {
    this._num1 = '0';
    this._num2 = null;
    this._result = null;
    this._operation = null;
  }

  /**
   * Add number which user select in the calculator
   * @param numero (0 to 9)
   * @returns 
   */
  public addNumber(numero: string): void {
    if(this._operation === null) {
      this._num1 = this.concatenateNumber(this._num1, numero);
      return;
    }
      
    this._num2 = this.concatenateNumber(this._num2, numero);
  }

  /**
   * Execute the operation calc is defined and the number 2 is selected.
   * @param operation should receive the signs +, -, *, /, %
   */
  public defineOperation(operation: string): void {
    // Just define the operation whether this do not exist.
    if (this._operation === null) {
      this._operation = operation;
      return;
    }
 
    // if operation is already defined and the second number selected
    if (this._num2 !== null) {
      let numberA = parseFloat(this._num1);
      let numberB = parseFloat(this._num2);

      this._result = this._calculatorService.calculate(numberA, numberB, this._operation);
      this._operation = operation;
      this._num1 = this._result.toString();
      this._num2 = null;
      this._result = null;
    }
  }

  // Set the result of operation
  public calculate(): void {
    if (this._num2 === null) return;

    let numberA = parseFloat(this._num1);
    let numberB = parseFloat(this._num2);

    this._result = this._calculatorService.calculate(numberA, numberB, this._operation);
  }
}