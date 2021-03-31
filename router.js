import {changeView} from './view-controller/index.js'
export const initRouter=()=>{
      changeView(window.location.hash)

     window.addEventListener('hashchange',()=>{
           changeView(window.location.hash)
     })
    
}
