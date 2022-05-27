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
                props: true,
                component: View
            },
            {
                path: ":id/edit",
                name: "UsersEdit",
                props: true,
                component: View
            },
            {
                path: "create",
                name: "UsersCreate",
                props: true,
                component: View
            }
        ]
    }
]