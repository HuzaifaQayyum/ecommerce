const allProducts = document.querySelectorAll('.products--flicktity');

allProducts.forEach(products => {
    const productsList = products.querySelector('.product__list');

    const prevBtn = products.querySelector('.section-starter__btn--prev');
    const nextBtn = products.querySelector('.section-starter__btn--next');

    const productsListFlickity = new Flickity(productsList, {
        cellSelector: ".product__item",
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        draggable: true,
        cellAlign: 'left',
        adaptiveHeight: true
    });

    prevBtn.addEventListener('click', function () {
        productsListFlickity.previous();
    });
    nextBtn.addEventListener('click', function () {
        productsListFlickity.next();
    })

    // TODO: FIX IT ON DRAG
    productsListFlickity.on('cellSelect', function () {
        if (!productsListFlickity.cells[productsListFlickity.selectedIndex - 1]) {
            prevBtn.setAttribute('disabled', 'disabled');
        } else if (!productsListFlickity.cells[productsListFlickity.selectedIndex + 1]) {
            nextBtn.setAttribute('disabled', 'disabled');
        } else {
            prevBtn.removeAttribute('disabled');
            nextBtn.removeAttribute('disabled');
        }
    })
});




// Collapsables
document.querySelectorAll('.collapsable').forEach(collapsable => { 
    collapsable.querySelector('.collapsable__toggler').addEventListener('click', _ => { 
        collapsable.classList.toggle('active');
    });
})
