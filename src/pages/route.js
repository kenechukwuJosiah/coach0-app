// import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from './LandingPage/LandingPage.vue';
import CoachList from './coaches/CoachList.vue';
import CoachDetails from './coaches/CoachDetails.vue';

import RegisterCoach from './coaches/CoachRegistration.vue';
import RequestCoach from './coaches/ContactCoach.vue';
import RecievedRequestPage from './request/RequestRecieved.vue';
import Auth from './Auth/auth.vue';
import PageNotFound from './notFound.vue';
import ContactCoach from './coaches/ContactCoach.vue';
import ContactUs from './contactUs/ContactUs.vue';
import AboutUs from './aboutUs/AboutUs.vue';
import store from '../store/store.js';

// const CoachList = defineAsyncComponent(() => import('./coaches/CoachList.vue'));

// const CoachDetails = defineAsyncComponent(() =>
//   import('./coaches/CoachDetails.vue')
// );

// const ContactCoach = defineAsyncComponent(() =>
//   import('./coaches/ContactCoach.vue')
// );

// const ContactUs = defineAsyncComponent(() =>
//   import('./contactUs/ContactUs.vue')
// );

// const RegisterCoach = defineAsyncComponent(() =>
//   import('./coaches/CoachRegistration.vue')
// );

// const RequestCoach = defineAsyncComponent(() =>
//   import('./coaches/ContactCoach.vue')
// );

// // const AboutUs = defineAsyncComponent(() => import('./aboutUs/AboutUs.vue'));

// const RecievedRequestPage = defineAsyncComponent(() =>
//   import('./request/RequestRecieved.vue')
// );

// const Auth = defineAsyncComponent(() => import('./Auth/auth.vue'));

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: LandingPage
    },
    { path: '/coaches', component: CoachList },
    {
      path: '/coaches/:id',
      props: true,
      component: CoachDetails,
      children: [{ path: 'contact-coach', component: ContactCoach }]
    },
    { path: '/contact-us', component: ContactUs },
    { path: '/about', component: AboutUs },
    {
      path: '/register',
      component: RegisterCoach,
      meta: { requireAuth: true }
    },
    {
      path: '/request-page',
      component: RecievedRequestPage,
      meta: { requireAuth: true }
    },
    { path: '/request', component: RequestCoach },
    { path: '/:notFound(.*)', component: PageNotFound },
    { path: '/auth', component: Auth, meta: { requiresUnauth: true } }
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savePosition) {
    if (savePosition) return savePosition;
    return { left: 0, top: 0 };
  }
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requireAuth && !store.getters.isAuth) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuth) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
