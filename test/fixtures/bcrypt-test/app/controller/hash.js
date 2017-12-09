'use strict';

const Controller = require('egg').Controller;

class HashController extends Controller {
  async generate() {
    const hash = await this.ctx.genHash(this.ctx.request.body.plainText);
    this.ctx.body = { hash };
  }

  async compare() {
    const { hash, plainText } = this.ctx.request.body;
    const checked = await this.ctx.compare(plainText, hash);
    this.ctx.body = { checked };
  }
}

module.exports = HashController;
