<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Авторизация</title>
</head>
<body>
  <section>
    <h1>Регистрация</h1>
    <form action="code.php" method="get">
      <input type="text" name="login" placeholder="Login">
      <input type="password" name="password" placeholder="Password">
      <input type="password" name="repeat_password" placeholder="Repeat password">
      <a href="index.php">Авторизоваться</a>
      <input id="btn" type="submit" name="registration" value="Зарегистрироваться">
    </form>
  </section>
</body>
</html>