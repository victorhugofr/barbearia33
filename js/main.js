 (function($){
  
  $('.paroller').paroller()
  var contentWaypoint = function(){
    $('.element-animate').waypoint( function( direction ){
      console.log(direction)
      console.log(this)
      console.log(this.element)
      
      const $element = $(this.element);
      let effect = $element.data('animate-effect') || 'fadeInUp';
      
      
      
      if(direction === 'down' && !$element.hasClass('element-animated')){
        $element.removeClass('element-animate').addClass('element-animated ' + effect)
      }

    }, {
      offset: '90%'
    })
  }
  
  contentWaypoint()
  
})(jQuery)

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
      captionText.innerHTML = dots[slideIndex-1].alt;
    }