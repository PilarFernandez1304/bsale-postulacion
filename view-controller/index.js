    import logIn from '../view/login.js'
    import navBar from '../view/nav.js'
    import {header} from '../view/header.js'
    import {cardProduct} from '../view/card-product.js'

    const changeView = (hash) =>{
        if(hash==='#/' || hash === '' || hash === '#'){
            return viewToShow('#/home')
        }else if(hash === '#/home' || hash ==='#/login' || hash ==='#/lineaBlanca' || hash ==='#/ropa' || hash ==='#/juguetes' || hash ==='#/computo' ){
            return viewToShow(hash)
        }else{
            return viewToShow('#/home')
        }
    }

    const viewToShow =(routers)=>{
        let router = routers.substr(2,routers.length -2)
        let categoria = router
        const navegador = document.getElementById('navegador')
        const resultado = document.getElementById('resultado');
        const cabecera = document.getElementById('cabecera')
        resultado.innerHTML='';
        navegador.innerHTML='';
        cabecera.innerHTML='';
        switch (router) {
            case 'login':
                navegador.remove();
                cabecera.remove();
                resultado.appendChild(logIn());
            break;
            case'home':
                cabecera.appendChild(header());
                navegador.appendChild(navBar());
            break;
            case 'lineaBlanca':
                cabecera.appendChild(header());
                navegador.appendChild(navBar());
                resultado.appendChild(cardProduct(categoria));
                ;break;

            case 'ropa':
                cabecera.appendChild(header());
                navegador.appendChild(navBar());
                resultado.appendChild(cardProduct(categoria));
                break;
            case 'juguetes':
                cabecera.appendChild(header());
                navegador.appendChild(navBar());
                resultado.appendChild(cardProduct(categoria));
                break;
            case 'computo':
                cabecera.appendChild(header());
                navegador.appendChild(navBar());
                resultado.appendChild(cardProduct(categoria));
                break;
        
            default:
                break;
        }
        
    }

    export {changeView}