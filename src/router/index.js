import Vue from 'vue'
import VueRouter from 'vue-router'
import StartPage from '../components/StartPage.vue'
import AboutAuthorPage from '../components/AboutAuthorPage.vue'
import AdminPanelPage from '../components/AdminPanelPage.vue'
import AuthorizationPage from '../components/AuthorizationPage.vue'
import AddingNewArticlePage from '../components/AddingNewArticlePage.vue'
import ArticleEditPage from '../components/ArticleEditPage.vue'
import OneArticlePage from '../components/OneArticlePage.vue'
import RegistrationPage from '../components/RegistrationPage.vue'
import NotFoundPage from '../components/NotFoundPage.vue'

Vue.use(VueRouter)

const routes = [
	{
    path: '/',
    name: 'StartPage',
    component: StartPage
  },
	{
    path: '/authorization-page',
    name: 'AuthorizationPage',
    component: AuthorizationPage
  },
  {
    path: '/admin-panel',
    name: 'AdminPanelPage',
    component: AdminPanelPage
  },
	{
    path: '/about-author',
    name: 'AboutAuthorPage',
    component: AboutAuthorPage
  },
	{
    path: '/adding-new-article',
    name: 'AddingNewArticlePage',
    component: AddingNewArticlePage
  },
	{
    path: '/article-edit',
    name: 'ArticleEditPage',
    component: ArticleEditPage
  },
	{
    path: '/one-article',
    name: 'OneArticlePage',
    component: OneArticlePage
  },
	{
    path: '/registration',
    name: 'RegistrationPage',
    component: RegistrationPage
  },
	{
    path: '*',
    name: 'NotFoundPage',
    component: NotFoundPage
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router