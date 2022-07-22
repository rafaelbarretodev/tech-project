$("#menu-btn").click(function () {
  $("nav .navigation ul").addClass("active");
});
$("#menu-close").click(function () {
  $("nav .navigation ul").removeClass("active");
});

let count = 1;
document.getElementById("radio1").checked = true;

setInterval (function(){
  nextImage();
}, 5000)

function nextImage(){
  count++;
  if (count>4){
    count = 1;
  }
  document.getElementById("radio"+count).checked = true;
}

// ========== REVIEW ==========
var btn = document.getElementsByClassName("btn2");
var slide = document.getElementById("slide");

btn[0].onclick = function(){
  slide.style.transform = "translateX(0px)";
  for(i=0;i<4;i++){
    btn[i].classList.remove("active")
  }
  this.classList.add("active");
}
btn[1].onclick = function(){
  slide.style.transform = "translateX(-800px)";
  for(i=0;i<4;i++){
    btn[i].classList.remove("active")
  }
  this.classList.add("active");
}
btn[2].onclick = function(){
  slide.style.transform = "translateX(-1600px)";
  for(i=0;i<4;i++){
    btn[i].classList.remove("active")
  }
  this.classList.add("active");
}
btn[3].onclick = function(){
  slide.style.transform = "translateX(-2400px)";
  for(i=0;i<4;i++){
    btn[i].classList.remove("active")
  }
  this.classList.add("active");
}

// ========== UPLOAD ==========
const form = document.querySelector("form"),
fileInput = form.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");

form.addEventListener("click", ()=>{
  fileInput.click();
});

fileInput.onchange = ({target}) =>{
    let file  = target.file[0]; //
    if(file){ //if file is selected
      let fileName = file.name; //getting selected file name
      uploadFile(fileName); //calling uploadFile with passing file name as an argument

    }
}

function uploadFile(name){
  let xhr = new XMLHttpRequest(); //creating new xml obj (AJAX)
}
