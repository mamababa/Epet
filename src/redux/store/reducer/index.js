import { combineReducers } from 'redux';
import homebanner from './state/home/homebanner.js';
import todolist from './state/todolist.js';
import homenav from './state/home/homenav.js'
import homesale from './state/home/homesale.js'
import homeleague from './state/home/homeleague.js'
import kindsidebar from './state/kind/kindsidebar.js'
import kindbrand from './state/kind/kindbrand.js'
import searchhot from './state/kind/searchhot.js'
const reducer = combineReducers({
	homebanner,
	todolist,
	homenav,
	homesale,
	homeleague,
	kindsidebar,
	kindbrand,
	searchhot
})
export default reducer;