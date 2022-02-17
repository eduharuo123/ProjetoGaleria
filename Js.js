(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')



    var menu = new Menu({
        container:'.header__nav',
        toggleBtn:'.header__btn',
        widthEnabled: 1025
    })

    var crouselImgs = new CarouselQuote({
        container: '.laptop-slider .slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'

    })

    var crouseQuotes = new CarouselQuote({
        container: '.quote-slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'

    })

})()