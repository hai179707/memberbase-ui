<template>
  <div>
    <intro-section />
    <featured-resources-section />
    <subscribe-section />
  </div>
</template>

<script>
import IntroSection from '@/components/IntroSection.vue'
import FeaturedResourcesSection from '@/components/FeaturedResources.vue'
import SubscribeSection from '@/components/SubscribeSection.vue'

export default {
  components: {
    IntroSection,
    FeaturedResourcesSection,
    SubscribeSection
  }
}
</script>
