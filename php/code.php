<?php
// функция подключения MySQL к коду
function Connect_dataBase()
{ //указываем наши данные в БД для доступа к серверу
  $serverName = "localhost"; // объявляем название сервера
  $db_user = "root"; //
  $db_pass = ""; //
  $db_name = "my_bd"; // название базы данных

  $dataBase = new mysqli($serverName, $db_user, $db_pass, $db_name); // создание соединения 
  return $dataBase;
}

// нажатие на кнопку Авторизоваться
if (isset($_GET['authorization'])) { //определяем, нажал ли пользователь на кнопку "авторизоваться" 
  $login = $_GET['login']; //передается значение, написанное в login
  $password = $_GET['password']; //передается значение, написанное в password
  if ($login != null && $password != null) { //если нам передали не пустое значение в log и pass, то
    $dataBase = Connect_dataBase(); // соединяемся с базой данных для проверки наличия введенных значений в ней
    $request = "SELECT login, password FROM users WHERE login = '$login' AND password = '$password'";// запрос на обработку наличия данных логина и пароля в бд
    $result = mysqli_fetch_assoc($dataBase->query($request));//выполняет запрос к БД на поиск и извлекает строку со значениями в виде
    //ассоциативного массива

    if($result != null){ //если мы нашли такого пользователя, то
      header("Location: site.php");// перемещаемся на сайт
    }
    else { // а если не нашли
      header("Location: authorization_error.php");// то указываем пользователю на ошибку
    }

    $dataBase->close();// и прерываем соединение с БД
  } else { //если передали пустое значение в log & pass
    header("Location: authorization_error.php");// просим пользователя ввести значения для проверки
  }
}

// нажатие на кнопку Зарегистрироваться
if (isset($_GET['registration'])) { //определяем, нажал ли пользователь на кнопку "зарегистрироваться"
  $login = $_GET['login'];//передается значение, написанное в login
  $password = $_GET['password'];//передается значение, написанное в password
  $repeatPassword = $_GET['repeat_password'];//передается значение, написанное в repeat password
  if ($login != null && $password != null && $repeatPassword != null) { //если все поля заполнены
    if ($password == $repeatPassword) { // если pass = repeat pass
      $dataBase = Connect_dataBase(); // соединяемся с БД для проверки наличия такого же логина

      // написать проверку на существование такого аккаунта с таким же логином с использованием SELECT
      // (как использовать SELECT смотрите в нажатии на кнопку Авторизоваться)

      $request = "INSERT INTO users (login, password) VALUES ('$login', '$password')";
      $dataBase->query($request);
      header('Location: index.php');
      $dataBase->close();
    }
    else{
      header("Location: registr.php");
    }
  } else {
    header("Location: registr.php");
  }

  
}
