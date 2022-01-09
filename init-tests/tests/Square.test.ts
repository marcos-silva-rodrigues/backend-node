import chai from 'chai';
import Square from '../src/Square';

const should = chai.should();

describe('Square', () => {
  let square;

  beforeEach(() => {
    square = new Square(10);
  });

  before(() => {
    console.log("starting tests");
  });

  it('returns value', () => {
    square.value.should.equal(10);
  });

  it('getArea is equal 100', () => {
    square.getArea().should.equal(100);
  });

  afterEach(() => {
    console.log('After Each Hook');
  });

  after(() => {
    console.log("finished tests");
  })
});