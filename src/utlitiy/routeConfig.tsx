import Todo from "../component/Todo/index.tsx";
import LoginPage from '../component/Login/index.tsx'

export const routes = [
    {
        path: '/login',
        key: 'login',
        component: LoginPage
    },
    {
        path: '/todo',
        key: 'todo',
        component: Todo
    }
]