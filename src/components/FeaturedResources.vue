<template>
    <section-wrapper>
        <div class="flex justify-between items-center mb-10 px-5">
            <h2 class="text-2xl font-semibold">Featured Resources</h2>
            <div>
                <Button outline title="See All Resources" />
            </div>
        </div>
        <div class="flex flex-wrap gap-y-10">
            <resource v-for="resource in featuredResources" :key="resource.id" :data="resource" />
        </div>
    </section-wrapper>
</template>
<script>
import SectionWrapper from './SectionWrapper.vue'
import Button from './Button.vue'
import Resource from './Resource.vue'

export default {
    setup() {
        return {

        }
    },
    components: {
        SectionWrapper,
        Button,
        Resource
    }
}
</script>

<script setup>
import { featuredResources } from '@/data'
</script>