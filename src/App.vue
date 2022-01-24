<template>
	<div id="app">
		<!-- 使用 router-link 组件来导航. -->
		<!-- 通过传入 `to` 属性指定链接. -->
		<!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
		<!-- 路由出口 -->
		<!-- 路由匹配到的组件将渲染在这里 -->
		<!-- 回到顶部的组件 -->
		<router-view>
			
		</router-view>
		<go-top></go-top>
	</div>
</template>

<script>
	// 引入GoTop组件
	import GoTop from '@/components/gotop/GoTop'

	export default {
		name: 'app',
		components: {
			// 可以使用GoTop代替go-top
			"go-top": GoTop
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	* { margin: 0; padding: 0; }
	
	body {
		background-color: #f5f5f5;
		font-weight: 400;
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
		line-height: 1.5;
	}
	a {
	    cursor: pointer;
	    text-decoration: none;
		/* 动画效果，css的属性值在一定的时间内从一个状态平滑的过渡到另一个状态 ease-out　先快，后慢 */
	    transition: none 86ms ease-out;
	}
	a:hover {
		color: #00aaff;
	}
	
	html{height:100%;}
	body{min-height:100%;}
	/*生成相对定位的元素，相对于其正常位置进行定位*/
	body{position:relative;}
	
</style>
