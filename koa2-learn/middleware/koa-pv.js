
//自定义中间件

function pv(ctx){ //ctx 全局对象，是由koa传入的封装了request和response的变量，我们可以通过它访问request和response
  ctx.session.count++ //给session添加字段count
  global.console.log('pv '+ctx.path);//当前页面路径

}

module.exports = function(){
  return async function(ctx,next){
    pv(ctx)
    await next() //这个中间件处理完毕，交给下一个处理
  }
}