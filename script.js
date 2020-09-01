var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//addto cart popup
function addedcart() {
  alert("Item added to cart")
}

//Login modal
function openloginform() {
  document.getElementById("mylogin").style.display = "block";
}

function opensignupform() {
  document.getElementById("mysignup").style.display = "block";
}

function closeloginform() {
  document.getElementById("mylogin").style.display = "none";
}

function closesignupform() {
  document.getElementById("mysignup").style.display = "none";
}

//query modal//
function openqueryform() {
  document.getElementById("myquery").style.display = "block";
}

function closequeryform() {
  document.getElementById("myquery").style.display = "none";
}

function submitquery() {
  alert("Your response is recorded!")
}