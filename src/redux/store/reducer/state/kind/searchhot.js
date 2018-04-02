import homeData from '@/api/homeData'

const searchhot = (state=[], action) => {
  const { type, data} = action;
  switch (type){
  	case "GET_SEARCHHOT":
  	   return [...state, data]
  		break;
  	  default:
  	   return state;
  		break;
  }
}



export default searchhot;