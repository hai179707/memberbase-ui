<template>
    <section-wrapper bgColor="#1d1d1d" bgImage="radial-gradient(circle farthest-corner at 0% 50%, rgba(255, 1, 1, 0.15), transparent 47%), radial-gradient(circle farthest-corner at 40% 130%, rgba(122, 167, 255, 0.41), transparent 58%)">
        <div class="text-white text-center">
            <h2 class="text-3xl sm:text-4xl font-semibold">Get more great resources</h2>
            <p class="py-5 text-xl">Get the latest design resources from across the web. Straight to your inbox.</p>
        </div>
        <div class="flex flex-col sm:flex-row justify-center gap-2">
            <input type="email" placeholder="Enter your email" class="rounded-lg px-3 py-2 mx-1" />
            <Button secondary title="Subscribe" />
        </div>
    </section-wrapper>
</template>
<script>
import SectionWrapper from './SectionWrapper.vue'
import Button from './Button.vue'
export default {
    components: {
        SectionWrapper,
        Button
    }
}
</script>