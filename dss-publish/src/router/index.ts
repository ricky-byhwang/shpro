import { createRouter, createWebHistory } from 'vue-router';
// import MainRoutes from './MainRoutes';
// import AuthRoutes from './AuthRoutes';
// import { useAuthStore } from '@/stores/auth';
// import ComponentRoutes from './ComponentRoutes';
import CommonRoutes from './dss/CommonRoutes';
import GuideRoutes from './dss/GuideRoutes';

// import { useUIStore } from '@/stores/ui';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/:pathMatch(.*)*',
    //   component: () => import('@/views/pages/maintenance/error/Error404Page.vue')
    // },
    // MainRoutes,
    // ComponentRoutes,
    CommonRoutes,
    GuideRoutes
    // AuthRoutes
  ]
});

// interface User {
//   // Define the properties and their types for the user data here
//   // For example:
//   id: number;
//   name: string;
// }

// Assuming you have a type/interface for your authentication store
// interface AuthStore {
//   user: User | null;
//   returnUrl: string | null;
//   login(username: string, password: string): Promise<void>;
//   logout(): void;
// }

/* 로그인으로 이동
router.beforeEach(async (to, from, next) => {
  const publicPages = ['/auth/login1'];
  const authRequired = !publicPages.includes(to.path);
  const auth: AuthStore = useAuthStore();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (authRequired && !auth.user) {
      auth.returnUrl = to.fullPath;
      return next('/auth/login1');
    } else next();
  } else {
    next();
  }
});
*/

// router.beforeEach(() => {
//   const uiStore = useUIStore();
//   uiStore.isLoading = true;
// });

// router.afterEach(() => {
//   const uiStore = useUIStore();
//   uiStore.isLoading = false;
// });
