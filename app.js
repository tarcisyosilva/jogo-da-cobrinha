let canvas = document.getElementById("snake"),
    context = canvas.getContext("2d"),
    box = 32,
    snake = [];

    snake[0] = {
        x: 8 * box,
        y: 8 * box
    }

    function criarBG() {
        context.fillStyle = "lightgreen";
        context.fillRect(0, 0, 16 * box, 16 * box);
    }

    function criarCobrinha(){
        for(i=0; i < snake.length; i++){
            context.fillStyle = "green";
            context.fillRect(snake[i].x, snake[i].y, box, box);
        }
    }


    criarBG();
    criarCobrinha();

