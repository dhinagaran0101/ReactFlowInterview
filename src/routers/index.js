import Dashboard from "../pages/dashboard";
import Posts from "../pages/posts";

export const navigationLinks = [
    {
        path: '/',
        component: <Dashboard />
    },
    {
        path: '/posts',
        component: <Posts />
    }
]