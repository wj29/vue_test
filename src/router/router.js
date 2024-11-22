import {createWebHashHistory, createRouter} from "vue-router";
import Home from "../components/Home.vue"
import HelloWorld from "../components/HelloWorld.vue";
import Contact from "../components/Contact.vue";
import IP from "../components/IP.vue";

const routerConfig = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/hello",
        name: "hello",
        component: HelloWorld
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact,
        children: [
            {
                path: "/ip",
                name: "ip",
                component: IP
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routerConfig,
})

export default router;
