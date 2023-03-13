<template>
    <div class="container">
        <h2>Platform internals projects</h2>
        <div class="botton-container">
            <router-link to="indexedDB">
                <button>Indexed DB</button>
            </router-link>
            <router-link to="webWorker">
                <button>Web Worker</button>
            </router-link>
            <router-link to="dragDrop">
                <button>Drag & drop</button>
            </router-link>
            <router-link to="contenteditable">
                <button>Contenteditable</button>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 1000px;
    margin: 300px auto 0;
    text-align: center;
}

.button-container {
    margin-top: 50px;
}

button {
    padding: 10px 50px;
    margin-right: 25px;
    font-size: 18px;
}
</style>