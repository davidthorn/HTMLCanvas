function draw_start_shapes()
{
    
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext('2d');
    ctx.moveTo(0,0);
    ctx.lineTo(200,100);
    ctx.stroke();
    ctx.moveTo()
    console.log(ctx);
}


function set_default_sizes()
{
    var title_height = $('mainTitle').height()
    var body_height = $('body').height();
    var body_width = $('body').width();
    
    $('#myCanvas').height(body_height - title_height);
    console.log(body_height + " " + body_width);
}

window.onresize = function()
{
    set_default_sizes();
}

$('document').ready( function(){
    
   set_default_sizes();
   
   draw_start_shapes();
   
})

