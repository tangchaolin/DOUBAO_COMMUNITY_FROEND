<template>
  <div>
    <div class="mb-5">
      <Header></Header>
    </div>

    <div class="container context">
        <router-view :key="this.$route.fullPath"></router-view>
    </div>

    <Footer></Footer>
  </div>



</template>


<script>
import Header from "@/components/Layout/Header";
import Footer from '@/components/Layout/Footer';

export default {
    name: "App",
  components: { Header,Footer },
};


    Header
</script>
<style scoped>
.container {
  min-height: 500px;
}
</style>
