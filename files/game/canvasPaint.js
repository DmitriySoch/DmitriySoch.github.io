let isDrawing = false;
let canvas = document.getElementById("myCanvas"),
    context = canvas.getContext("2d");
let sizes = {width:canvas.clientWidth,height:canvas.clientHeight};
canvas.width = sizes.width;
canvas.height = sizes.height;

function mouseDown(e) {
    isDrawing = true;
    context.beginPath();
    context.moveTo(e.offsetX, e.offsetY);
    //Отправить точку начала
}

function moveMouse(e) {
    if(isDrawing===true){
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        //отправлять точки, можно заносить их в json например и потом после окончания рисования отправить всем весь пакет изменений
    }
}

function mouseOut(e) {
    isDrawing = false;
}



