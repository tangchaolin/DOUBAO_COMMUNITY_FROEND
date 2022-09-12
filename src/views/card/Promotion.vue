<template>
<div style="margin-bottom:16px">
  <el-card class="box-card" shadow="hover">
    <div slot="header">
      <span>🥂 推广</span>
    </div>
    <div>
      <p v-for="(item) in list" :key="item.id">
        <el-link :href="item.link" target="_blank">{{item.title}}</el-link>
      </p>
    </div>
  </el-card>
  </div>
</template>

<script>
import {getList} from "@/api/promote"
export default {
  name: 'Promotion',
  data() {
    return {
      list:[]

    }
  },
  created() {
    this.fetchList()
    console.log(this.list )
  },
  methods: {
       fetchList(){
      getList().then(response=>{
         const {data}=response;
         this.list=data 

      })

    }
  }
}
</script>

<style scoped>
</style>