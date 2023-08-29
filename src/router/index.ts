import React from 'react';
import MainPage from '../pages/MainPage/MainPage';
import ItemPage from '../pages/ItemPage/ItemPage';

export interface IRoute {
    path: string,
    component: React.ComponentType,
    exact?: boolean
}

export enum RouteNames {
    MainPage = '/',
    ItemPage = '/item/:id'
}

export const routes: IRoute[] = [
    {
        path: RouteNames.MainPage,
        component: MainPage,
        exact: true
    },
    {
        path: RouteNames.ItemPage,
        component: ItemPage,
        exact: true
    },
    {
        path: '*',
        component: MainPage
    }
]