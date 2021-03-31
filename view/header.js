

const header =()=>{
    const head=`
    <div class="col-4 pt-1">
    <a class="link-secondary" href="#/">LOGO</a>
  </div>
  <div class="col-4 d-flex justify-content-end align-items-center"  >
  <form class="d-flex" id="formulario">
  <input class="form-control me-1" id="search" type="search" placeholder="Search" aria-label="Search"/>
  <button class="btn btn-outline-success" id=btn-search type="submit">Search</button>
</form>
    <a class="btn btn-sm btn-outline-secondary" href="#/login">Administrador</a>
  </div>
    `;  
     
    const divHeader = document.createElement('div')
    divHeader.classList.add('row', 'flex-nowrap' ,'justify-content-between' ,'align-items-center')
    divHeader.innerHTML=head;

    const btnSearch=divHeader.querySelector('#btn-search')

    btnSearch.addEventListener('click',(e)=>{
      e.preventDefault()

      const buscador = divHeader.querySelector('#search').value;
      

      console.log(buscador)
    })

    

  
       
 return divHeader;
    
}

export {header};