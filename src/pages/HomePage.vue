<template>
    <div id="exchangario">
     <ExchangarioHeroSection/>
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
    ExchangarioHeroSection
},
    data() {
      return {

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

   computed: {
    exchange_length(){
      return this.exchanges.length;
    }
   },

   methods: {
    log(){
      console.log('Hello!!');
    },
    increment(){
      this.count++;
    }
   }
  }
  </script>

  