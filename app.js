let canvas = document.getElementById("snake"),
    context = canvas.getContext("2d"),
    box = 32;

    function criarBG() {
        context.fillStyle = "lightgreen";
        context.fillRect(0,0,16 * box, 16 * box);
    }

    criarBG();