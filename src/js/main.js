import "../js/vendor/modernizr-3.11.2.min.js";
import "../js/plugins";
import photo from "./modules/obtainPhotos.js";
import "bootstrap/dist/js/bootstrap.bundle";
import "photoswipe/dist/photoswipe";
import "photoswipe/dist/photoswipe-ui-default";

import * as urlImage from "../img/front/llogo.svg";

var canvas = document.getElementById("canvas");
var lineFooter = document.getElementById("lineFooter");
var lineBotton = document.getElementById("lineBotton");
const ctx = canvas.getContext("2d");
const image = new Image(); // Using optional size for image
image.onload = drawImage; // Draw when image has loaded

// Load an image of intrinsic size 300x227 in CSS pixels
image.src = urlImage.default;

function drawImage() {
  // Use the intrinsic size of image in CSS pixels for the canvas element
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;

  // using the element's width and height properties - lets draw one
  // on top in the corner:
  ctx.drawImage(this, 0, 0, this.width, this.height);
  if (lineFooter.getContext) {
    var l = lineFooter.getContext("2d");
    l.beginPath();
    l.moveTo(0, 20);
    l.lineTo(300, 20);
    // set line grosor
    l.lineWidth = 5;
    // set color to line
    l.strokeStyle = "#ff0e8d";
    l.stroke();
  }
  if (lineBotton.getContext) {
    var line = lineBotton.getContext("2d");
    line.font = "12px Comic Sans MS";
    line.fillStyle = "white";
    line.textAlign = "rigth";
    line.fillText("CopyRight@ Propositivapr 2021", 70, 30);
  }
}

// Section that obtain a list of photos from cloudinary cloud
//menu
const title = document.title;
const menu = {
  "Arte & Moda León": "arteYmodaLeon",
  "Nicaragua Diseña Edición SJS": "ndesings",
  "Edición 2021": "n2021",
  "Edición 2022": "n2022",
  "Edición Granada": "ngranada",
  "Coleccion Summer Time": "summerTime",
  "Coleccion Metamorfosis": "Metamorfosis",
  "Arte, Moda, Diseño y Muralismo": "esteli",
  "Miss Teens Nicaragua": "mteens2021",
};
if (menu[title]) {
  photo(menu[title]);
}
