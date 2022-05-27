import { createRouter, createWebHistory } from 'vue-router'
import homeRoutes from "../home/routes";
import usersRoutes from "../users/routes"

/**
 * Routes du routeur importé des différents domaines (home, utilisateurs)
 */
const routes = [
    ...homeRoutes,
    ...usersRoutes
]

/**
 * Création du routeur avec un historique
 */
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router