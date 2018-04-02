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
	},
	kindbrandlist(cb) {
		var config = {
			url:"http://10.8.162.24:3000/echongkindbrand",
			options:{},
			success:(result)=> {
				cb(result)
			}
		}
		myajax.fetch(config);
	},
	searchhotlist(cb) {
		var config = {
			url:"http://10.8.162.24:3000/echongseachkind",
			options:{},
			success:(result)=> {
				cb(result)
			}
		}
		myajax.fetch(config);
	},
	searchtotal(cb,keyword) {
		var config = {
			url:"https://mallcdn.api.epet.com/v3/goods/list/main.html?version=358&brandid=0&page=1&orderby=def_desc&cateid=0&pet_type=dog&extend_pam=keyword%3A"+keyword+"&real_wid=&region=&system=wap&isWeb=1",
//			options:{
//				'mode':'no-cors',
//				headers:{'content-type':'application/json'},
//				method:'GET',
//				credentials:'include'
//			},
			success:(result)=> {
				cb(result)
			}
		}
		myajax.fetchJsonp(config);
	}

}
