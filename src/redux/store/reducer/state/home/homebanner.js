import homeData from '@/api/homeData'


const homebanner = (state=[], action) => {
  const { type, data} = action;
  switch (type){
  	case "GET_HOMEBANNER":
  	   return [...state, data]
  		break;
  	  default:
  	   return state;
  		break;
  }
}



export default homebanner;