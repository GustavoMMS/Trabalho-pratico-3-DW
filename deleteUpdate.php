<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "shablau_store";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou!" . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $id = $_POST['id'];
    
    $sql = "DELETE FROM produto WHERE id = '$id'";

    if($conn->query($sql) === true){
        echo "Produto deletado com sucesso!";
    }else{
        echo "Erro ao deletar";
    }
}else if($_SERVER["REQUEST_METHOD"] == "GET"){
    header('Content-Type: application/json');

    $id = $_GET["id"];
    $sql = "SELECT * FROM produto WHERE id = '$id'";

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
}

?>