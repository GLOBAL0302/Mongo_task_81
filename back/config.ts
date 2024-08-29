import { CorsOptions } from 'cors';


const whitelist = ["localhost:5173"];

const corsOptions: CorsOptions = {
  origin:(origin, callback)=>{
    if(!origin || whitelist.indexOf(origin) !== -1){
      callback(null, true)
    }
    else {
      callback(null, true)
    }
  }
}
const config={
  corsOptions,
}

export default config


