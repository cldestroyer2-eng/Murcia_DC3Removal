<script>
import { studentMixin } from './StudentMixin';

export default {
    mixins: [studentMixin]
};
</script>

<template>
    <h1>Student Page</h1>

    <h3>Student: {{ studentName }}</h3>
    <p>Score: {{ score }}</p>

    <button @click="increment">Add Score</button>
    <button @click="decrement">Deduct Score</button>
    <button @click="reset">Reset</button>
</template>