const router = require('koa-router')()

const Person = require('../dbs/models/person') //引入数据库模型
const Redis = require('koa-redis')//引入redis模块
const Store = new Redis().client //



router.prefix('/users') //路径前缀

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/addPerson',async function (ctx) {
  const person = new Person({
    name:ctx.request.body.name,
    age:ctx.request.body.age
  })
  let code
  try {
    await person.save()  //保存数据到数据库
    code = 0
  } catch (e) {
    code = -1
  }

  ctx.body = {
    code
  }
})


router.post('/getPerson',async function (ctx) {
    const result = await Person.findOne({name: ctx.request.body.name})
    const results = await Person.find({name: ctx.request.body.name})
  ctx.body = {
    code:0,
    result,
    results
  }
})

router.post('/updatePerson',async function(ctx){
  const result = await Person.where({
    name: ctx.request.body.name
  }).update({
    age:ctx.request.body.age
  })
  ctx.body = {
    code:0
  }
})

router.post('/removePerson',async function(ctx){
  const result = await Person.where({
    name: ctx.request.body.name
  }).remove()
  ctx.body = {
    code:0
  }
})

router.get('/fix', async function(ctx){ // 操作redis的接口 
  const st = await Store.hset('fix','name',Math.random()) //fix为key，name为字段，Math.random()为值
  ctx.body={
    code:0
  }
})

module.exports = router
