<template>
	<view>
		<!--轮播图-->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="200"
			style="width: 750rpx;height: 250rpx;">
			<swiper-item>
				<image src="../../static/demo/banner/1.jpg" style="width: 750rpx;height: 250rpx;"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/demo/banner/2.jpg" style="width: 750rpx;height: 250rpx;"></image>
			</swiper-item>
		</swiper>
		<!-- 列表 -->
		<view class="flex flex-wrap">
			<view class="list-item" v-for="i in 10" @click="openLive(i)">
				<image src="/static/demo/1.jpg" style="width: 365rpx;height: 365rpx;" class="rounded" mode="aspectFill"></image>
				<!--left Top-->
				<view class="rounded-circle px-2 flex align-center" style="position: absolute;left: 15rpx;top: 15rpx;background-color: rgba(0,0,0,0.4);">
					<text class="iconfont iconbizhongguanli text-warning mr-1"></text>
					<text class="text-white font">15</text>
				</view>
				<!-- right Top -->
				<view class="rounded-circle px-2 flex align-center" style="position: absolute;right: 15rpx; top: 15rpx; background-color: rgba(0,0,0,0.4);">
					<text class="font-sm text-white">人气：</text>
					<text class="text-white font-sm">999</text>
				</view>
				<!-- left buttom-->
				<view class="rounded-circle flex align-center" style="position: absolute;left: 15rpx;bottom: 15rpx;">
					<text class="text-white font">test</text>
				</view>
				<view class="rounded-circle px-2 flex align-center" style="position: absolute;right: 15rpx;bottom: 15rpx;background-color: rgba(0,0,0,0.4);">
					<text style="width: 20rpx;height: 20rpx;" class="rounded-circle mr-1"></text>
					<text class="text-white font-sm">1</text>
				</view>
			</view>
		</view>
		
		<view class="f-divider"></view>
		<view class="flex align-center justify-center py-3">
		    <text class="font-md text-secondary">{{loadText}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [], // 直播间列表
				page: 1,
				loadText: "上拉加载更多"
			}
		},
		filters: {
			formatStatus(value) {
				let o = {
					0: '未开始',
					1: '直播中',
					3: '已结束',
				}
				return o[value]
			}
		},
		// 页面加载
		onLoad() {
			// this.getData()
		},
		onPullDownRefresh() {
			this.page = 1,
			uni.showToast({
				title: '刷新成功,',
				icon: 'none',
			});
			uni.stopPullDownRefresh()
			// this.getData().then(res => {
				
			// })
		},
		methods: {
			openLive(i) {
				uni.navigateTo({
					url: '../live/live'
				})
			}
		}
	}
</script>

<style>
.list-item{
	width: 375rpx;height: 375rpx;padding: 5rpx;box-sizing: border-box;position: relative;
}
</style>
