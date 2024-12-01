const controller = new Image();
controller.src = "./PlayStation_3_gamepad.svg.png";
controller.width = '600'
controller.height = '400'

var c = document.querySelector("div.controll")
var b1 = document.querySelector("div.b1");
var b2 = document.querySelector("div.b2");
var b3 = document.querySelector("div.b3");
var axis = document.querySelector("div.axis");
var axis2 = document.querySelector("div.axis2");


var b4 = document.querySelector("div.b4");
var start = document.querySelector("div.start");
var select = document.querySelector("div.select");
var psButton = document.querySelector("div.psButton");
var u = document.querySelector("div.u");
var d = document.querySelector("div.d");
var l = document.querySelector("div.l");
var r = document.querySelector("div.r");
console.log(start)
let position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let positiona2 = { x: window.innerWidth / 2, y: window.innerHeight / 2 };


let b1Pressed = false;
let b2Pressed = false;
let b3Pressed = false;
let b4Pressed = false;
let startPressed = false;
let selectPressed = false;
let psButtonPressed = false;
let buPressed = false;//12
let bdPressed = false;//13
let blPressed = false;//14
let brPressed = false;//15


window.addEventListener("gamepadconnected", (e) => {
    console.log("gamePad conectado");
    console.log(e.gamepad.index);
    console.log(e.gamepad.id);
    c.appendChild(controller);
    b1.style.display = "block";
    b2.style.display = "block";
    b3.style.display = "block";
    b4.style.display = "block";
    start.style.display = "block";
    select.style.display = "block";
    psButton.style.display = "block";
    axis.style.display = "block";
    axis2.style.display = "block";
    u.style.display = "block";
    d.style.display = "block";
    l.style.display = "block";
    r.style.display = "block";
    document.querySelector("div.connect").style.display = "none"

});

window.addEventListener("gamepaddisconnected", (e) => {
    console.log("desconectado");
    console.log(e.gamepad.index);
});

