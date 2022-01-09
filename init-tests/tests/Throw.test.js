import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/index';

const should = chai.should();
chai.use(chaiHttp);

function ThrowError() {
  return new Error('Throw Error');
}

describe('ThrowError', () => {
  it('Should throw new error', () => {
    const err = ThrowError();

    err.should.be.an.instanceOf(Error);
  });

  it('Should return 500 error from server', (done) => {
    chai
      .request(server)
      .post('/error')
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.have.property('msg');
        res.body.msg.should.eql('Internal server error');
        res.body.should.have.property('error');

        done();
      })

  })
})