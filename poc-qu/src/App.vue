<template>
    <div class="main-wrapper">
        <header-component></header-component>
        <content-component></content-component>
        <footer-component></footer-component>
    </div>
</template>

<script>
import FooterComponent from './components/FooterComponent/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent/HeaderComponent.vue';
import ContentComponent from './components/ContentComponent/ContentComponent.vue';

export default {
    components: {
        FooterComponent,
        HeaderComponent,
        ContentComponent
    }
};
</script>

<style scoped lang="scss">
@import 'App.scss';
</style>
