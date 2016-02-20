function draw_start_shapes()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext('2d');
    
    draw_clock_background( ctx , canvas );
    //not needed any more
    //draw_clock_positions_12_3_6_9( canvas , ctx );
    draw_other_positions( canvas, ctx );   
   
    
   
    
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


function draw_clock_positions_12_3_6_9( canvas , ctx )
{
    var radius = (canvas.height / 2) - 50;  
    var width = canvas.width;
    var height = canvas.height;
    
    var centerX = width / 2;
    var centerY = height / 2;
    
    var rect_width = 50;
    var rect_height = 50;
    
    var height_clock = (( height / 2 ) - 50) * 2;
    
    //create box and place at 12 position
    ctx.beginPath();
    ctx.rect( (width / 2) - rect_width / 2 , 25 , rect_width , rect_height );
    
    ctx.stroke();
    ctx.fillStyle = "#ff00ff";
    ctx.fill();
    
    
    ctx.beginPath();
    ctx.rect( (width / 2) - rect_width / 2 , 25 + height_clock , rect_width , rect_height );
    ctx.stroke();
    ctx.fillStyle = "#ff00ff";
    ctx.fill();
    
    var pos_9_x = centerX - radius;
    var pos_9_y = centerY - (rect_height / 2)
    ctx.beginPath();
    ctx.rect( pos_9_x - ( rect_width / 2) , pos_9_y , rect_width , rect_height );
    ctx.stroke();
    ctx.fillStyle = "#ff00ff";
    ctx.fill();
    
    var pos_3_x = centerX + radius;
    var pos_3_y = centerY - (rect_height / 2)
    ctx.beginPath();
    ctx.rect( pos_3_x - ( rect_width / 2) , pos_3_y , rect_width , rect_height );
    ctx.stroke();
    ctx.fillStyle = "#ff00ff";
    ctx.fill();
    
}


function draw_other_positions( canvas, ctx )
{
    var pos_num = 12;
    
    while( pos_num > 0)
    {
           var angle = (360 / 12) * pos_num;
           var radius = ((canvas.height / 2) - 50) - 60;  
           var width = canvas.width;
           var height = canvas.height;

           var centerX = width / 2;
           var centerY = height / 2;

           var rect_width = 50;
           var rect_height = 50;

           var height_clock = (( height / 2 ) - 50) * 2;

           var distance = 1;

           var x = centerX + radius * Math.cos(-angle*Math.PI/180);
           var y = centerY + radius * Math.sin(-angle*Math.PI/180);

           ctx.beginPath();
           ctx.rect( x - (rect_width / 2) , y - (rect_height / 2) , rect_width , rect_height );
           ctx.stroke();
           ctx.fillStyle = "#ff00ff";
           ctx.fill();
           pos_num--;
    
    }
   
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

