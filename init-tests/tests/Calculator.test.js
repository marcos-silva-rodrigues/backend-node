import chai from "chai";
import Calculator from "../src/Calculator";

const expect = chai.expect;

describe('Calculator class', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('(SUM) expect 5 + 4 = 9', () => {
    const result = calculator.sum(5, 4);

    expect(result).to.equal(9);
    expect(result).to.be.an('number');
  });

  it('(MINUS) expect 300 - 150 = 150', () => {
    const result = calculator.minus(300, 150);
    
    expect(result).to.equal(150);
    expect(result).to.be.an('number');
    expect(result).to.not.equal(100);
  });

  it('(MULT) expect 5 + 10 = 50', () => {
    const result = calculator.mult(5, 10);

    expect(result).to.equal(50);
    expect(result).to.be.an('number');
  });

  it('(DIV) expect 10 / 2 = 5', () => {
    const result = calculator.div(10, 2);
    
    expect(result).to.equal(5);
    expect(result).to.be.an('number');
  });
});