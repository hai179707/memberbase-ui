<template>
    <h3 class="font-semibold">{{ title }}</h3>
    <ul class="text-secondary mt-3">
        <li v-for="item in items" :key="item.id" class="py-1">
            <router-link :to="item.url" class="hover:text-primary transition-colors duration-300">
                {{ item.name }}
            </router-link>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        title: {
            type: String, 
            required: true
        },
        items: {
            type: Array, 
            required: true
        }
    }
}
</script>