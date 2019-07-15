const mongoose = require('mongoose')

let personSchema = new mongoose.Schema({//新建模式Schema，可理解为建表
  name:String,
  age:Number
})

module.exports = mongoose.model('Person',personSchema)  //模型与模式关联，并导出





