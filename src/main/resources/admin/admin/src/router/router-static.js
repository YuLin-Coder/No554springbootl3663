import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import dakaxinxi from '@/views/modules/dakaxinxi/list'
    import aboutus from '@/views/modules/aboutus/list'
    import linianzhenti from '@/views/modules/linianzhenti/list'
    import kaoyandaojishi from '@/views/modules/kaoyandaojishi/list'
    import cepingxinxi from '@/views/modules/cepingxinxi/list'
    import zaixianceping from '@/views/modules/zaixianceping/list'
    import kaoyanzhengce from '@/views/modules/kaoyanzhengce/list'
    import forum from '@/views/modules/forum/list'
    import yuanxiaoxinxi from '@/views/modules/yuanxiaoxinxi/list'
    import kechengziliao from '@/views/modules/kechengziliao/list'
    import systemintro from '@/views/modules/systemintro/list'
    import beikaojingyan from '@/views/modules/beikaojingyan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '复试调剂',
        component: news
      }
      ,{
	path: '/dakaxinxi',
        name: '打卡信息',
        component: dakaxinxi
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/linianzhenti',
        name: '历年真题',
        component: linianzhenti
      }
      ,{
	path: '/kaoyandaojishi',
        name: '考研倒计时',
        component: kaoyandaojishi
      }
      ,{
	path: '/cepingxinxi',
        name: '测评信息',
        component: cepingxinxi
      }
      ,{
	path: '/zaixianceping',
        name: '在线测评',
        component: zaixianceping
      }
      ,{
	path: '/kaoyanzhengce',
        name: '考研政策',
        component: kaoyanzhengce
      }
      ,{
	path: '/forum',
        name: '交流论坛',
        component: forum
      }
      ,{
	path: '/yuanxiaoxinxi',
        name: '院校信息',
        component: yuanxiaoxinxi
      }
      ,{
	path: '/kechengziliao',
        name: '课程资料',
        component: kechengziliao
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/beikaojingyan',
        name: '备考经验',
        component: beikaojingyan
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
