function inserirItem() {
  var titulo = $('#titulo').val();
  var preco = $('#preco').val();
  var categoria = $('#categoria').val();
  var imagem = $('#imagem').val();
  var rate = $('#avaliacao').val();
  var descricao = $('#textoDesc').val();

  $.ajax({
    url: 'cadastro.php',
    type: 'POST',
    data: { titulo: titulo, preco: preco, categoria: categoria, imagem: imagem, rate: rate, descricao, descricao },
    success: function (response) {
      $('#titulo').val(``);
      $('#preco').val(``);
      $('#categoria').val(``);
      $('#imagem').val(``);
      $('#avaliacao').val(``);
      $('#textoDesc').val(``);

      alert('Item inserido com sucesso!');
    },
    error: function () {
      alert('Erro ao inserir item!');
    }
  })
}