<script>
    export default {
      data() {
        return {
          message: 'This is the Basket Page'
        }
      },

      methods: {
        changeMessage() {
          this.message = 'Basket Page Updated'
        },
        clearMessage() {
          this.message = ''
      }
      }
    }




</script>

<template>
   <h1>This is the Options API</h1>
   <h1>Message: {{ message }}</h1>
    <button @click="changeMessage">Change Message</button>
    <button @click="clearMessage">Clear Message</button>
    <br />

</template>