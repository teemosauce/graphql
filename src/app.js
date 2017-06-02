import Koa from 'koa'
import KoaRouter from 'koa-router'
import koaBody from 'koa-bodyparser'
import {
	graphqlKoa,
	graphiqlKoa
} from 'graphql-server-koa'
import './dbs/mongo'
import {
	accountSchema,
	userSchema
} from './data/schema'

const PORT = 3001
const app = new Koa()
const router = new KoaRouter()

// 记录请求响应时间 
app.use(async(ctx, next) => {
	const start = Date.now()
	await next()
	ctx.set('X-Response-Time', `${Date.now() - start}ms`)
})

//把post的参数转换成json格式
app.use(koaBody())


router.get('/account', graphqlKoa((ctx) => {
	return {
		schema: accountSchema,
		context: {
			userId: ctx.cookies.get('userId')
		}
	}
}))

router.post('/account', graphqlKoa((ctx) => {
	return {
		schema: accountSchema,
		context: {
			userId: ctx.cookies.get('userId')
		}
	}
}))

router.get('/graphiql', graphiqlKoa({
	endpointURL: '/account'
}));

router.get('/', ctx => {
	ctx.body = '404'
})

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(PORT, () => {
	console.log('Server is running on', 'localhost:' + PORT);
	console.log('GraphiQL dashboard', 'localhost:' + PORT + '/graphiql');
})