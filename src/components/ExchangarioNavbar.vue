<template>
  <header class="header" id="header">
    <nav
      class="navbar"
      v-bind:class="$route.path === '/' ? '' : 'with-background'"
    >
      <div class="container">
        <div class="navbar-brand">
          <router-link
            class="navbar-item has-text-white is-size-2 has-text-weight-bold"
            v-bind:to="'/'"
          >
            {{ title }}
          </router-link>
          <span
            role="button"
            tabindex="0"
            class="navbar-burger burger has-text-white"
            data-target="navbar-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbar-menu" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              {{ user?.email }}
            </div>
            <router-link
              v-for="item in items"
              :key="item.text"
              :to="item.link"
              class="navbar-item nav-web"
            >
              {{ item.text }}
            </router-link>
            <template v-if="isAuthenticated">
                <router-link
                to="/exchanges/new"
                class="navbar-item">
                New Exchange
              </router-link>
                <router-link to="/profile" class="navbar-item">
                Profile
              </router-link>
              <div
                @click="() => $store.dispatch('user/logout')"
                class="navbar-item clickable">
                Logout
              </div>
            </template>
            <template v-else>
              <router-link to="/login" class="navbar-item">
                Login
              </router-link>
              <router-link to="/register" class="navbar-item">
                Register
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import useAuth from "@/composition/useAuth";
export default {
  props: {
    title: {
      type: String,
      default: "Exchangario",
    },
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return useAuth();
  },
};
</script>
