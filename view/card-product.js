const cardProduct=(categoria)=>{
    const divCardProduct=document.createElement('div')
    divCardProduct.classList.add('card')
    divCardProduct.style.width='18rem'
    const viewProduct=`
  <img src="../icon/singIng.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${categoria}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
    `;
    divCardProduct.innerHTML=viewProduct
    return divCardProduct
}

export {cardProduct}