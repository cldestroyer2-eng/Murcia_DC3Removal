<script setup>
import { ref } from 'vue'

const studentName = ref('')
const studentID = ref('')
const course = ref('')
const yearLevel = ref('')
const email = ref('')

// const email = ref('')
// const bookCategory = ref('')
// const bookTitle = ref('')
// const bookAuthor = ref('')
// const requestType = ref('')
// const confirmation = ref(false)
// const reason = ref('')

const emit = defineEmits(['student-submitted'])

function submitForm() {
  emit('student-submitted', {
    studentName: studentName.value,
    studentID: studentID.value,
    email: email.value,
    yearLevel: yearLevel.value,
    course: course.value

    // bookCategory: bookCategory.value,
    // bookTitle: bookTitle.value,
    // bookAuthor: bookAuthor.value,
    // requestType: requestType.value,
    // confirmation: confirmation.value,
    // reason: reason.value
  })
}
</script>

<template>
  <div>
    <h1>Student Information Form</h1>
  </div>

  <form @submit.prevent="submitForm">
    <input
      type="text"
      v-model="studentName"
      placeholder="Student Name"
      required
    >
    <br><br>
    <input
      type="text"
      v-model="studentID"
      placeholder="Student ID"
      required
    >
    <br><br>
    <input
      type="email"
      v-model="email"
      placeholder="Email"
      required
    >
    <br><br>

    <select v-model="course" required>
      <option value="">Select Course</option>
      <option value="BSIT">BSIT</option>
      <option value="BSCS">BSCS</option>
      <option value="BSIS">BSIS</option>
    </select>

  <br><br>
    <input v-model="yearLevel" type="radio" id="1" value="1st Year" required="">
    <label for="1">1st Year</label>
    <br>
    <input v-model="yearLevel" type="radio" id="2" value="2nd yaer" required="">
    <label for="2">2st Year</label>
    <br>
    <input v-model="yearLevel" type="radio" id="3" value="3rd Year" required="">
    <label  for="3">3st Year</label>
    <br>
    <input v-model="yearLevel" type="radio" id="4" value="4th Year" required="">
    <label  for="4">4st Year</label>
    <br><br>
    <!-- <input
      type="text"
      v-model="bookTitle"
      placeholder="Book Title"
      required
    >

    <input
      type="text"
      v-model="bookAuthor"
      placeholder="Book Author"
      required
    >

    <div>
      <label>
        <input type="radio" v-model="requestType" value="New" required>
        New
      </label>

      <label>
        <input type="radio" v-model="requestType" value="Renewal">
        Renewal
      </label>
    </div>

    <label>
      <input type="checkbox" v-model="confirmation" required>
      I confirm that the information provided is accurate.
    </label>

    <textarea
      v-model="reason"
      placeholder="Reason for Request"
      required
    ></textarea> -->

    <button type="submit">Submit Student</button>
  </form>

  <hr>

  <p>Name: {{ studentName }}</p>
  <p>Student ID: {{ studentID }}</p>
  <p>Course: {{ course }}</p>
  <p>Year Level: {{ yearLevel }}</p>
  <p>Email: {{ email }}</p>

  <!-- <p>Book Title: {{ bookTitle }}</p>
  <p>Book Author: {{ bookAuthor }}</p>
  <p>Request Type: {{ requestType }}</p>
  <p>Confirmation: {{ confirmation ? 'Yes' : 'No' }}</p>
  <p>Reason: {{ reason }}</p> -->
</template>
