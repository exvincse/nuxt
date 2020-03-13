<template>
    <section class="center">
        <!-- <router-link class="button--green" :to="{ name: 'index' }">index</router-link> -->
        <nuxt-link class="button--green" :to="{ name: 'index' }">index</nuxt-link>
        <div v-if="articles.length !== 0" class="container">
            <div>
                <h2>SSR</h2>
                <div v-for="article in articles" :key="article.id" class="item">
                    <p>{{ article.title }}</p>
                    <a :href="article.url" target="_blank">
                        <!-- <img :src="article.media[0]['media-metadata'][0].url" alt /> -->
                    </a>
                </div>
            </div>
            <div>
                <h2>CSR</h2>
                <div v-for="article in brticles" :key="article.id + Math.floor(Math.random()*1000000)" class="item">
                    <p>{{ article.title }}</p>
                    <a :href="article.url" target="_blank">
                        <!-- <img :src="article.media[0]['media-metadata'][0].url" alt /> -->
                    </a>
                </div>
            </div>
            <div>
                <h2>vuex</h2>
                <div v-for="article in message" :key="article.id + Math.floor(Math.random()*100000000000000000000)" class="item">
                    <p>{{ article.title }}</p>
                    <a :href="article.url" target="_blank">
                        <!-- <img :src="article.media[0]['media-metadata'][0].url" alt /> -->
                    </a>
                </div>
            </div>
        </div>
        <div v-else>
            沒資料
        </div>
    </section>
</template>

<script>
    import { mapState, mapMutations, mapActions } from "vuex";
    import Logo from "~/components/Logo.vue";
    import axios from "axios";
    export default {
        layout: 'blue',
        components: {
            Logo
        },
        data() {
            return {
                articles: [],
                brticles: [],
                title: 'people'
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
        computed: {
            ...mapState({
                message: state => state.message
            })
        },
        beforeCreate() {
            // console.log('beforeCreate')
        },
        async created() {
            const url = "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=96dg4kGqji5E3SrmGkeAQfq1OAXOBAMD";
            let ares = await axios.get(url);
            this.brticles = ares.data.results;
            console.log('created');
        },
        beforeMount() {
            // console.log('beforeMount')
        },
        mounted() {
            // console.log('mounted')
        },
        async asyncData({ req, res }) {
            const url = "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=96dg4kGqji5E3SrmGkeAQfq1OAXOBAMD";
            let ares = await axios.get(url);
            console.log('asyncData');
            return {
                articles: ares.data.results
            };
        },
        async fetch({ store, params }) {
            await store.dispatch('setStars');
            console.log('fetch');
        }
    }
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .container {
        display: flex;
        justify-content: center;
    }
</style>