<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title> Authorization failed</title>
</head>
<body>
  <section>
    <h1>Авторизация</h1>
    <form action="code.php" method="get">
      <input type="text" name="login" placeholder="Login">
      <input type="password" name="password" placeholder="Password">
      <a href="registr.php">Зарегистрироваться</a>
      <div class="error"><p>Такой пользователь не найден! Попробуйте снова.</p></div>
      <input id="btn" type="submit" name="authorization" value="Авторизоваться">
    </form>
  </section>
</body>
</html>