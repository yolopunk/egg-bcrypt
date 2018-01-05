'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  genHash(plainText) {
    return bcrypt
      .hash(plainText, this.app.config.bcrypt.saltRounds)
      .catch(err => this.app.logger.error('[egg-bcrypt]', err));
  },
  compare(plainText, hash) {
    return bcrypt
      .compare(plainText, hash)
      .catch(err => this.app.logger.error('[egg-bcrypt]', err));
  },
};

