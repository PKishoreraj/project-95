var canvas=new fabric.canvas('mycanvas');

ball_y=0
ball_x=0
hole_x=400
hole_y=800

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.image.fromURL("golf-h1.png",function(img){
		hole_obi=img;
		hole_obi.scaletowidth(50);
		hole_obi.scaletoheight(50);
		hole_obi.set({top:hole_y,left:hole_x});
		canvas.add(hole_obi);
	});
	new_image();
}

function new_image()
{
	fabric.image.fromURL("ball.png",function(img){
		ball_obi=img;
		ball_obi.scaletowidth(50);
		ball_obi.scaletoheight(50);
		ball_obi.set({top:ball_y,left:ball_x});
		canvas.add(ball_obi);
	});
	new_image();
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y))
	{
		canvas.remove(ball_obi);
		document.getElementById("hd3").innerHTML="You have hit the goal!!!!!";
		document.getElementById("mycanvas").style.bordercolor="red";
	}

	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>=0)
    {
		ball_y=ball_y - block_image_height;
    console.log("block image height="+block_image_height);
    console.log("when up arrow key is preased,X="+ball_x +",y="+ball_y);
    canvas.remove(ball_object);
    new_image();
    }
	}

	function down(){
		if(ball_y<=600)
		{
			ball_y=ball_y+block_image_height;
			console.log("block_image_height="+block_image_height);
			console.log("when up arrow key is preased, X"+ball_x+",Y="+ball_y);
			canvas.remove(ball_object);
			new_image();
		}
	}
	function left()
	{
	if(ball_x>0)
	{
		ball_x=ball_x+block_image_width;
		console.log("block image width="+block_image_width);
		console.log("when Left arrow is pressed, X"+ball_x+",Y="+ball_y);
		canvas.remove(ball_object);
		new_image();
	}
	}
	
	function right()
	{
		if(ball_x<=1000)
		{
			ball_x=ball_x+block_image_width;
			console.log("block iage width="+block_image_width);
			console.log("when left arrow key is pressed,x"+ball_x+",y="+ball_y);
			canvas.remove(ball_object);
			new_image();
		}
	}