import { createRouter, createWebHashHistory } from "vue-router";
import indexedDB from "./components/indexedDB.vue";
import webWorker from "./components/webWorker.vue";
import homePage from "./components/homePage.vue";
import dragDrop from "./components/dragDrop.vue";
import contenteditable from "./components/contenteditable.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", name: "home", component: homePage },
        { path: "/indexedDB", name: "indexedDB", component: indexedDB },
        { path: "/webWorker", name: "webWorker", component: webWorker },
        { path: "/dragDrop", name: "dragDrop", component: dragDrop },
        { path: "/contenteditable", name: "contenteditable", component: contenteditable },
    ],
})

export default router;