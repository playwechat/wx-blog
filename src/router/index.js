import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来


// 2. 定义路由
// 每个路由应该映射一个组件。
const routes = [{
	path: '/',
	component: r => require.ensure([], () => r(require('@/views/Index')), 'index')
}]

//3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
	routes
})

export default router
