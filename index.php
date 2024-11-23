<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cocina Consciente</title>
     <link rel="icon" href="img/logo.jpeg">
    <link rel="stylesheet" href="css/login.css">
</head>
<body>
    <main>
        <div class="contenedor__todo">
            <div class="caja__trasera"> 
                <div class="caja__trasera-login">
                    <h3>¿Ya tienes una cuenta?</h3>
                    <p>Inicia sesión para ver todas las recetas que quieras</p>
                    <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                </div>
                <div class="caja__trasera-register">
                    <h3>¿Aún no tienes una cuenta?</h3>
                    <p>Regístrate para que puedas iniciar sesión en nuestra cocina</p>
                    <button id="btn__registrarse">Regístrarse</button>
                </div>
            </div>

            <!--Formulario de Login y Registro-->
            <div class="contenedor__login-register">
                <!--Login-->
                <form id="formulario__login" action="php/inicio_sesion.php" method="post" class="formulario__login">
                    <h2>Iniciar Sesión</h2>
                    <input type="text" placeholder="Teléfono" name="telefono"required >
                    <input type="password" placeholder="Contraseña"name="password"required >
                    <button type="submit">Entrar</button>
                </form>

                <!--Register-->
                <form id = "formulario__register" action="php/registro_usuarioBE.php" method="post" class="formulario__register">
                    <h2>Regístrarse</h2>
                    <input type="text" placeholder="Nombre completo"  name="nombre" required>
                    <input type="email" placeholder="Correo Electrónico"  name="correo" required>
                    <input type="text" placeholder="Teléfono"  name="telefono" required>
                    <input type="password" placeholder="Contraseña" name="password" required>
                    <button type="submit">Regístrarse</button>
                </form>
            </div>
        </div>
    </main>
    <script src="js/inicio.js"></script>
</body>
</html>
