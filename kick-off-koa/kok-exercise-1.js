const koa = require('koa');
const app = koa();

app.use(function* sdsd() {
  this.body = 'hello koa';
});

app.listen(process.argv[2]);
