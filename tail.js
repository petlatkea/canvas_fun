"use strict";
window.addEventListener("DOMContentLoaded", init );

let ctx;
const width = 500;
const height = 500;

function init() {
    ctx = document.querySelector("#canvas").getContext("2d");

    registerMouseMovement();

    prepareCanvas();
}

function registerMouseMovement() {
    document.querySelector("#canvas").addEventListener("mousemove", mouseMoved);
}

function prepareCanvas() {
    ctx.canvas.height = height;
    ctx.canvas.width = width;

    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,width,height)
}

function mouseMoved( event ) {
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;

    console.log("mouse moved");

    drawRectangle(mouseX, mouseY);
}

function drawRectangle(x,y) {
    const rect = Object.create(Rectangle);
    rect.create(x,y);
    rect.draw();
}

const Rectangle = {
   x: 10,
   y: 10,
   w: 10,
   h: 10,
   
   create( x,y, w=10,h=10) {
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
   },

   draw() {
    ctx.strokeStyle = "rgba(0,255,0,.5)";
    ctx.strokeRect(this.x,this.y,this.w,this.h);
   }
}
