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
function portfolio() {
  let portfolio = document.querySelector('.portfolio')
  let suporte = document.querySelector('.suporte')
  if (portfolio.classList.contains('portopen')) {
      portfolio.classList.remove('portopen')
  } else {
      portfolio.classList.add('portopen')
      suporte.classList.remove('supopen')
  }
}
function fullsuporte() {
  let suporte = document.querySelector('.suporte')
  let portfolio = document.querySelector('.portfolio')
  if (suporte.classList.contains('supopen')) {
      suporte.classList.remove('supopen')
  } else {
      suporte.classList.add('supopen')
      portfolio.classList.remove('portopen')
  }
}
