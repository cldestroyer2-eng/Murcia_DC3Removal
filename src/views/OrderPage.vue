<script setup>


    import { ref, computed } from 'vue'

    const messages = ref('This is the Basket Page')

    function changesMessage() {
      messages.value = 'Basket Page Updated'
    }

    function clearMessages() {
      messages.value = ''
    }

</script>

<template>
    <h1>Order Page</h1>

    <h4>This is the Composition API</h4>
    <p>Message: {{ messages }}</p>
    <button @click="changesMessage">Change Message</button>
    <button @click="clearMessages">Clear Message</button>

</template>