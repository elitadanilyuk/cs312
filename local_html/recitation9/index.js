// Hello World! & button example
console.log("Hello World!");

var btn = document.createElement("button");
btn.innerText = "What time is it?";
btn.onclick = function () {
  alert(Date()) };

var timerdiv = document.createElement('div');
timerdiv.innerText = Date();

function returnTime() {
  return Date();
}

setInterval(function () {
  timerdiv.innerText = returnTime();
}, 1000);

window.onload = function(){
  console.log("Page Loaded");
  document.body.appendChild(btn);
  document.body.appendChild(timerdiv);
}


/* Example #1
Link the JS file using a script tag
*/
// the following line of code in the html file
// <script type="text/javascript" src="index.js"></script>


/* Example #2
Fetch an element by id and change a piece of its style
*/
window.onload = function(){
  var header = document.getElementById('title');
  header.style.fontSize = '40px';
  header.style.color = "orange";

  /* Example #3
  Create an event listener that replaces an element's text when you click either the element or a button
  */
  header.onclick = function () {
    array = ['Chilis', 'Chillies', 'Chiiilis', 'Chilliies'];
    header.innerText = "Super Spicy " + array[Math.floor(Math.random() * array.length)];
  }


  /* Example #5
  Receive the user's name as input and customize a welcome message on your page using their name
  */
  var userName = ""
  var userNameInput = document.createElement("input");
  document.body.appendChild(userNameInput);

  var userButton = document.createElement("button");
  userButton.innerText = "Customize Header";
  document.body.appendChild(userButton);

  userButton.onclick = function (){
    userName = userNameInput.value;
    header.innerText = "Hello " + userName + "!";
  }
}


  /* Example #4
  Make a simple slideshow using your image or a set of other images
  */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
