window.addEventListener("scroll",function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("Activo",this.window.scrollY>0);
})


let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

console.log("%c©️ Derechos reservados a Brayan Estevez Cardoso","Color:#F61AF0; font-size:2rem; font-weigth:bold;");
console.log("%c https://github.com/BrayanEstevezC","font-size:1.3rem; font-weigth:bold;");