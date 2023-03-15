<template>
    <Header />
    <div class="pt-20 min-h-[90vh]">
        <slot />
    </div>
    <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
        Header,
        Footer
    }
}
</script>