
import { createRouter, createWebHistory } from "vue-router";
import Routes from "./routes";
export const routes: Array<any> = Routes;

const router = createRouter({
    history: createWebHistory(""),
    routes
})
export default router