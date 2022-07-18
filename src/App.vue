<template>
  <div id="exchangario">
    <ExchangarioNavbar 
      :title="brandName"
      :items="menuItems"  
    />
    <ExchangarioHeroSection />
    <ExchangarioPost />
    <ExchangarioPagination />
  </div>
</template>

<script>
import ExchangarioNavbar from "./components/ExchangarioNavbar.vue";
import ExchangarioHeroSection from "./components/ExchangarioHeroSection.vue";
import ExchangarioPost from "./components/ExchangarioPost.vue";
import ExchangarioPagination from "./components/ExchangarioPagination.vue";

export default {
  name: "App",
  components: {
    ExchangarioNavbar,
    ExchangarioHeroSection,
    ExchangarioPost,
    ExchangarioPagination,
  },
  data() {
    return {
      brandName: "Exchangario",
      menuItems: [
        { text: "Home", link: "/" },
        { text: "About", link: "/about" },
        { text: "Faq", link: "/faq" },
        { text: "Login", link: "/login" },
        { text: "Register", link: "/register" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "assets/styles/variables.scss";
@import "~bulma/bulma.sass";
@import "assets/styles/main.scss";
</style>
