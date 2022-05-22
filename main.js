canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

mars_images = ["mars.jpg"];

randomnumber = Math.floor(Math.random() * 4);
rover_height = 150;
rover_width= 100;
rover_x = 10;
rover_y=10;

background = mars_images[randomnumber];

rover_image = "rover.png";

function add() {
backgroundImage = new Image();
backgroundImage.onload = uploadBackground;
backgroundImage.src = background;

roverImage = new Image();
roverImage.onload = uploadRover;
roverImage.src = rover_image;
}

function uploadBackground() {
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
ctx.drawImage(rover_image, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

 function my_keydown(e) {

keyPressed = e.keyCode;
console.log(keyPressed);

if(keyPressed == "38") {
up();
console.log()
}
if(keyPressed == "40") {
    down();
    }
    if(keyPressed == "37") {
        left();
        }
        if(keyPressed == "39") {
            right();
            }

}

function up() {
if(rover_y > 0) {
rover_y = rover_y - 10;
console.log("rover_x =" + rover_x + " rover_y =" + rover_y);
uploadBackground();
uploadRover();
}

}
function down() {
    if(rover_y < 500) {
    rover_y = rover_y + 10;
    console.log("rover_x =" + rover_x + " rover_y =" + rover_y);
    uploadBackground();
    uploadRover();
    }
    
    }
    function left() {
        if(rover_x > 0) {
        rover_x = rover_x - 10;
        console.log("rover_x =" + rover_x + " rover_y =" + rover_y);
        uploadBackground();
        uploadRover();
        }
        
        }
        function right() {
            if(rover_x < 700) {
            rover_x = rover_x + 10;
            console.log("rover_x =" + rover_x + " rover_y =" + rover_y);
            uploadBackground();
            uploadRover();
            }
            
            }
