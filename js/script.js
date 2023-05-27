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
  function fullsuporte() {
    let suporte = document.querySelector('.suporte')
    if (suporte.classList.contains('open')) {
        suporte.classList.remove('open')
    } else {
        suporte.classList.add('open')
        portfolio.classList.remove('open')
    }
  }
  function slideshow() {
    let portfolio = document.querySelector('.portfolio')
    if (portfolio.classList.contains('open')) {
        portfolio.classList.remove('open')
    } else {
        portfolio.classList.add('open')
        suporte.classList.remove('open')
    }
  }
/////////////////////////////
//          Slide          //
var slideIndex = 0
showSlides()
function showSlides() {
    var i
    var slides = document.getElementsByClassName("mySlides")
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slideIndex++
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block"
    setTimeout(showSlides, 5000)
}
