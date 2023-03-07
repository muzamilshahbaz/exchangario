<template>
  <div id="exchangario">
    <ExchangarioHeroSection />
    <ExchangarioPost :exchanges="exchanges" />
    <ExchangarioPagination />
  </div>
</template>

<script>
import ExchangarioPost from "../components/ExchangarioPost.vue";
import ExchangarioPagination from "../components/ExchangarioPagination.vue";
import ExchangarioHeroSection from "@/components/ExchangarioHeroSection.vue";

export default {
  components: {
    ExchangarioPost,
    ExchangarioPagination,
    ExchangarioHeroSection,
  },

  computed: {
    exchanges() {
      return this.$store.state.exchange.items;
    },
    
    exchange_length() {
      return this.exchanges.length;
    },
  },

  // mounted() {
    
  // },

  created() {
    this.$store.dispatch("exchange/getExchanges")
  },
  methods: {
    log() {
      console.log("Hello!!");
    },
    increment() {
      this.count++;
    },
  },
};
</script>
