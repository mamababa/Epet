import myajax from '@/tool/myajax.js';
export default {
	homebannerlist(cb) {
		var config = {
			url:"http://10.8.162.24:3000/echonghomebanner",
			options:{},
			success:(result)=> {
				cb(result)
			}
		}
		myajax.fetch(config);
	},
	homenavlist(cb) {
		var config = {
			url:"http://10.8.162.24:3000/echonghome",
			options:{},
			success:(result)=> {
				cb(result)
			}
		}
		myajax.fetch(config);
	},
	homesalelist(cb) {
		var config = {
			url:"http://10.8.162.24:3000/echonghomesellings",
			options:{},
			success:(result)=> {
				cb(result)
			}
		}
		myajax.fetch(config);
	},
	homeleaguelist(cb) {
		var config = {
			url:"http://10.8.162.24:3000/echonghomeleague",
			options:{},
			success:(result)=> {
				cb(result)
			}
		}
		myajax.fetch(config);
	},
	kindsidebarlist(cb) {
		var config = {
			url:"http://10.8.162.24:3000/echongkind",
			options:{},
			success:(result)=> {
				cb(result)
			}
		}
		myajax.fetch(config);
	}

}
