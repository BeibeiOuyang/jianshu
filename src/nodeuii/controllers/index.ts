import Router from 'koa-router';
import * as Koa from 'koa';
import fs from 'fs';
// eslint-disable-next-line import/no-extraneous-dependencies
import path from "path";

const router = new Router();

router
  // 支持 browserRouter
  .get(/\/20[1-9][0-9]/, ctx => {
    const file = fs.readFileSync(path.join('client/index.html'));
    ctx.set('Content-Type', 'text/html; charset=utf-8');
    ctx.body = file;
  });

export default {
  init(app: Koa): void {
    app.use(router.routes()).use(router.allowedMethods());
  }
};
