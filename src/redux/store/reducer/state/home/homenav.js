import homeData from '@/api/homeData'


const homenav = (state=[], action) => {
  const { type, data} = action;
  switch (type){
  	case "GET_HOMENAV":
  	   return [...state, data]
  		break;
  	  default:
  	   return state;
  		break;
  }
}



export default homenav;