<script setup>
import { ref } from 'vue'
import StudentForm from './components/StudentForm.vue'
import StudentDisplay from './components/StudentDisplay.vue'


const student = ref(null)

function receiveStudent(data) {
  student.value = data
  alert('Form submitted successfully!')
  console.log('Form submitted:', data)
}
</script>

<template>
  <StudentForm @student-submitted="receiveStudent" />

  <hr>

  <StudentDisplay
    v-if="student"
    :studentName="student.studentName"
    :studentID="student.studentID"
    :email="student.email"
    :course="student.course"
    :year-level="student.yearLevel"
  />
</template>
