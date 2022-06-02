import Koa from 'koa'
import auth from 'koa-basic-auth'
import mount from 'koa-mount'
import bodyParser from 'koa-bodyparser'

import statsRouter from './src/routers/stats.router.js'
import messageRouter from './src/routers/message.router.js'

const app = new Koa();
app.use(bodyParser());

const _ALL_USERS = {
    USER: {name: 'user', pass: 'secret'},
    ADMIN: {name: 'admin', pass: 'secret'}
}

app.use(async (ctx, next) => {
    try {
        ctx.state.lastMessage = null
        ctx.state.calls = 0
        await next();
    } catch (err) {
        if (401 === err.status) {
            ctx.status = 401;
            ctx.set('WWW-Authenticate', 'Basic');
            ctx.body = 'cant haz that';
        } else {
            throw err;
        }
    }
});

app.use(mount('/stats', auth(_ALL_USERS.ADMIN)));

app.use(statsRouter.routes())
app.use(messageRouter.routes())

app.listen(3000);