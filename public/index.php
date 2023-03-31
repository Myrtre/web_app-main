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
    <link href="./src/css/forCar.css" rel="stylesheet">
    <!-- Included Script -->
    <script src="./src/js/classes/collider.js"></script>
    <script src="./src/js/classes/sprite.js"></script>
    <script src="./src/js/classes/player.js"></script>
    <script src="./src/js/classes/game.js"></script>
    <script src="./src/js/eventListeners.js"></script>
    <script src="./src/js/app.js"></script>

</head>
<body class="bg-secondary m-0 p-0" onload='onLoad()' onresize='onResize()'>
    <div class="container-fluid p-5">
        <div class="d-flex justify-content-center">
            <canvas id="game_stage"></canvas>
        </div>
    </div>
    <div class="container-fluid m-0 p-0 fixed-bottom sticky-bottom">
        <img class="car carDashboard" src="./src/assets/carDashboardRaw.png" alt="Az autó belső tere">
        <img id="wheel" class="car carWheel backTo" src="./src/assets/carDashboardWheel.png" alt="Az autó kormánya">
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>