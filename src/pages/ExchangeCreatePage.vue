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
              <FormErrors :errors="v$.form.type.$errors" />
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
              <FormErrors :errors="v$.form.title.$errors" />
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
              <FormErrors :errors="v$.form.description.$errors" />
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
              <FormErrors :errors="v$.form.image.$errors" />
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
              <FormErrors :errors="v$.form.price.$errors" />
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
              <FormErrors :errors="v$.form.country.$errors" />
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
              <FormErrors :errors="v$.form.city.$errors" />
            </div>
          </div>

          <!-- TODO: provide tags inputs -->
          <div class="field">
            <label class="label">Tags</label>
            <div class="control">
              <input
                @input="handleTags"
                class="input"
                type="text"
                placeholder="programming"
              />
              <div
                v-for="tag in form.tags"
                :key="tag"
                class="tag is-primary is-medium"
              >
                {{ tag }}
              </div>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button @click.prevent="createExchange" class="button is-link">
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
// import { supportedFileType } from "@/helpers/validators";
const setupInitialData = () => ({
  title: "",
  description: "",
  type: "",
  image: "",
  price: "",
  country: "",
  city: "",
  tags: [],
})
export default {
  components: {
    FormErrors,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: setupInitialData()
    };
  },
  validations() {
    return {
      form: {
        title: {
          required: helpers.withMessage("Title is required", required),
          minLength: helpers.withMessage(
            "Title should be at least 10 characters long",
            minLength(10)
          ),
        },
        description: { required },
        type: { required },
        image: {
          required: helpers.withMessage("Image is required", required),
          url: helpers.withMessage("Invalid url format", url),
          // supportedFileType: helpers.withMessage("Invalid file format", supportedFileType) ,
        },
        price: {
          required: helpers.withMessage("Price is required", required),
          minValue: minValue(1),
        },
        country: {
          required: helpers.withMessage("Country is required", required),
        },
        city: { required: helpers.withMessage("City is required", required) },
        tags: { required: helpers.withMessage("Tags are required", required) },
      },
    };
  },
  methods: {
    async createExchange() {
      const isValid = await this.v$.$validate();
      if (isValid) {
        this.v$.$reset();
        this.$store.dispatch("exchange/createExchange", {
          data: this.form,
          onSuccess: () => {
            this.form = setupInitialData();
          }
        });
      }
    },
    handleTags(event) {
      const { value } = event.target;

      if (
        value &&
        value.trim().length > 1 &&
        (value.substr(-1) === "," || value.substr(-1) === " ")
      ) {
        const _value = value.split(",")[0].trim();

        if (this.form.tags.includes(_value) === false) {
          this.form.tags.push(_value);
        }
        event.target.value = "";
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
