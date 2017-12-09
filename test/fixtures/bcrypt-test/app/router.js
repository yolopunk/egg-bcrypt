'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.post('/generate', controller.hash.generate);
  router.post('/compare', controller.hash.compare);
};
