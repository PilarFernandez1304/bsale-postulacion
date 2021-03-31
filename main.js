import {initRouter} from './router.js'
// Initialize 
const firebaseConfig = {
   apiKey: "AIzaSyBnfW4qtFIkum5kjF_VNYZizezcg3_kxc4",
   authDomain: "reto-blazar.firebaseapp.com",
   databaseURL: "https://reto-blazar.firebaseio.com",
   projectId: "reto-blazar",
   storageBucket: "reto-blazar.appspot.com",
   messagingSenderId: "1059305631452",
   appId: "1:1059305631452:web:6f5798f4ebc03a6e3cce19"
   };
   
window.addEventListener('load',()=>{
  firebase.initializeApp(firebaseConfig)
  initRouter()
})
