$.ajax({
    url: 'cadastro.php',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
        let dado = data.dados;
        let str = '';

        for (let i = 0; i < dado.length; i++) {
            let produto = dado[i];
            $("#corpoTabela").append(`<tr>
                                        <td scope="row" id="tabelaCol">${produto.id}</td>
                                        <td id="tabelaCol">${produto.titulo}</td>
                                        <td id="tabelaCol">${produto.categoria}</td>
                                        <td id="tabelaCol">${produto.preco}</td>
                                    </tr>`);
        }
    },
    error: function () {
        console.log("Erro ao carregar os dados!");
    }
});

$(document).ready(function () {
    $(document).on('click', 'tr', function () {
        $('tr').removeClass('selecao');

        $(this).addClass('selecao');
    });

    $('#btnUpdate').on('click', function () {
        let linhaSelecionada = $('tr.selecao');
        let id = linhaSelecionada.find('td:eq(0)').text();

        $.ajax({
            url: 'deleteUpdate.php',
            type: 'GET',
            data: {id: id},
            success: function(data){
                localStorage.removeItem(`update`);
                localStorage.setItem(`update`, 1);

                localStorage.removeItem('produto');
                localStorage.setItem('produto', JSON.stringify(data));
                
                window.location.href = "cadastro.html";
            },
            error: function(){
                alert("Erro ao excluir produto!");
            }
        });
    });

    $('#btnDelete').on('click', function () {
        let linhaSelecionada = $('tr.selecao');
        let id = linhaSelecionada.find('td:eq(0)').text();
        
        $.ajax({
            url: 'deleteUpdate.php',
            type: 'POST',
            data: {id: id},
            success: function(response){
                alert("Produto deletado!");
            },
            error: function(){
                alert("Erro ao excluir produto!");
            }
        });
    });

});