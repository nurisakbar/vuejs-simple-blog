import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Article from '../views/Article.vue';
import ArticleDetail from '../views/ArticleDetail.vue';


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/register', name: 'Register', component: Register },
  { path: '/login', name: 'Login', component: Login },
  { path: '/article', name: 'Article', component: Article },
  { path: '/article/:id', name: 'ArticleDetal', component: ArticleDetail }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
