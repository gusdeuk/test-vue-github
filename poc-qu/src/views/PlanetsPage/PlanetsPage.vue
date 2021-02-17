<template>
    <transition name="fade-view" appear>
        <div class="planets-page">
            <div class="page-title">Planets page</div>
            <planet-list class="page-content"></planet-list>
        </div>
    </transition>
</template>

<script>
// import components
import PlanetList from './PlanetList/PlanetList.vue';

export default {
    name: 'planetsPage',
    components: {
        PlanetList
    },
    computed: {},

    mounted() {
        // console.log(this.$store.getters);
        // console.log(this.$store.getters['starshipsModule/starships']);
    }
};
</script>

<style lang="scss" scoped>
@import 'PlanetsPage.scss';
</style>
