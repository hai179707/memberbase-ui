<template>
    <div class="hidden md:block">
       <form 
        class="bg-gray-100 border border-gray-200 rounded-lg focus-within:border-gray-300 hover:border-gray-300 transition-colors duration-500"
        @submit.prevent="onSubmit"
        >
        <button class="bg-transparent px-3 py-2 text-secondary">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
        <input 
            type="text"
            placeholder="Search resources"
            class="outline-none border-none bg-transparent w-[200px] lg:w-[280px]"
            v-model="searchValue"
        />
       </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchValue: ''
        }
    },
    methods: {
        onSubmit() {
            console.log(this.searchValue)
        }
    }
}
</script>