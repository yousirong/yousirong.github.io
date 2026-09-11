//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the top nav element
    const topNav = document.body.querySelector('#topNav');
    if (topNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#topNav',
            rootMargin: '-15% 0px -70%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const btnPrint = document.body.querySelector('#btnPrint');
    if (btnPrint) {
        btnPrint.addEventListener('click', event => {
            event.preventDefault();
            window.print();
        });
    };

});
