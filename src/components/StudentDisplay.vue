<script setup>
defineProps({
  studentName: String,
  studentID: String,
  email: String,
  course: String,
  yearLevel: String
  // bookCategory: String,
  // bookTitle: String,
  // bookAuthor: String,
  // requestType: String,
  // confirmation: Boolean,
  // reason: String
})
</script>

<template>
  <div>
    <h1>Student Details</h1>
  <p>Name: {{ studentName }}</p>
  <p>Student ID: {{ studentID }}</p>
  <p>Course: {{ course }}</p>
  <p>Year Level: {{ yearLevel }}</p>
  <p>Email: {{ email }}</p>
    
    
    <!-- <p>Book Category: {{ bookCategory }}</p>
    <p>Book Title: {{ bookTitle }}</p>
    <p>Book Author: {{ bookAuthor }}</p>
    <p>Request Type: {{ requestType }}</p>
    <p>Confirmation: {{ confirmation ? 'Yes' : 'No' }}</p>
    <p>Reason: {{ reason }}</p> -->
  </div>
</template>
