let bar = document.getElementById('bar');
let nav = document.getElementById('nav');
let close = document.getElementById('close')


    bar.addEventListener('click', () => {
      nav.classList.add('active');
    })


    close.addEventListener('click', () => {
       nav.classList.remove('active');
    })


