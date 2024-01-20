const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'signin', component: () => import('pages/SignIn/Index.vue'), alias: '' },
      { path: 'signup', component: () => import('pages/SignUp/Index.vue') },
      { path: 'main', component: () => import('pages/Main/Index.vue ') },
      { path: 'my-area', component: () => import('pages/MyArea/Index.vue ') },
      { path: 'profile', component: () => import('pages/Profile/Index.vue ') },
      { path: 'new-post', component: () => import('pages/NewPost/Index.vue ') },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
