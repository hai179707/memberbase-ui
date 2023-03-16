<template>
    <section-wrapper>
       <div class="px-5 flex flex-wrap gap-y-10">
            <div class="w-full md:w-1/2 text-secondary">
                <logo />
                <p class="mt-5">Built by Nikolai Bain.</p>
                <p>Powered by Webflow.</p>
                <p class="mt-10">© 2022 Memberbase. All Rights Reserved.</p>
            </div>
            <div class="w-full md:w-1/2 flex flex-wrap gap-y-10">
                <div class="w-full sm:w-1/2 md:w-1/3" v-for="nav in footerNavs" :key="nav.id">
                    <footer-nav :items='nav.items' :title="nav.title" />
                </div>
            </div>
       </div>
    </section-wrapper>
</template>
<script>
import SectionWrapper from './SectionWrapper.vue'
import Logo from './Logo.vue'
import FooterNav from './FooterNav.vue'

export default {
    components: {
        SectionWrapper,
        Logo,
        FooterNav
    }
}
</script>
<script setup>
import { footerNavs } from '@/data'
</script>