<template>
    <div class="header-wrapper">
        <div class="logo">
            <img src="../../images/logo.svg" height="100" />
        </div>

        <div class="navigation-menu">
            <router-link to="/"><span class="label">Planets</span></router-link>
            <router-link to="/starships"><span class="label">Starships</span></router-link>
            <router-link to="/shop"><span class="label">Shop</span></router-link>
            <router-link to="/contact"><span class="label">Contact</span></router-link>
        </div>
    </div>
</template>

<script>
// -------------------------------------------------------------
// import components
export default {
    name: 'headerComponent'
};
</script>

<style lang="scss" scoped>
@import 'headerComponent.scss';
</style>
