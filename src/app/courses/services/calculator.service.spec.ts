import { CalculatorService } from "./calculator.service";
// import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {

    let calculator: CalculatorService,
        loggerSpy: any;

    beforeEach(() => {
        loggerSpy = jasmine.createSpyObj('LoggerService', ["log"])
        calculator = new CalculatorService(loggerSpy);
    })

    it('should add two numbers', () => {
        // const logger = new LoggerService()
        // spyOn(logger, 'log');
        
        //creating fake test implementation for dependency service
        // const logger = jasmine.createSpyObj('LoggerService', ["log"])

        //instance of the CalculaorService  and CalculatorService has one dependency of LoggerService we need to instanciate that also
        // const calculator = new CalculatorService(logger);

        const result = calculator.add(2, 2);
        //test assertion   --> to ensure that result is expecte result
        expect(result).toBe(4);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    it('should subtract two numbers', () => {
        // const calculator = new CalculatorService(new LoggerService());

        const result = calculator.subtract(4, 2);
        expect(result).toBe(2, "Unexpected Subtraction result");
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

})