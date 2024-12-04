// Facebook Pixel Code
!function(f,b,e,v,n,t,s) {
    if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)
}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '336617377178130');
fbq('track', 'PageView');

// The Trade Desk Pixel
ttd_dom_ready(function() {
    if (typeof TTDUniversalPixelApi === 'function') {
        var universalPixelApi = new TTDUniversalPixelApi();
        universalPixelApi.init("wed77s2", ["q684oyg"], "https://insight.adsrvr.org/track/up");
    }
});

// Google Tag Manager
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-N3D77KRM');

// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-6XJ7KVDLB6');

// Custom JavaScript for the website
document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('.header');
    
    menuToggle.addEventListener('click', function() {
        header.classList.toggle('open');
    });

    // Product slider functionality
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const productGrid = document.querySelector('.grid');

    leftArrow.addEventListener('click', function() {
        productGrid.scrollBy({
            left: -275,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', function() {
        productGrid.scrollBy({
            left: 275,
            behavior: 'smooth'
        });
    });

    // Additional functionality can be added here
});
