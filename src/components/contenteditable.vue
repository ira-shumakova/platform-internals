<template>
  <div class="container">
    <h2>Contenteditable</h2>
    <blockquote contenteditable="true">Here can be your quote</blockquote>
  </div>
</template>

<style scoped>
.container {
    width: 1000px;
    margin: 50px auto;
    text-align: center;
}

blockquote {
  font-size: 24px;
  border: 2px dotted #393E46;
  padding: 20px 10px;
  border-radius: 10px;
  box-shadow: #0000001a 0px 4px 12px;
}

blockquote:focus-visible {
  outline: none;
  border: 2px dotted #626b7a;
  box-shadow: #d6d6d61a 0px 4px 12px;
}

</style>