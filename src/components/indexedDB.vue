<script setup>
import { ref } from 'vue'

const dbName = 'my-db';
const storeName = 'todos';
const dbVersion = 1;
const inputValue = ref("");
const todos = ref([]);

const request = indexedDB.open(dbName, dbVersion);

request.onerror = function(event) {
  console.log("error: " + event);
};

request.onupgradeneeded = (event) => {
  let db = event.target.result;
  if (!db.objectStoreNames.contains(storeName)) {
    db.createObjectStore(storeName, {keyPath: 'id', autoIncrement: true});
  }
}

request.onsuccess = function(event) {
  let db = request.result;
  const transaction = db.transaction(storeName, "readwrite");
  const store = transaction.objectStore(storeName);

  store.getAll().onsuccess = (event) => {
    todos.value = event.target.result
  }
}

function addTodo() {
  let db = request.result;
  const transaction = db.transaction(storeName, "readwrite");
  const store = transaction.objectStore(storeName);

  store.add({ title: inputValue.value }).onsuccess = (event) => {
    const newId = event.target.result
    todos.value.push({ id: newId, title: inputValue.value })
    inputValue.value = ''
  }
}

function deleteTodo(index) {
  let db = request.result;
  const transaction = db.transaction(storeName, "readwrite");
  const store = transaction.objectStore(storeName);

  store.delete(todos.value[index].id).onsuccess = () => {
    todos.value.splice(index, 1)
  }
}
</script>

<template>
  <div class="container">
    <h2>index DB</h2>
    <input type="text" id="todo" v-model="inputValue" placeholder="type your todo here">
    <button @click="addTodo()" class="submit">Add todo</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id">{{ index + 1 }}. {{ todo.title }}
        <button @click="deleteTodo(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
    width: 1000px;
    margin: 50px auto;
    text-align: center;
}

input {
  height: 30px;
  width: 300px;
}

.submit{
  height: 32px;
  width: 100px;
}

ul {
  list-style-type: none;
}

li button {
  margin-left: 15px;
}

li {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
}
</style>

