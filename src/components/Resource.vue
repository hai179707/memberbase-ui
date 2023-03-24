<template>
    <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-5 transition-transform duration-300 hover:-translate-y-1">
        <router-link :to="'/resources/' + data.path">
            <img :src="data.image" alt="resource" class="rounded-lg mb-5" />
        </router-link>
        <p class="text-secondary">By {{ data.author }}</p>
        <router-link :to="'/resources/' + data.path">
            <h3 class="text-2xl font-semibold py-3">{{ data.title }}</h3>
            <p class="text-secondary">{{ data.description }}</p>
        </router-link>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>