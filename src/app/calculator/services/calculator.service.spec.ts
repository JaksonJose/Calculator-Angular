import { inject, TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be sure that 1 + 4 returns 5',
    inject([CalculatorService], (service: CalculatorService) => {
      let sum = service.calculate(1, 4, CalculatorService.SUM);
      expect(sum).toEqual(5);
    })
  ); 

  it('Should be sure that 1 - 4 returns -3',
    inject([CalculatorService], (service: CalculatorService) => {
      let subtraction = service.calculate(1, 4, CalculatorService.SUBTRACTION);
      expect(subtraction).toEqual(-3);
    })
  );

  it('Should be sure that 2 * 5 returns 10',
    inject([CalculatorService], (service: CalculatorService) => {
      let mult = service.calculate(2, 5, CalculatorService.MUTIPLICATION);
      expect(mult).toEqual(10);
    })
  );

  it('Should be sure that 10 / 5 returns 2',
    inject([CalculatorService], (service: CalculatorService) => {
      let division = service.calculate(10, 5, CalculatorService.DIVISION);
      expect(division).toEqual(2);
    })
  );
});
