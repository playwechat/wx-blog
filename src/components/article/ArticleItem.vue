<template>
	<el-card class="me-area" :body-style="{ padding: '16px' }">
		<div class="me-article-header">
			<!-- 点击标题通过文章id查看文章详情 -->
			<a @click="view(id)" class="me-article-title">{{title}}</a>
			<!-- 置顶 -->
			<el-button v-if="weight > 0" class="me-article-icon" type="text">置顶</el-button>
			<!-- 文章总数 -->
			<span class="me-pull-right me-article-count">
				<i class="me-icon-comment"></i>&nbsp;{{commentCounts}}
			</span>
			<!-- 阅读总数 -->
			<span class="me-pull-right me-article-count">
				<i class="el-icon-view"></i>&nbsp;{{viewCounts}}
			</span>
		</div>

		<!-- 文章简介 -->
		<div class="me-artile-description">
			{{summary}}
		</div>
		<div class="me-article-footer">
			<!-- 作者 -->
			<span class="me-article-author">
				<i class="me-icon-author"></i>&nbsp;<el-tag>{{author}}</el-tag>
			</span>
			<!-- 标签 -->
			<el-tag v-for="t in tags" :key="t.tagName" size="mini" type="success">{{t.tagName}}</el-tag>
			<!-- 创建时间 -->
			<span class="me-pull-right me-article-count">
				<i class="el-icon-time"></i>&nbsp;{{createDate | format}}
			</span>

		</div>
	</el-card>
</template>

<script>
	import {
		formatTime
	} from "../../utils/time";

	export default {
		name: 'ArticleItem',
		// 属性
		props: {
			id: String,
			weight: Number,
			title: String,
			commentCounts: Number,
			viewCounts: Number,
			summary: String,
			author: String,
			tags: Array,
			createDate: String
		},
		data() {
			return {}
		},
		methods: {
			view(id) {
				this.$router.push({
					path: `/view/${id}`
				})
			}
		}
	}
</script>

<style scoped>
	.me-article-header {
		/*padding: 10px 18px;*/
		padding-bottom: 10px;
	}

	.me-article-title {
		font-weight: 600;
	}

	.me-article-icon {
		padding: 3px 8px;
	}

	.me-article-count {
		color: #ff00ff;
		padding-left: 14px;
		font-size: 13px;
	}

	.me-pull-right {
		float: right;
	}

	.me-artile-description {
		font-size: 13px;
		line-height: 24px;
		margin-bottom: 10px;
	}

	.me-article-author {
		color: #aa00ff;
		padding-right: 18px;
		font-size: 13px;
	}

	.el-tag {
		margin-left: 6px;
		color: #ffffff;
		background-color: #ff00ff;
	}
</style>
