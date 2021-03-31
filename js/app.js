



/*const resultado=document.querySelector('#resultado')
document.addEventListener('DOMContentLoaded',()=>{
    obtenerRamdom()
})

function obtenerRamdom(){
   const url =`https://dog.ceo/api/breeds/image/random/20`
   
   fetch(url)
   .then(respuesta=>respuesta.json())
   .then(resultado=>{
       mostrarImagen(resultado)
   })
}


function mostrarImagen(imagenes){
    const{message,status}=imagenes
    

message.forEach(element => {
    const containerCard=document.createElement('div')
    containerCard.classList.add()
    const expReg=/(?:http|https):\/\/(?:[^\/\r\n]+)(\/[^\r\n]*)?/
    const resp=element.match(expReg)
    const name=resp[1].split('/')[2]
    const race=name.toUpperCase()
    containerCard.innerHTML+=`
    <div class="card " style="width: 18rem;">
  <img  src="${element}" class="card-img-top" alt="...">
  <button>${race}</button>
</div>
    
    `

    resultado.appendChild(containerCard)



});
}*/