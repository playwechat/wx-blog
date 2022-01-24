<template>
	<div v-title data-title="维C昂-blog">
		<el-container>

			<el-main class="me-articles">
				<ArticleScrollPage></ArticleScrollPage>
			</el-main>

			<el-aside>

				侧边栏,右侧
			</el-aside>

		</el-container>
	</div>	
</template>

<script>
	import ArticleScrollPage from "@/components/common/ArticleScrollPage"
	
	export default {
		
		name: "Index",
		created() {

		},
		data() {
			
		},
		methods: {

		},
		components: {
			ArticleScrollPage
		}
	}
</script>

<style scoped>
	.el-container {
		width: 960px;
	}

	.el-aside {
		margin-left: 20px;
		width: 260px;
	}

	.el-main {
		padding: 0px;
		line-height: 16px;
	}

	.el-card {
		border-radius: 0;
	}

	.el-card:not(:first-child) {
		margin-top: 20px;
	}
</style>
