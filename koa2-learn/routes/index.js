const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  //console.log('index');//global.console.log('index')
  ctx.cookies.set('pvid',Math.random())//设置cookie
  await ctx.render('index', {  // 页面类型
    title: 'Hello Koa 2!' //数据，提供给模板引擎渲染页面
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
    cookie:ctx.cookies.get('pvid') //读取cookie
  }
})

router.get('/testAsync', async (ctx) => {
  const a = await new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('ab')
    },1000)
  })

  const b = await Promise.resolve(123);

  ctx.body={
    a,
    b
  }
})

module.exports = router
