//recebe a categoria
var categoria = localStorage.getItem('categoria');

//recebe tiraCategoria
var tiraCategoria = localStorage.getItem('Ecategoria');

//recebe busca
var buscaConteudo = localStorage.getItem('busca');
console.log(buscaConteudo);

if (tiraCategoria == 1) {
    var link_api = "https://fakestoreapi.com/products/category/" + categoria;

    fetch(link_api)
        .then(res => res.json())
        .then(data => {
            let str = '';

            for (let i = 0; i < data.length; i++) {
                let produto = data[i];

                str += `<div class="col-md-3 my-3">
            <div class="card" id="bordaProduto">
            <a href="detalhes.html" class="text-decoration-none tituloProd" onclick="salvarIdProduto(${produto.id})"><img src="${produto.image}" class="card-img-top imagem" alt="..."></a>
                <div class="card-body fundoProduto">
                    <h5 class="card-title"><a href="detalhes.html" class="text-decoration-none tituloProd" onclick="salvarIdProduto(${produto.id})">${produto.title}</a></h5>
                    <h6 class="card-title" id="preco">US$${produto.price}</h6>
                    <p class="card-text" id="conteudo">Category: ${produto.category}</p>
                    <p class="card-text" id="conteudo">Rate: ${produto.rating.rate}</p>
                </div>
            </div>
        </div>`;
            }

            document.getElementById('produtos').innerHTML = str;
        })
}

if(buscaConteudo != null && tiraCategoria == 0){

    buscaConteudo = buscaConteudo.toLowerCase();

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            let str = '';

            for (let i = 0; i < data.length; i++) {
                let produto = data[i];
                let titulo = produto.title;
                titulo = titulo.toLowerCase();

                if(titulo.includes(buscaConteudo)){
                    str += `<div class="col-md-3 my-3">
                        <div class="card" id="bordaProduto">
                        <a href="detalhes.html" class="text-decoration-none tituloProd" onclick="salvarIdProduto(${produto.id})"><img src="${produto.image}" class="card-img-top imagem" alt="..."></a>
                            <div class="card-body fundoProduto">
                                <h5 class="card-title"><a href="detalhes.html" class="text-decoration-none tituloProd" onclick="salvarIdProduto(${produto.id})">${produto.title}</a></h5>
                                <h6 class="card-title" id="preco">US$${produto.price}</h6>
                                <p class="card-text" id="conteudo">Category: ${produto.category}</p>
                                <p class="card-text" id="conteudo">Rate: ${produto.rating.rate}</p>
                            </div>
                        </div>
                    </div>`;
                }
            }

            document.getElementById('produtos').innerHTML = str;
        })
}

function removeCategoria(){
    localStorage.removeItem('Ecategoria');
    localStorage.setItem('Ecategoria', 0);
    localStorage.removeItem('busca');
}

function salvarIdProduto(id) {
    localStorage.removeItem('idProduto');
    localStorage.setItem('idProduto', id);
}

function buscar(){
    var conteudo = document.getElementById("textoBusca").value;
    localStorage.removeItem('busca');
    localStorage.setItem('busca', conteudo);
    localStorage.removeItem('Ecategoria');
    localStorage.setItem('Ecategoria', 0);
}