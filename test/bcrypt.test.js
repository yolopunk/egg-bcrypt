'use strict';

const mock = require('egg-mock');

describe('test/bcrypt.test.js', () => {
  let app;
  let hash;
  const plainText = '123456';
  before(() => {
    app = mock.app({
      baseDir: 'bcrypt-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should generate a hash string', () => {
    app.mockCsrf();
    return app.httpRequest()
      .post('/generate')
      .send({ plainText })
      .expect(200)
      .expect(res => {
        hash = res.body.hash;
      });
  });

  it('should pass a correct password', () => {
    app.mockCsrf();
    return app.httpRequest()
      .post('/compare')
      .send({ hash, plainText })
      .expect(200)
      .expect(/true/);
  });
});
