//carrega as categorias
fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(data => {
        let str = '';
        
        for(let i = 0; i < data.length; i++){
            let categorias = data[i];
            
            str += `<a href="pesquisa.html" id="cate" class="list-group-item" onclick="salvarCategoria(this)">${categorias}</a>`;
        }

        document.getElementById('categoria').innerHTML = str;
    })

//carrega 3 produtos
fetch('https://fakestoreapi.com/products?limit=3')
    .then(res => res.json())
    .then(data => {
        let str = '';
        
        for(let i = 0; i < data.length; i++){
            let produto = data[i];
            
            str += `<div class="col-md-4 my-4">
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

        document.getElementById('produto').innerHTML = str;
    })

//carrossel
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        let str = '';

        for(let i=0; i<3; i++){
            let posicao = Math.floor(Math.random() * 20) + 1;
            let produto = data[posicao];

            str += `<div class="carousel-item active">
                <a href="detalhes.html" class="text-decoration-none" onclick="salvarIdProduto(${produto.id})"><img src="${produto.image}" class="d-block w-100" id="imagemCarrossel"></a>
            </div>`;
        }

        document.getElementById('imagensCarrossel').innerHTML = str;
    })

function salvarCategoria(categoriaSelecionada){
    var categoria = categoriaSelecionada.innerHTML;
    localStorage.removeItem('categoria');
    localStorage.setItem('categoria', categoria);
    localStorage.removeItem('Ecategoria');
    localStorage.setItem('Ecategoria', 1);
}

function salvarIdProduto(id){
    localStorage.removeItem('idProduto');
    localStorage.setItem('idProduto', id);
}

function removeCategoria(){
    localStorage.removeItem('Ecategoria');
    localStorage.setItem('Ecategoria', 0);
}