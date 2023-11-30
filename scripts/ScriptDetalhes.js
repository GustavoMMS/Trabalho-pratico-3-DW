//recebe o id de 1 produto
var idProduto = localStorage.getItem('idProduto');

var link_api = 'https://fakestoreapi.com/products/' + idProduto;
fetch(link_api)
    .then(res => res.json())
    .then(data => {
        let str = `<div class="col-md-11 offset-md-1 my-4 titulo"><h2>${data.title}</h2>
            <div class="row">
                <div class="col-md-5 col-sm-5 my-4">
                    <img src="${data.image}" class="imgProduto" alt="...">
                </div>
                
                <div class="col-md-5 col-sm-5 my-4 ">
                    <div class="card detalhesProduto">
                        <div class="card-header"><h5 class="card-title">Detalhes</h5></div>
                        <div class="card-body">
                            <h3 class="card-text">US$${data.price}</h3>
                            <p class="card-text">Category: ${data.category}</p>
                            <p class="card-text">Rate: ${data.rating.rate}</p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col-md-10 descricao">
                    <h3 class="tituloDescricao">Descrição</h3>
                    <p class="conteudoDescricao">${data.description}</p>
                </div>
            </div>

        </div>`;
        

        document.getElementById("produto").innerHTML = str;

    })

function removeCategoria(){
    localStorage.removeItem('Ecategoria');
    localStorage.setItem('Ecategoria', 0);
    localStorage.removeItem('busca');
}