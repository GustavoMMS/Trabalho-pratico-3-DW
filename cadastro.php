<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "shablau_store";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou!" . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $titulo = $_POST['titulo'];
    $preco = $_POST['preco'];
    $categoria = $_POST['categoria'];
    $imagem = $_POST['imagem'];
    $rate = $_POST['rate'];
    $descricao = $_POST['descricao'];

    $sql = "INSERT INTO produto (titulo, preco, descricao, categoria, imagem, rate) VALUES ('$titulo', '$preco', '$descricao', '$categoria', '$imagem', '$rate')";

    if ($conn->query($sql) === TRUE) {
        echo "Dados inseridos com sucesso!";
    } else {
        echo "Erro ao inserir dados: " . $conn->error;
    }

    $conn->close();
} else if ($_SERVER["REQUEST_METHOD"] == "GET") {
    header('Content-Type: application/json');

    $sql = "SELECT * FROM produto";
    $resultado = $conn->query($sql);

    if ($resultado->num_rows > 0) {
        $dados = array();

        while ($row = $resultado->fetch_assoc()) {
            $dados[] = $row;
        }

        $resposta = array("dados" => $dados);
        echo json_encode($resposta);
    } else {
        $resposta = array("mensagem" => "Tabela vazia!");
        echo json_encode($resposta);
    }
    $conn->close();
}

?>