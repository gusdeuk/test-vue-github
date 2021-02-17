<template>
    <transition name="fade-view" appear>
        <div class="starships-page">
            <div class="page-title">Starships page</div>
            <div class="page-content">
                <div class="loader-wrap" v-if="isLoading">
                    <div class="loader-oval med spin-me"></div>
                </div>

                <transition name="fade-simple">
                    <div class="clearfix" v-if="!isLoading">
                        <ul id="example-1">
                            <li v-for="item in starships" :key="item.name">
                                {{ item.name }}
                            </li>
                        </ul>
                    </div>
                </transition>

                <div>
                    <font-awesome-icon style="font-size: 24px; color: aqua;" rotation="180" :icon="['fas', 'coffee']" />
                    <font-awesome-icon :icon="['fas', 'spinner']" spin />
                    <font-awesome-icon :icon="['far', 'address-card']" />
                    <font-awesome-icon :icon="['fab', 'twitter']" />

                    <div>{{ getUserIdFromStore }}</div>
                    <div>{{ getStarShipsFromStore }}</div>
                    <!-- <div>{{ getPlanetsFromStore }}</div> -->
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import dataStructure from './data-structure.js';

export default {
    name: 'starshipsPage',
    components: {
        //MenuIcon
    },
    data() {
        return {
            isLoading: false,
            starships: [],
            dataStructure: dataStructure
        };
    },
    created() {
        const starshipsInStore = this.$store.getters['starshipsModule/starships'];
        // load planets just once!
        if (starshipsInStore.length === 0) {
            this.loadStarships();
        }

        // use fake external data
        // console.log(dataStructure);
    },

    methods: {
        async loadStarships() {
            // ---------------------------------------------------------
            // 1 - load data example using fetch + async await
            // ---------------------------------------------------------
            /*
             this.isLoading = true;
            try {
                // dispatch action and load stuff in store
                await this.$store.dispatch('starshipsModule/loadStarships', {
                    // TODO: add force reload or something like that in the payload
                    something: true
                });
            } catch (error) {
                this.error = error.message || 'Something went wrong!';
            }
            // loading complere
            this.isLoading = false;

            this.starships = this.$store.getters['starshipsModule/starships'];
            console.log(this.starships);
            */

            // --------------------------------------------------------------------------
            // 2 - load data example using fetch + then promise example (OR AXIOS)
            // --------------------------------------------------------------------------
            this.isLoading = true;
            this.$store
                .dispatch('starshipsModule/loadStarships', {
                    // TODO: add force reload or something like that in the payload
                    something: true
                })
                .then(response => {
                    // console.log(response);
                    if (response) {
                        // increase add fake delay a bit
                        // setTimeout(() => {
                        this.starships = this.$store.getters['starshipsModule/starships'];
                        // loading complete
                        this.isLoading = false;
                        // }, 1500);
                    }
                });
        }
    },

    computed: {
        getUserIdFromStore() {
            // get from root store
            return 'Get User id from root store >  ' + this.$store.state.userId;
        },
        getStarShipsFromStore() {
            // get from named module > starshipsModule
            if (this.$store.getters['starshipsModule/starships'][0]) {
                return this.$store.getters['starshipsModule/starships'][0].name;
            } else {
                return '';
            }
        }
        /*  getPlanetsFromStore() {
            // get from named module planetsModule
            return this.$store.getters['planetsModule/planets'][0].name;
        } */
    }
};
</script>

<style lang="scss" scoped>
@import 'StarshipsPage.scss';
</style>
