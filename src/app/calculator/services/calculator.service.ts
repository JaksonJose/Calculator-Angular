/**
 * this sevices is reponsible to execute the calc operations
 * @author Jakson José
 * @since 1.0.0
 */ 

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  // Identify calc operations
  static readonly SUM: string = '+';
  static readonly SUBTRACTION: string = '-';
  static readonly MUTIPLICATION: string = '*';
  static readonly DIVISION: string = '/';

  constructor() { }

  /**
   * @param num1 number
   * @param num2 number
   * @param operation string
   * @return number that's the operation result
  */
  calculate(num1: number, num2: number , operation: string): number {
    let result: number;
    
    switch(operation){
      case CalculatorService.SUM:
        result = num1 + num2;
        break;
      case CalculatorService.SUBTRACTION:
        result = num1 - num2;
        break;
      case CalculatorService.MUTIPLICATION:
        result = num1 * num2;
        break;
      case CalculatorService.DIVISION:
        result = num1 / num2;
        break;
      default:
        result = 0;
    }

    return result;
  }
}