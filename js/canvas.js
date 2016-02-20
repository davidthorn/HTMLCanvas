function draw_start_shapes()
{
    var canvas = document.getElementById("myCanvas");
    draw_clock_background( ctx , canvas );
       
       
       
    var width = canvas.width;
    var height = canvas.height;
    ctx.beginPath()
    
    ctx.moveTo(  width / 2 , height / 2 );
    
   
    
}

function draw_clock_background( ctx , canvas )
{
     ctx.beginPath();
    
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = (canvas.height / 2) - 50;
    x -= (radius / 2) ;
    y -= (radius / 2);
    
    
    ctx.arc(canvas.width / 2,canvas.height/2,radius,0,2*Math.PI);
    ctx.strokeStyle = "#ff77ff";
    ctx.stroke();
    ctx.fillStyle = "#ddffdd";
    ctx.fill();
}

function set_default_sizes()
{
    var title_height = $('mainTitle').height()
    var body_height = $(document).innerHeight();
    var body_width = $(document).innerWidth();
    $('#myCanvas').attr('height' , body_height + "px");
     $('#myCanvas').attr('width' , body_width + "px");
    //$('#myCanvas').height(body_height - title_height);
    //console.log(body_height + " " + body_width);
}

window.onresize = function()
{
    set_default_sizes();
}

$('document').ready( function(){
    
   set_default_sizes();
   
   draw_start_shapes();
   
})

