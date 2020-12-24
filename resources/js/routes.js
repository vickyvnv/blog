import AllPosts from './components/AllPost.vue';
import AddPost from './components/AddPost.vue';
import EditPost from './components/EditPost.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllPosts
    },
    {
        name: 'add',
        path: '/add',
        component: AddPost
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditPost
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    }
];
