<template>
  <div class="page-wrapper">
    <div class="container">
      <div class="form-container">
        <form>
          <div class="field">
            <label class="label">Type</label>
            <div class="control">
              <div class="select">
                <select v-model="form.type">
                  <option value="" selected disabled>Select Type</option>
                  <option value="service">Service</option>
                  <option value="product">Product</option>
                </select>
            </div>
            <FormErrors :errors="v$.form.type.$errors"/>
          </div>
          </div>
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input
                v-model="form.title"
                class="input"
                type="text"
                placeholder="Some Nice Product"
              />
              <FormErrors :errors="v$.form.title.$errors"/>
            </div>
          </div>
          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea
                v-model="form.description"
                class="textarea"
                placeholder="Some catchy description about product"
              ></textarea>
              <FormErrors :errors="v$.form.description.$errors"/>
            </div>
          </div>
          <div class="field">
            <label class="label">Image Link</label>
            <div class="control">
              <input
                v-model="form.image"
                class="input"
                type="text"
                placeholder="https://unsplash...."
              />
              <FormErrors :errors="v$.form.image.$errors"/>
            </div>
          </div>
          <div class="field">
            <label class="label">Price</label>
            <div class="control">
              <input
                v-model="form.price"
                class="input"
                type="number"
                placeholder="249"
              />
              <FormErrors :errors="v$.form.price.$errors"/>
            </div>
          </div>
          <div class="field">
            <label class="label">Country</label>
            <div class="control">
              <input
                v-model="form.country"
                class="input"
                type="text"
                placeholder="Slovakia"
              />
              <FormErrors :errors="v$.form.country.$errors"/>
            </div>
          </div>
          <div class="field">
            <label class="label">City</label>
            <div class="control">
              <input
                v-model="form.city"
                class="input"
                type="text"
                placeholder="Bratislava"
              />
              <FormErrors :errors="v$.form.city.$errors"/>
            </div>
          </div>

          <!-- TODO: provide tags inputs -->
          <div class="field">
            <label class="label">Tags</label>
            <div class="control">
              <input class="input" type="text" placeholder="programming" />
              <FormErrors :errors="v$.form.tags.$errors"/>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button
                @click.prevent="createExchange"
                class="button is-link"
              >
                Submit
              </button>
            </div>
            <div class="control">
              <button class="button is-text">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import FormErrors from "@/components/FormErrors.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, url, minValue, helpers } from "@vuelidate/validators";
import { supportedFileType } from "@/helpers/validators";

export default {
    components: {
        FormErrors
    },
    setup() {
      return { v$: useVuelidate() }
    },
    data() {
      return {
        form: { 
          title: "",
          description: "",
          type: "",
          image: "",
          price: "",
          country: "",
          city: "",
          tags: [],
        },
      };
    },
  validations() {
    return {
        form: {
          title: { 
            required: helpers.withMessage("Title is required", required),
            minLength: helpers.withMessage("Title should be at least 10 characters long", minLength(10)),
        },
          description: { required },
          type: { required },
          image: { 
            required,
            url,
            supportedFileType: helpers.withMessage("Invalid file format", supportedFileType) ,
        },
          price: { 
            required,
            minValue: minValue(1),
         },
          country: { required },
          city: { required },
          tags: { required },
        },
      };
  },
  methods: {
    async createExchange() {

        const isValid = await this.v$.$validate();
        if (isValid) {
            
            alert(JSON.stringify(this.form));
        }
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 960px;
  margin: 0 auto;
  margin-top: 40px;
}
.tag {
  margin: 3px;
}
</style>