function buttons() {
    const gamepads = navigator.getGamepads();
    for (let i = 0; i < gamepads.length; i++) {
        const gamepad = gamepads[i];
        if (gamepad) {
            let x = gamepad.axes[0];
            let y = gamepad.axes[1]; 
            let xa2 = gamepad.axes[2];
            let ya2 = gamepad.axes[3];
  
            
            position.x += x * 5;
            position.y += y * 5;
            positiona2.x += xa2 * 5;
            positiona2.y += ya2 * 5;
  
           
            position.x = Math.max(0, Math.min(window.innerWidth - 50, position.x));
            position.y = Math.max(0, Math.min(window.innerHeight - 50, position.y));
            positiona2.x = Math.max(0, Math.min(window.innerWidth - 50, positiona2.x));
            positiona2.y = Math.max(0, Math.min(window.innerHeight - 50, positiona2.y));
  
            
            const currentMarginLeft = parseFloat(axis.style.marginLeft) || 0;
            const newMarginLeft = currentMarginLeft + x * 4;
            const currentMarginLefta2 = parseFloat(axis2.style.marginLeft) || 0;
            const newMarginLefta2 = currentMarginLefta2 + xa2* 4;
  
            const minMarginLeft = -335; 
            const maxMarginLeft = -235; 
            
            const minMarginLefta2 = -170; 
            const maxMarginLefta2 = -50;   
  
            if (newMarginLeft < minMarginLeft) {
              axis.style.marginLeft = `${minMarginLeft}px`;
            } else if (newMarginLeft > maxMarginLeft) {
              axis.style.marginLeft = `${maxMarginLeft}px`;
            } else {
              axis.style.marginLeft = `${newMarginLeft}px`;
            }


            
            if (newMarginLefta2 < minMarginLefta2) {
                axis2.style.marginLeft = `${minMarginLefta2}px`;
              } else if (newMarginLefta2 > maxMarginLefta2) {
                axis2.style.marginLeft = `${maxMarginLefta2}px`;
              } else {
                axis2.style.marginLeft = `${newMarginLefta2}px`;
              }
    
  
           
            const currentMarginTop = parseFloat(axis.style.marginTop) || 0;
            const newMarginTop = currentMarginTop + y * 4;
  
            const minMarginTop = 75; 
            const maxMarginTop = 175;  

            const currentMarginTopa2 = parseFloat(axis2.style.marginTop) || 0;
            const newMarginTopa2 = currentMarginTopa2 + ya2 * 4;
  
            const minMarginTopa2 = 75; 
            const maxMarginTopa2 = 175;  

            if (newMarginTop < minMarginTop) {
              axis.style.marginTop = `${minMarginTop}px`;
            } else if (newMarginTop > maxMarginTop) {
              axis.style.marginTop = `${maxMarginTop}px`;
            } else {
              axis.style.marginTop = `${newMarginTop}px`;
            }


            
            if (newMarginTopa2 < minMarginTopa2) {
                axis2.style.marginTop = `${minMarginTopa2}px`;
              } else if (newMarginTopa2 > maxMarginTopa2) {
                axis2.style.marginTop = `${maxMarginTopa2}px`;
              } else {
                axis2.style.marginTop = `${newMarginTopa2}px`;
              }
  
            gamepad.buttons.forEach((button, index) => {
              
                if (button.pressed) {
                    console.log(index);
                    
                    if (index === 1 && !b1Pressed) { 
                        b1.style.backgroundColor = "white";
                        b1Pressed = true; 
                    }
                    if(index===0 && !b2Pressed){
                        b2.style.backgroundColor = "white";
                        b2Pressed = true; 
                    }

                    if (index === 2 && !b3Pressed) { 
                        b3.style.backgroundColor = "white";
                        b3Pressed = true; 
                    }
                    if (index === 3 && !b4Pressed) { 
                        b4.style.backgroundColor = "white";
                        b4Pressed = true; 
                    }
                    if (index === 9 && !startPressed) { 
                        start.style.borderLeft = " 40px solid white";
                        startPressed = true;
                    }
                      
                    if (index === 8 && !selectPressed) { 
                        select.style.backgroundColor = "white";
                        selectPressed = true; 
                    }
                    if (index === 16 && !psButtonPressed) { 
                        psButton.style.backgroundColor = "white";
                        psButtonPressed = true; 
                    }
                       
                    if (index === 12 && !buPressed) { 
                        u.style.backgroundColor = "white";
                        buPressed = true; 
                    }
                    if (index === 13 && !bdPressed) { 
                        d.style.backgroundColor = "white";
                        bdPressed = true; 
                    }
                    if (index === 15 && !blPressed) { 
                        l.style.backgroundColor = "white";
                        blPressed = true; 
                    }
                         
                    if (index === 14 && !brPressed) { 
                        r.style.backgroundColor = "white";
                        brPressed = true; 
                    }
               }
                else {
                    if (index === 1 && b1Pressed) { 
                        b1.style.backgroundColor = "black";
                        b1Pressed = false; 
                    }
                    if (index === 0 && b2Pressed) { 
                        b2.style.backgroundColor = "black";
                        b2Pressed = false; 
                    }
                    if (index === 2 && b3Pressed) { 
                        b3.style.backgroundColor = "black";
                        b3Pressed = false; 
                    }
                    if (index === 3 && b4Pressed) { 
                        b4.style.backgroundColor = "black";
                        b4Pressed = false; 
                    }

                    if (index === 9 && startPressed) { 
                        start.style.borderLeft = " 40px solid black";
                        startPressed = false;
                    }
                    if (index === 8 && selectPressed) { 
                        select.style.backgroundColor = "black";
                        selectPressed = false; 
                    }
                    if (index === 16 && psButtonPressed) { 
                        psButton.style.backgroundColor = "black";
                        psButtonPressed = false; 
                    }

                    if (index === 12 && buPressed) { 
                        u.style.backgroundColor = "black";
                        buPressed = false; 
                    }
                    if (index === 13 && bdPressed) { 
                        d.style.backgroundColor = "black";
                        bdPressed = false; 
                    }
                    if (index === 15 && blPressed) { 
                        l.style.backgroundColor = "black";
                        blPressed = false; 
                    }
                    if (index === 14 && brPressed) { 
                        r.style.backgroundColor = "black";
                        brPressed = false; 
                    }
                }
            });
        }
    }
    requestAnimationFrame(buttons);
}

buttons();
