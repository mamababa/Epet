import homeData from '@/api/homeData'


const homeleague = (state=[], action) => {
  const { type, data} = action;
  switch (type){
  	case "GET_HOMELEAGUE":
  	   return [...state, data]
  		break;
  	  default:
  	   return state;
  		break;
  }
}



export default homeleague;