function Show() {
    let container = document.querySelector('.container');
    if (container.classList.contains('show')) {
        container.classList.remove('show');
    } else {
        container.classList.add('show');
    }
    let btt = document.querySelector('.btt');
    if (btt.classList.contains('close')) {
        btt.classList.remove('close');
    } else {
        btt.classList.add('close');
    }
  }
// portfolios show //
function tecno() {
    let reparo = document.querySelector('.reparo');
    if (reparo.classList.contains('open')) {
        reparo.classList.remove('open');
    } else {
        reparo.classList.add('open');
    }
  }
  function fullsuporte() {
    let suporte = document.querySelector('.suporte');
    if (suporte.classList.contains('open')) {
        suporte.classList.remove('open');
    } else {
        suporte.classList.add('open');
    }
  }
  function slideshow() {
    let portfolio = document.querySelector('.portfolio');
    if (portfolio.classList.contains('open')) {
        portfolio.classList.remove('open');
    } else {
        portfolio.classList.add('open');
    }
  }
/////////////////////////////
//          Slide          //
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
    var dots = document.getElementsByClassName("dot");
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
// Auto Slide   //
//var slideIndex = 0;
//showSlides();
//function showSlides() {
//    var i;
//    var slides = document.getElementsByClassName("mySlides");
//    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    slideIndex++;
//    if (slideIndex > slides.length) { slideIndex = 1 }
//    slides[slideIndex - 1].style.display = "block";
//    setTimeout(showSlides, 2000); // Change image every 2 seconds
//}