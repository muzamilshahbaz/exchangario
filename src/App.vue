<template>
  <div id="exchangario">
    <ExchangarioNavbar :title="brandName" :items="menuItems" />
    <ExchangarioHeroSection />
    <ExchangarioPost :exchanges="exchanges" />
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
      exchanges: [
        {
          id: "ad7a1231238dasd",
          type: "product", // service or product
          title: "New Tesla Car",
          description: "I will exchange this nice Tesla car",
          price: 200,
          user: "Adam Donald",
          image:
            "https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=50",
          country: "Germany",
          city: "Berlin",
          tags: ["cars", "electric"],
        },
        {
          id: "ad7asdzxasa68dasd",
          type: "service", // service or product
          title: "Programming Lessons",
          description: "I will make you a super programmer",
          price: 45, // value per hour in case of service,
          user: "Ema Watson",
          image:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
          country: "Spain",
          city: "Barcelona",
          tags: ["programming", "code"],
        },
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
