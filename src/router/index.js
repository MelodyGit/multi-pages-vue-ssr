import Vue from 'vue'
import Router from 'vue-router'
import { entryToRoutePath } from '../../build/entryRoutesConf'

Vue.use(Router)

// route-level code splitting
const createListView = id => () =>
    import ('../views/CreateListView').then(m => m.default(id))
const ItemView = () =>
    import ('../views/ItemView.vue')
const UserView = () =>
    import ('../views/UserView.vue')
const HomeView = () =>
    import ('../views/HomeView.vue')
const AdminView = () =>
    import ('../views/AdminView.vue')
const AdminList = () =>
    import ('../views/AdminList.vue')
const HomePage = () =>
    import ('../pages/home/App.vue')
const AdminPage = () =>
    import ('../pages/admin/App.vue')


export function createRouter(url) {
    // const isAdmin = url.indexOf('admin') !== -1

    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior: () => ({ y: 0 }),
        // routes: !isAdmin ? [
        //     // { path: '/top/:page(\\d+)?', component: createListView('top') },
        //     // { path: '/new/:page(\\d+)?', component: createListView('new') },
        //     // { path: '/show/:page(\\d+)?', component: createListView('show') },
        //     // { path: '/ask/:page(\\d+)?', component: createListView('ask') },
        //     // { path: '/job/:page(\\d+)?', component: createListView('job') },
        //     // { path: '/item/:id(\\d+)', component: ItemView },
        //     // { path: '/user/:id', component: UserView },
        //     // { path: '/', redirect: '/top' }
        //     { path: '/home', component: HomeView },
        //     { path: '/', redirect: '/home' }
        // ] : [
        //     { path: '/admin', component: AdminView }
        // ]
        routes: [
            { path: '/', redirect: '/home' },
            {
                // path: entryToRoutePath("home"),
                path: '/home',
                component: HomePage,
                children: [{
                    path: '/',
                    component: HomeView
                }]
            },
            {
                // path: entryToRoutePath("admin"),
                path: '/admin',
                component: AdminPage,
                children: [{
                    path: '/',
                    component: AdminView
                }, {
                    path: "/list",
                    component: AdminList
                }]
            }
        ]
    })
}