var slideIndex = 0;
var prevIndex;




const fadeIn = (x,i) => {
  x[i].classList.add('slide-in-left')
};


const fadeOut = (x,i) => {
  x[i].classList.add('fade-out-right');
  

  console.log('done')
}



function carousel() {
  var i;
  var x = document.getElementsByClassName("slideItem");
 
  for (i = 0; i < x.length; i++) { // hides all images
    x[i].style.display = "none";

    x[i].classList.remove('slide-in-left');
    x[i].style.zIndex = "0";
  
  }
  slideIndex++;
  

  // if (slideIndex-2 == -2) {prevIndex = 3} else if (slideIndex-2 == -1) {prevIndex=0} else {prevIndex = slideIndex - 2}


  //0 3  1 0  2 1  3 2 
  // 0    1    2    3    

  if (slideIndex > x.length-1) { slideIndex = 0 }
  

  x[slideIndex].style.display = "block";
  x[slideIndex].style.zIndex = "1"


  if (slideIndex == 0) {
    prevIndex = 3;
  } else {
    prevIndex = slideIndex - 1;
  }
 

  x[prevIndex].style.display = "block";
  x[prevIndex].style.zIndex = "0";



  fadeIn(x,slideIndex);
  fadeOut(x,prevIndex);
  setTimeout(carousel, 2000); // Change image every 2 seconds
  
}

carousel();

