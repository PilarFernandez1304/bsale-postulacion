const createInputSeach=()=>{
    const Search=`
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    `
  ;

const contSearch=document.createElement('form');
    contSearch.classList.add('container-fluid')
    contSearch.innerHTML=Search
    return contSearch
}


export {createInputSeach}


