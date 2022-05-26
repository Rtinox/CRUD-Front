import Home from "./views/Home.vue";
import Index from "./views/Index.vue";
import View from "./views/View.vue";

export default [
    {
        path: '/users',
        name: 'UsersHome',
        component: Home,
        children: [
            {
                path: '',
                name: 'UsersIndex',
                component: Index,
            },
            {
                path: ":id",
                name: "UsersView",
                component: View
            }
        ]
    }
]