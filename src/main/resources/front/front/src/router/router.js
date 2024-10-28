import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import yuanxiaoxinxiList from '../pages/yuanxiaoxinxi/list'
import yuanxiaoxinxiDetail from '../pages/yuanxiaoxinxi/detail'
import yuanxiaoxinxiAdd from '../pages/yuanxiaoxinxi/add'
import beikaojingyanList from '../pages/beikaojingyan/list'
import beikaojingyanDetail from '../pages/beikaojingyan/detail'
import beikaojingyanAdd from '../pages/beikaojingyan/add'
import kaoyanzhengceList from '../pages/kaoyanzhengce/list'
import kaoyanzhengceDetail from '../pages/kaoyanzhengce/detail'
import kaoyanzhengceAdd from '../pages/kaoyanzhengce/add'
import kechengziliaoList from '../pages/kechengziliao/list'
import kechengziliaoDetail from '../pages/kechengziliao/detail'
import kechengziliaoAdd from '../pages/kechengziliao/add'
import linianzhentiList from '../pages/linianzhenti/list'
import linianzhentiDetail from '../pages/linianzhenti/detail'
import linianzhentiAdd from '../pages/linianzhenti/add'
import kaoyandaojishiList from '../pages/kaoyandaojishi/list'
import kaoyandaojishiDetail from '../pages/kaoyandaojishi/detail'
import kaoyandaojishiAdd from '../pages/kaoyandaojishi/add'
import cepingxinxiList from '../pages/cepingxinxi/list'
import cepingxinxiDetail from '../pages/cepingxinxi/detail'
import cepingxinxiAdd from '../pages/cepingxinxi/add'
import zaixiancepingList from '../pages/zaixianceping/list'
import zaixiancepingDetail from '../pages/zaixianceping/detail'
import zaixiancepingAdd from '../pages/zaixianceping/add'
import dakaxinxiList from '../pages/dakaxinxi/list'
import dakaxinxiDetail from '../pages/dakaxinxi/detail'
import dakaxinxiAdd from '../pages/dakaxinxi/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'yuanxiaoxinxi',
					component: yuanxiaoxinxiList
				},
				{
					path: 'yuanxiaoxinxiDetail',
					component: yuanxiaoxinxiDetail
				},
				{
					path: 'yuanxiaoxinxiAdd',
					component: yuanxiaoxinxiAdd
				},
				{
					path: 'beikaojingyan',
					component: beikaojingyanList
				},
				{
					path: 'beikaojingyanDetail',
					component: beikaojingyanDetail
				},
				{
					path: 'beikaojingyanAdd',
					component: beikaojingyanAdd
				},
				{
					path: 'kaoyanzhengce',
					component: kaoyanzhengceList
				},
				{
					path: 'kaoyanzhengceDetail',
					component: kaoyanzhengceDetail
				},
				{
					path: 'kaoyanzhengceAdd',
					component: kaoyanzhengceAdd
				},
				{
					path: 'kechengziliao',
					component: kechengziliaoList
				},
				{
					path: 'kechengziliaoDetail',
					component: kechengziliaoDetail
				},
				{
					path: 'kechengziliaoAdd',
					component: kechengziliaoAdd
				},
				{
					path: 'linianzhenti',
					component: linianzhentiList
				},
				{
					path: 'linianzhentiDetail',
					component: linianzhentiDetail
				},
				{
					path: 'linianzhentiAdd',
					component: linianzhentiAdd
				},
				{
					path: 'kaoyandaojishi',
					component: kaoyandaojishiList
				},
				{
					path: 'kaoyandaojishiDetail',
					component: kaoyandaojishiDetail
				},
				{
					path: 'kaoyandaojishiAdd',
					component: kaoyandaojishiAdd
				},
				{
					path: 'cepingxinxi',
					component: cepingxinxiList
				},
				{
					path: 'cepingxinxiDetail',
					component: cepingxinxiDetail
				},
				{
					path: 'cepingxinxiAdd',
					component: cepingxinxiAdd
				},
				{
					path: 'zaixianceping',
					component: zaixiancepingList
				},
				{
					path: 'zaixiancepingDetail',
					component: zaixiancepingDetail
				},
				{
					path: 'zaixiancepingAdd',
					component: zaixiancepingAdd
				},
				{
					path: 'dakaxinxi',
					component: dakaxinxiList
				},
				{
					path: 'dakaxinxiDetail',
					component: dakaxinxiDetail
				},
				{
					path: 'dakaxinxiAdd',
					component: dakaxinxiAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
