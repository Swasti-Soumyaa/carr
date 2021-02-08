

canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");





background_image="car-background-2"
car_1="car_1.jpg";
car_2="car_2.jpg";

car_1_width=100;
car_1_height=90;

car_2_width=100;
car_2_height=90;

car_1_x=10;
car_1_y=10;

car_2_x=10;
car_2_y=10;

function add(){

    background_imageTag= new Image();
    background_imageTag.onload=upload_background;
    background_imageTag.src=background_image;


    car_1_imageTag= new Image();
    rover_imageTag.onload=upload_rover;
    rover_imageTag.src=rover_image;


    rover_imageTag= new Image();
    rover_imageTag.onload=upload_rover;
    rover_imageTag.src=rover_image;

}

 function upload_background(){

    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
 }

 function upload_rover(){

    ctx.drawImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height);
 }



window.addEventListener("keydown",my_keydown);


function my_keydown(e){
console.log(e);
    

    keyPressed=e.keyCode;


    if (keyPressed=='38'){

        up();
        console.log("up");


    }

    if (keyPressed=='40'){

        down();
        console.log("down");
    }

    if (keyPressed=='37'){

        left();
        console.log("left");
    }

    if (keyPressed=='39'){

        right();
        console.log("right");
    }


    

        
    
}


function up(){

    if (rover_y>0){

        rover_y=rover_y-10;
        upload_background();
        upload_rover();
    }


}

function down(){
    if(rover_y<500){
        rover_y=rover_y+10;
        upload_background();
        upload_rover();
    }
}

function left(){

    if(rover_x>0){
        rover_x=rover_x-10;
        upload_background();
        upload_rover();

    }
}

function right(){

    if(rover_x<700){
       rover_x=rover_x+10;
       upload_background();
       upload_rover();
    }
}
