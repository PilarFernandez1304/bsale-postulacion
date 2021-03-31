import {createInputSeach} from "./search.js";

const header =()=>{
    const head=`
    <div class="col-4 pt-1">
    <a class="link-secondary" href="#/">LOGO</a>
  </div>
  <div class="col-4 d-flex justify-content-end align-items-center">
    <a class="link-secondary d-flex" href="# con" id="search" aria-label="Search">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
    </a>
    <a class="btn btn-sm btn-outline-secondary" href="#/login">Administrador</a>
  </div>
    `;    
    const divHeader = document.createElement('div')
    divHeader.classList.add('row', 'flex-nowrap' ,'justify-content-between' ,'align-items-center')
    divHeader.innerHTML=head;

    const buscador = divHeader.querySelector('#search')
    buscador.addEventListener('click',()=>{
       buscador.appendChild(createInputSeach())
    })
    return divHeader;
    
}

export {header};