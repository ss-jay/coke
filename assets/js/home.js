$(function () {
    $("#bodyContent").load("/coke//views/body.html");
    $("#checkoutcart").load("/coke//views/checkout.html");
});

function renderPage(page, sectionToScroll) {
    if (page === "homepage") {
        document.getElementById(`${page}`).style.display = "block";
        document.getElementById(`checkoutpage`).style.display = "none";
    }

    if (page === "checkoutpage") {
        $(window).scrollTop(0);
        if (sectionToScroll === "order_summary") {
            setTimeout(() => {
                $('html,body').animate({ scrollTop: $("#order_summary").offset().top }, 1000);
            }, 100);
        } else {
            $(window).scrollTop(0);
        }
        document.getElementById(`${page}`).style.display = "block";
        document.getElementById(`homepage`).style.display = "none";

        // send event
        console.log('home.js => ',document.getElementById('ymIframe'));
        document.getElementById('ymIframe').contentWindow.postMessage({
            event_code: 'ym-client-event',
            data: {
                event: {
                 code: "applied_coupons",
                 data: {}
                }
            }
       }, '*');
       console.log('home.js => Event sent');
    }

}

var cartData = {};