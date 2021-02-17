<template>
    <!-- router view VUE component  -->
    <router-view class="content-wrapper" v-slot="slotProps">
        <!-- simple vue transition for content area in routes (NOT USED)-->
        <!-- <transition name="fade-page" mode="out-in"> -->
        <keep-alive>
            <component :is="slotProps.Component"></component>
        </keep-alive>
        <!-- </transition> -->
    </router-view>
</template>

<script>
// -------------------------------------------------------------
// import components
export default {
    name: 'contentComponent'
};
</script>

<style lang="scss" scoped>
@import 'ContentComponent.scss';
</style>
