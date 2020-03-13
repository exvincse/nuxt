<template>
    <div class="indexcontainer">
        <div>
            <router-link class="button--green" :to="{ name: 'people' }">people</router-link>
            <!-- <nuxt-link class="button--green" :to="{ name: 'people' }">people</nuxt-link> -->
        </div>
        <div>
            <logo />
            <h1 class="title">
                nuxtjs
            </h1>
            <h2 class="subtitle">
                My premium Nuxt.js project
            </h2>
            <div class="links">
                <a href="https://nuxtjs.org/" target="_blank" class="button--green">
                    Documentation
                </a>
                <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">
                    GitHub
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    export default {
        // layout: 'green',
        components: {
            Logo
        },
        data() {
            return {
                title: 'index'
            };
        },
        head() {
            return {
                title: this.title,
                meta: [
                    { hid: 'description', name: 'description', content: 'My custom description' }
                ]
            }
        },
    }
</script>

<style lang="css" scope="this api replaced by slot-scope in 2.5.0+">
    .indexcontainer {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>