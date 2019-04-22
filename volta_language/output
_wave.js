function init()
{
    setInterval(OnDraw, 50);
}

var time = 0;
var color_v_out = "#ff0000";
var color_v_in = "#88ff4e";
var color_expected = "#cbcbd5";

function OnDraw()
{
    time = time + 0.2;
    var canvas = document.getElementById("mycanvas");
    var dataLine = canvas.getContext("2d");

    dataLine.clearRect(0, 0, canvas.width, canvas.height);

    dataLine.beginPath();
    for(cnt = -1; cnt <= canvas.width; cnt++)
    {
        dataLine.lineTo(cnt, sineWave(time, cnt));
    }

    dataLine.lineWidth = 1;
    dataLine.strokeStyle = color_v_in;
    dataLine.stroke();

    //vOut

    dataLine.moveTo(0, canvas.height * 0.5);
    dataLine.beginPath();

    for(cnt = -1; cnt <= canvas.width; cnt++)
    {
        dataLine.lineTo(cnt, sineWave(time+2, cnt));
    }

    dataLine.lineWidth = 1;
    dataLine.strokeStyle = color_v_out;
    dataLine.stroke();

    //expected

    dataLine.moveTo(0, canvas.height * 0.5);
    dataLine.beginPath();

    for(cnt = -1; cnt <= canvas.width; cnt++)
    {
        dataLine.lineTo(cnt,canvas.height * 0.5 - (Math.random() * 2 + Math.cos(time + cnt * 0.05) * 20 ) * Math.cos(time+2 + cnt * 0.05) );
    }

    dataLine.lineWidth = 1;
    dataLine.strokeStyle = color_expected;
    dataLine.stroke();
}


function sineWave(time, cnt) {

    let canvas = document.getElementById("mycanvas");

    return canvas.height * 0.5 - (Math.random() * 2 + Math.cos(time + cnt * 0.05) * 20 );
}

function touchscreenInput(time, cnt) {

    let canvas = document.getElementById("mycanvas");

    if ((time + cnt*0.05) % 50 > 25)
        return canvas.height * 0.5 - (Math.random() * 2 + Math.cos(time + cnt * 0.05) * 20 )*2;
    else {
        return canvas.height * 0.5 - (Math.random() * 2 +  Math.cos(time + cnt * 0.05) * 20 )/2 - canvas.height*0.2;
    }
}


init();