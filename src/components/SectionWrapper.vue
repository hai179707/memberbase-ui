<template>
    <div class="py-20" :style="{backgroundImage: bgImage, backgroundColor: bgColor}">
        <div class="ct-container">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        bgImage: String,
        bgColor: {
            type: String, 
            default: '#f5f6f7'
        }
    }
}
</script>