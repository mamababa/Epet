import homeData from '@/api/homeData'

const kindbrand = (state=[], action) => {
  const { type, data} = action;
  switch (type){
  	case "GET_KINDBRAND":
  	   return [...state, data]
  		break;
  	  default:
  	   return state;
  		break;
  }
}



export default kindbrand;