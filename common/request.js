import  $C from './config.js';
export default {
	// 全局配置
	common: {
		baseUrl: $C.baseUrl + '/api',
		header: {
			'content-Type': 'application/json;charset=UTF-8',
		},
		data: {},
		method: 'GET',
		dataType: 'json',
		token: false
	},
	// 请求
	request(options = {}) {
		options.url = this.common.baseUrl + options.url
		options.header = options.header || this.common.header
		options.data = options.data || this.common.data
		options.method = options.method || this.common.method
		options.dataType = options.dataType || this.common.dataType
		options.token = options.token === true ?  true : this.common.token
		return new Promise((res, rej) => {
			
		})
	},
};
