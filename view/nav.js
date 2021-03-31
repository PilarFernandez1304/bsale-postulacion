const navBar=()=>{
    const nav=`
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
    <ul class="navbar-nav col-12 text-center">
      <li class="nav-item col-3">
        <a class="nav-link" aria-current="page" href="#/lineaBlanca">Linea Blanca</a>
      </li>
      <li class="nav-item col-3 ">
        <a class="nav-link " href="#/ropa">Ropa</a>
      </li>
      <li class="nav-item col-3">
        <a class="nav-link" href="#/juguetes" tabindex="-1" aria-disabled="true">Juguetes</a>
      </li>
      <li class="nav-item col-3">
        <a class="nav-link" href="#/computo" id="dropdown08">Computo</a>
      </li>
    </ul>
  </div>
    `;
    const divNav=document.createElement('div')
    divNav.classList.add('container-fluid')
    divNav.innerHTML=nav;
    return divNav
}
export default navBar