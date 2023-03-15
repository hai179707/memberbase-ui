<template>
    <div class="py-20" :style="{background: bgColor}">
        <div class="ct-container">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        bgColor: {
            type: String,
            default: '#fff'
        }
    }
}
</script>