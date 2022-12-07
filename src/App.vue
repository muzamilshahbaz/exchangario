<template>
 <div>
  <ExchangarioNavbar :title="brandName" :items="menuItems" />
 <router-view/>
 </div>
</template>

<script>
import ExchangarioNavbar from './components/ExchangarioNavbar.vue';

export default {
    name: "App",
    components: 
    { 
      ExchangarioNavbar,
    },

    data(){
      return {
        brandName: "Exchangario",
        menuItems: [
          { text: "Home", link: "/" },
          { text: "About", link: "/about" },
          { text: "Faq", link: "/faq" },
        ],
      }
    }
}
</script>

<style lang="scss">
@import "assets/styles/variables.scss";
@import "~bulma/bulma.sass";
@import "assets/styles/main.scss";
</style>
