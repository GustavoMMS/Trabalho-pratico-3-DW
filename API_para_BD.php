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
    $id = $_POST['id'];
    $titulo = $_POST['titulo'];
    $preco = $_POST['preco'];
    $categoria = $_POST['categoria'];
    $imagem = $_POST['imagem'];
    $rate = $_POST['rate'];
    $descricao = $_POST['descricao'];

    $sql = "SELECT * FROM produto WHERE titulo = '$titulo'";

    if($conn->query($sql) !== TRUE){
        $sql = "INSERT INTO produto (titulo, preco, descricao, categoria, imagem, rate) VALUES ('$titulo', '$preco', '$descricao', '$categoria', '$imagem', '$rate')";
        if($conn->query($sql) !== TRUE){
            echo"Produto inserido!";
        }
    }

    $conn->close();
}

?>