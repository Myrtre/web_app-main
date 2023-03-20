<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Az oldal az ELTE-SEK IK karának a Web2 órájára készült.">
    <title>Alapból teszt ez most</title>
   <!-- Bootstrap CDN-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- Saját CSS -->

    <!-- Included Script -->
    <script src="./src/material.js" type="text/javascript"></script>
    <script src="./src/shaders.js" type="text/javascript"></script>
    <script src="./src/maths.js" type="text/javascript"></script>
    <script src="./app/app.js" type="text/javascript"></script>
    <script src="./app/game.js" type="text/javascript"></script>

</head>
<body onload='onLoadStage()' onresize='onResize()'>
    <div class="container-fluid p-5">
        <div class="d-flex justify-content-center">
            <canvas id="game_stage"></canvas>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>