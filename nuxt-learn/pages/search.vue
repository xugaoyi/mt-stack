<template>
  <div>
    page is search

    <ul>
      <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
    <p>从vuex获取数据:</p>
    <ul>
      <li v-for="(item,index) in $store.state.city.list" :key="index">{{item}}</li>
      <li v-for="(item,index) in $store.state.navbar.app" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'search', // 声明使用哪个模板，不声明则使用默认模板
  data() {
    return {
      list: []
    }
  },
  // async mounted() { // created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
  //   let self = this
  //   let {status, data: {list}} = await axios.get('/city/list')
  //   if (status === 200) {
  //     self.list = list
  //   }
  // }
  async asyncData() { // nuxt获取异步数据
    let {status, data: {list}} = await axios.get('http://localhost:3000/city/list')
    if (status === 200) {
      return {
        list
      }
    }
  }
}
</script>
<style lang='css'>
</style>