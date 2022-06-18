function preload(){}

function setup()
{
    canvas = createCanvas(600,400);
    canvas.position(150,300)
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video,0,0,600,400);
    tint(tint_color);   
}

function take_snapshot()
{
    save("pic.png");
}

function ApplyFilter()
{
    tint_color = document.getElementById("input").value;
}