const routes = [
    {
        path:      '/',
        component: () => import('layouts/MainLayout.vue'),
        children:  [
            { name: 'main', path: '', component: () => import('pages/IndexPage.vue'), redirect: { name: 'film' } },
            { name: 'info', path: 'info', component: () => import('pages/InfoPage.vue') },
            { name: 'actors', path: 'actors', component: () => import('pages/ActorsPage.vue') },
            { name: 'music', path: 'music', component: () => import('pages/MusicPage.vue') },
            { name: 'film', path: 'film', component: () => import('pages/FilmPage.vue') },
        ],
    },
    
    // Always leave this as last one,
    // but you can also remove it
    {
        path:      '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
];

export default routes;
