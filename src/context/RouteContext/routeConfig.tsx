import type React from "react";
import LoginPage from "../../component/Login";
import Todo from "../../component/Todo";
import UnAuthorised from "../../component/UnAuthorised";

export interface Routes {
    path: string;
    key: string;
    isProtected: boolean;
    isAllowed: boolean;
}

export const routes: Routes[] = [
    {
        path: '/un-authorised',
        key: 'unAuthorised',
        isProtected: false,
        isAllowed: true,
    },
    {
        path: '/login',
        key: 'login',
        isProtected: false,
        isAllowed: true,
    },
    {
        path: '/todo',
        key: 'todo',
        isProtected: true,
        isAllowed: false,
    }
];

export const componentMapping: Record<string, React.FC> = {
    login: LoginPage,
    todo: Todo,
    unAuthorised: UnAuthorised,
}