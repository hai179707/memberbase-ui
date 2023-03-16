<template>
    <section-wrapper bgImage="linear-gradient(54deg, rgba(255, 131, 122, 0.25), rgba(255, 131, 122, 0) 28%), linear-gradient(241deg, rgba(239, 152, 207, 0.25), rgba(239, 152, 207, 0) 36%)">
        <div class="flex flex-wrap flex-col-reverse md:flex-row gap-y-4 md:items-center px-5">
           <div class="w-full md:w-2/3"> 
                <div class="max-w-[500px]">
                    <h1 class="text-[35px] md:text-[46px] font-semibold leading-[1.25em]">Access a library of free design resources</h1>
                    <p class="text-secondary pt-5 pb-10 text-xl">The best resources and books from around the web, collected and curated for your reading.</p>
                    <Button :to="config.routes.logIn" large title="Get Access Now" />
                </div>
            </div>
            <div class="w-full md:w-1/3">
                <img src="@/assets/images/home.svg" alt="home" class="w-[120px] md:w-[337px]" />
            </div>
        </div>
    </section-wrapper>
</template>
<script>
import Button from './Button.vue'
import SectionWrapper from './SectionWrapper.vue'

export default {
    components: {
        SectionWrapper,
        Button
    }
}
</script>
<script setup>
import config from '@/config'
</script>