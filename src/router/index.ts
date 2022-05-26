import { createRouter, createWebHistory } from 'vue-router'
import homeRoutes from "../home/routes";
import usersRoutes from "../users/routes"

const routes = [
    ...homeRoutes,
    ...usersRoutes
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router