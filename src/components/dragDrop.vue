<script setup>
import { onMounted } from 'vue'

onMounted(() => {

  let dragSrcEl = null;

  function handleDragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
      
      const computedStyleDrag = window.getComputedStyle(dragSrcEl);
      const computedStyleThis = window.getComputedStyle(this);
      const backgroundColorDrag = computedStyleDrag.getPropertyValue('background-color');
      const backgroundColorThis = computedStyleThis.getPropertyValue('background-color');
      this.style.backgroundColor = backgroundColorDrag;
      dragSrcEl.style.backgroundColor = backgroundColorThis;
    }
    return false;
  }



  let items = document.querySelectorAll('.box-container .box');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('drop', handleDrop, false);
  });
});
</script>

<template>
  <div class="container">
    <h2>Drag & drop</h2>
    <div class="box-container">
      <div draggable="true" class="box box-1">First</div>
      <div draggable="true" class="box box-2">Second</div>
      <div draggable="true" class="box box-3">Third</div>
      <div draggable="true" class="box box-4">Fourth</div>
      <div draggable="true" class="box box-5">Fifth</div>
      <div draggable="true" class="box box-6">Sixth</div>
    </div>
  </div>
</template>

<style scoped>
.container {
    width: 1000px;
    margin: 50px auto;
    text-align: center;
}

.box-container {
  font-size: 24px;
  border: 2px dotted #393E46;
  padding: 10px;
  border-radius: 10px;
  box-shadow: #0000001a 0px 4px 12px;
  display: flex;
}

.box {
  width: 150px;
  border: 1px solid #393E46;
  margin: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  cursor: move;
}

.box-1 {
  background-color: rgba(145, 0, 181, 0.835);
}
.box-2 {
  background-color: #0048b5d5;
}
.box-3 {
  background-color: #00b561d5;
}
.box-4 {
  background-color: #b2b500d5;
}
.box-5 {
  background-color: #b56100d5;
}
.box-6 {
  background-color: #b50000d5;
}
</style>