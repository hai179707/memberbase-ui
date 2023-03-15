<template>
    <component :is="to ? 'router-link' : 'button'"
        :to="to ? to : ''"
        class="mx-1 py-2 px-5 rounded-lg font-medium transition-colors duration-300"
        :class="secondary ? 'text-white bg-secondary hover:bg-secondary-hover' : outline ? 'text-secondary bg-gray-100 border border-gray-200 hover:bg-gray-200' : 'text-white bg-primary hover:bg-primary-hover'"
        @click="onClick"
        >
        {{ title }}
    </component>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        to: {
            type: String,
            default: ''   
        },
        secondary: Boolean,
        outline: Boolean,
    },
    methods: {
        onClick() {
            this.$emit('clickEvent')
        }
    }
}
</script>