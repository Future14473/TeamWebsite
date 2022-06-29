var slideIndex = 0;
var numImgs = 4;


const newspaperSpinning = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];
const newspaperTiming = {
  duration: 2000,
  iterations: 1,
}


const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fade = async (x,i) => {
  j=100;
  x[i].classList.add('fade-in-left')
  // while(j>40) {
  //   x[i].style.style.animation = 'fading 2s infinite'
  //   await wait(60);
  //   j-=1
  // }
};






function carousel() {
  var i;
  var x = document.getElementsByClassName("slideItem");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  fade(x,slideIndex-1)
  setTimeout(carousel, 2000); // Change image every 2 seconds
  
}

carousel();

