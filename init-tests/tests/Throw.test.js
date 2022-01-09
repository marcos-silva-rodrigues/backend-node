import chai from 'chai';
import chaiHttp from 'chai-http';

const should = chai.should();

function ThrowError() {
  return new Error('Throw Error');
}

describe('ThrowError', () => {
  it('Should throw new error', () => {
    const err = ThrowError();

    err.should.be.an.instanceOf(Error);
  });
})