<script setup>
    import { ref } from 'vue'
    
    const about = ref('about you')

</script>

<template>
<h1>This is the About page</h1>
<p>About: {{ about }}</p>
</template>