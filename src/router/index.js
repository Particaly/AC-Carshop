import Vue from 'vue';
import Router from 'vue-router';
import Header from '@/components/Header';
import Home from '@/components/HomePage';
import Shop from '@/components/Shop';

Vue.use(Router)

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
    }
  ]
})
