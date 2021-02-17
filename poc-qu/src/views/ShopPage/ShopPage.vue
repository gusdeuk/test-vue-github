<template>
    <transition name="fade-view" appear>
        <div class="shop-page">
            <div class="page-title">Shop page</div>
            <div class="page-content">
                <div class="controls">
                    <button type="button" class="control" data-filter="all">All</button>
                    <button type="button" class="control" data-filter=".green">Green</button>
                    <button type="button" class="control" data-filter=".blue">Blue</button>
                    <button type="button" class="control" data-filter=".pink">Pink</button>
                    <button type="button" class="control" data-filter="none">None</button>

                    <button type="button" class="control" data-sort="default:asc">Asc</button>
                    <button type="button" class="control" data-sort="default:desc">Desc</button>
                </div>

                <div id="mixitup-element" ref="mixerRef" class="mix-container">
                    <div class="mix-item green"></div>
                    <div class="mix-item green"></div>
                    <div class="mix-item blue"></div>
                    <div class="mix-item pink"></div>
                    <div class="mix-item green"></div>
                    <div class="mix-item blue"></div>
                    <div class="mix-item pink"></div>
                    <div class="mix-item blue"></div>

                    <div class="gap-item"></div>
                    <div class="gap-item"></div>
                    <div class="gap-item"></div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import mixitup from 'mixitup';
let mixer = null;
export default {
    name: 'shopPage',
    data() {
        return {
            msg: 'lalalala'
        };
    },
    mounted() {
        // create mixitup instance
        setTimeout(() => {
            const containerEl = document.querySelector('#mixitup-element');
            const mixerConfig = {
                selectors: {
                    target: '.mix-item'
                }
            };
            // use ref instead id's
            mixer = mixitup(this.$refs.mixerRef, mixerConfig);
            //const mixer = mixitup(containerEl, mixerConfig);
        }, 200);
    },
    beforeUnmount() {
        // destroy mixitup instance
        console.log('destroy');
        mixer.destroy();
    }
};
</script>

<style scoped lang="scss">
@import 'ShopPage.scss';
</style>
