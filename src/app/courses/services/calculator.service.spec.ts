import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {

    let calculator: CalculatorService,
        loggerSpy: any;

    beforeEach(() => {
        loggerSpy = jasmine.createSpyObj('LoggerService', ["log"])

        //As we use dependency injection in Angular we use same notion in test suite, this is helpful when we test components
        //TestBed allow us to provide dependency services by using dependency injection instead of calling constructors explicitely
        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                {provide: LoggerService, useValue: loggerSpy}
            ]
        })

        // calculator = new CalculatorService(loggerSpy);
        //use TestBed to retrieve Calculator Service, instead of caaling constructors explicitely, by using dependency injection as a unique dependency injection key identifier
        calculator = TestBed.get(CalculatorService);
    })

    //Add f before any test spec or test suite to focus test of that block and bypass rest
    fit('should add two numbers', () => {
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

    //Add x before any test spec or test suite to disable test of that block
    xit('should subtract two numbers', () => {
        // const calculator = new CalculatorService(new LoggerService());

        const result = calculator.subtract(4, 2);
        expect(result).toBe(2, "Unexpected Subtraction result");
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

})