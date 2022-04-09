$(function () {
    $("#bodyContent").load("/coke//views/body.html");
    $("#checkoutcart").load("/coke//views/checkout.html");
    var scriptTag = document.createElement('script');
    scriptTag.src = "/coke/assets/js/custom.js";
    scriptTag.type = "text/javascript";
    document.getElementById('bodyContent').append(scriptTag);
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
    }

}

var cartData = {};