<template>
    <component 
        :is="to ? 'router-link' : 'button'"
        :to="{to: to}"
        :class="large
            ?
            secondary ? 'py-3 px-7 text-white bg-secondary hover:bg-secondary-hover' : outline ? 'py-3 px-7 text-secondary bg-gray-100 border border-gray-200 hover:bg-gray-200' : 'py-3 px-7 text-white bg-primary hover:bg-primary-hover'
            :
            secondary ? 'py-2 px-5 text-white bg-secondary hover:bg-secondary-hover' : outline ? 'py-2 px-5 text-secondary bg-gray-100 border border-gray-200 hover:bg-gray-200' : 'py-2 px-5 text-white bg-primary hover:bg-primary-hover'
            "
        class="mx-1 rounded-lg font-medium transition-colors duration-300"
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
        large: Boolean,
    },
    setup(props, {emit}) {
        const onClick = () => emit('clickEvent')
        return {
            onClick
        }
    }
}
</script>