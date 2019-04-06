import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Header from '@/components/common/Header';
import Home from '@/components/pages/HomePage';
import Shop from '@/components/pages/Shop';
import Login from '@/components/pages/Login';

Vue.use(Router)
Vue.use(ElementUI);

export default new Router({
	mode:'hash',
  routes: [
    {
      path: '/',
      name: '/',
      components: {
      	'header':Header,
      	'body':Home,
      }
    },
    {
    	path: '/shop',
    	name: 'shop',
    	components:{
    		'header':Header,
    		'body':Shop
    	}
    },
    {
    	path: '/login',
    	name: 'login',
    	components:{
    		'header':Header,
    		'body':Login
    	}
    }
  ]
})
