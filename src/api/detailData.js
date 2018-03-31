import myajax from '@/tool/myajax.js';
export default {
	bannerlist(cb) {
		var config = {
			url:"http://localhost:4000/api/banner?bannerType=0",
			options:{},
			success:(result)=> {
				cb(result)
			}
		}
		myajax.fetch(config);
	}
}
