var slideIndex = 0;
var prevIndex;

// adds CSS class that triggers entrance transition
const fadeIn = (x, i) => {
  x[i].classList.add("slide-in-left");
};

// adds CSS class that triggers exit animation
const fadeOut = (x, i) => {
  x[i].classList.add("fade-out-right");
};


// main loop
function carousel() {
  var i;
  var x = document.getElementsByClassName("slideItem");

  for (i = 0; i < x.length; i++) {
    // hides all images and removes added effects
    x[i].style.display = "none";
    x[i].classList.remove("slide-in-left");
    x[i].style.zIndex = "0";
  }

  slideIndex++;

  //0 3  1 0  2 1  3 2
  // 0    1    2    3

  // prevents IndexOutOfRange exception
  if (slideIndex > x.length - 1) {
    slideIndex = 0;
  }

  // unhide the image that is about to be shown
  x[slideIndex].style.display = "block";
  x[slideIndex].style.zIndex = "1";

  // logic to prevent outOfRange exceptions
  if (slideIndex == 0) {
    prevIndex = 3;
  } else {
    prevIndex = slideIndex - 1;
  }

  // unhide previously shown image to add crossfade effect
  x[prevIndex].style.display = "block";
  x[prevIndex].style.zIndex = "0";

  // trigger animations
  fadeIn(x, slideIndex);
  fadeOut(x, prevIndex);

  setTimeout(carousel, 2000); // Change image every 2 seconds
}

carousel();
