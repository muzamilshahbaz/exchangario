<template>
  <AppModal 
  ref="appModal"
  :onModalSubmit="updateProfile"
  >
  <form>
    <div class="field">
      <label class="title">Username</label>
      <input v-model="userProfile.username" class="input" />
    </div>
    <div class="field">
      <label class="title">Avatar</label>
      <input v-model="userProfile.avatar" class="input" />
    </div>
    <div class="field">
      <label class="title">Info about user</label>
      <input v-model="userProfile.info" class="input" />
    </div>
    <div class="field">
      <label class="title">Address</label>
      <input v-model="userProfile.address" class="input" />
    </div>
    <div class="field">
      <label class="title">Country</label>
      <input v-model="userProfile.country" class="input" />
    </div>
    <div class="field">
      <label class="title">Phone</label>
      <input v-model="userProfile.phone" class="input" />
    </div>
  </form>
  <template #activator>
    <button class="button is-primary">Custom Button</button>
  </template>
</AppModal>
</template>
<script>
import AppModal from "../components/AppModal.vue";
export default {
  components: {
      AppModal
    },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      userProfile: { ...this.user },
    };
  },
  computed:{
    modal() {
      return this.$refs.appModal;
    }
  },
  methods: {
    updateProfile() {
      this.$store.dispatch("user/updateProfile", {
        data: this.userProfile,
        onSuccess: () => this.modal.close()
      });
    },
  },
};
</script>
