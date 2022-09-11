<template>
  <div >
    <div class="box">🔔{{billboard.content}}</div>

  </div>

</template>

<script>
import {getbillboard} from "@/api/billboard"

export default {
  name: 'Home',
  data(){

    return{
      billboard:{
        content:''
      }
    }
  },

  created(){
    this.fetchBillboard()

  },
  methods:{
    async fetchBillboard(){
      getbillboard().then((value)=>{
        const {data} = value
        this.billboard=data
      })


    }

  }

}
</script>
