<script setup>
import { ref, onMounted } from 'vue'

const length = ref()
const array = ref([])
const isSorting = ref(false)
const worker = new Worker('sort.worker.js');

function generateArray() {
  array.value = Array.from({ length: length.value }, () =>
    Math.floor(Math.random() * 10000)
  )
}

function sortArray() {
  isSorting.value = true
  generateArray()
  worker.postMessage(JSON.stringify(array.value))
  array.value = [];
}

onMounted(() => {
  worker.onmessage = event => {
    isSorting.value = false
    array.value = JSON.parse(event.data)
  }
})
</script>

<template>
  <div class="container">
    <h2>Web Worker</h2>
    <label>Enter array length:</label>
    <input v-model="length" type="number">
    <button @click="sortArray">Sort array</button>
    <div v-if="isSorting">Sorting...</div>
    <div v-if="array.length" class="sorted">
      <span v-for="(num, index) in array" :key="num">{{ num }}
        <span v-if="index === array.length - 1">.</span>
        <span v-else>, </span>
      </span>
    </div>
  </div>
</template>

<style>
.container {
    width: 1000px;
    margin: 50px auto;
    text-align: center;
}

.sorted {
  margin-top: 20px;
  border: 2px dotted #393E46;
  padding: 20px 10px;
  border-radius: 10px;
  box-shadow: #0000001a 0px 4px 12px;
}

label {
  color: #00ADB5;
  padding-right: 10px;
  font-size: 20px;
}

input {
  border: 2px solid #393E46;
  border-radius: 10px;
  padding-left: 10px;
  width: 150px;
  height: 20px;
  margin-right: 10px;
  color: #222831;
}

input:focus-visible {
  outline: none;
}

button {
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>

