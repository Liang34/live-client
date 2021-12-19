<template>
	<view>
		<!--未登录展示-->
		<view v-if="!user" class="flex align-center">
			<view class="flex align-center justify-center" style="width: 180rpx; height: 180rpx;">
				<image src="/static/gift/4.png" class="rounded-circle" style="width: 105rpx;height: 105rpx;"></image>
			</view>
			<view class="flex flex-column" @click="openLogin">
				<text class="font-md">未登录</text>
				<text class="font text-muted">登陆体验更多功能</text>
			</view>
			<view class="ml-auto mr-3">
				<view class="border border-main rounded flex align-center justify-center p-2" hover-class="bg-light"
					@click="openLogin">
					<text class="text-main font">未登录</text>
				</view>
			</view>
		</view>

		<!--登录-->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: ''
			}
		},
		methods: {
			openLogin() {
				uni.navigateTo({
					url: '../login/login'
				});
			}
		}
	}
</script>

<style>

</style>
