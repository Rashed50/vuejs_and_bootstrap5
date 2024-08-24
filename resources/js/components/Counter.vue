<script setup>
    import { ref } from 'vue'

    const count = ref(0)
</script>

<template>
    

    <button class="btn btn-primary" @click="count++">
        Click Me {{ count }} Times
    </button>
</template>
