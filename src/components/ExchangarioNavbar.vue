<template>
    <header class="header">
        <nav class="navbar" v-bind:class="$route.path === '/' ? '' : 'with-background'">
            <div class="container">
                <div class="navbar-brand">
                    <router-link class="navbar-item has-text-white is-size-2 has-text-weight-bold" v-bind:to="'/'">
                        {{title}}
                    </router-link>
                    <span role="button" tabindex="0" class="navbar-burger burger has-text-white"
                        data-target="navbar-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbar-menu" class="navbar-menu">
                    <div class="navbar-end">
                        <!-- Loop through the navigation items -->
            
                        <router-link
                            v-for = "item in items"
                            :key="item.text"
                            :to="item.link"
                            
                            class="navbar-item nav-web">

                            {{item.text}}
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Exchangario",
        },
        items: {
            type: Array,
            required: true,
        }
    }
}
</script>