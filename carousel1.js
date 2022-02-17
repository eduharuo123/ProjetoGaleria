function CarouselQuote(config){
    this.container = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container

    this.itens = (typeof config.itens === 'string') ? this.container.querySelectorAll(config.itens) : config.itens

    this.btnPrev = (typeof config.btnPrev === 'string') ? this.container.querySelector(config.btnPrev) : config.btnPrev

    this.btnNext = (typeof config.btnNext === 'string') ? this.container.querySelector(config.btnNext) : config.btnNext
    var _this = this;
    var index = 0;
    iniciar()

    



function addListeners(){
    _this.btnNext.addEventListener('click', next)
    _this.btnPrev.addEventListener('click', prev)
}

function next(){
    index++;
    if(index >= _this.itens.length){
        index = 0;
    } 
    for(i = 0; i< _this.itens.length; i++){
        _this.itens[i].style.display = "none";
    }
    _this.itens[index].style.display = "block";

}
function prev(){
    index--;
    if(index < 0){
        index = (_this.itens.length - 1);
    } 
    for(i = 0; i< _this.itens.length; i++){
        _this.itens[i].style.display = "none";
    }
    _this.itens[index].style.display = "block";
}



    function iniciar(){
        for(i = 0; i< _this.itens.length; i++){
        _this.itens[i].style.display = "none";
        }
        _this.itens[index].style.display = "block";
       

        addListeners()
        _this.btnNext.removeAttribute('style')
        _this.btnPrev.removeAttribute('style')

    }

}