$(function () {
    $("#bodyContent").load("/views/body.html");
    $("#checkoutcart").load("/views/checkout.html");
    var scriptTag = document.createElement('script');
    scriptTag.src = "/assets/js/custom.js";
    scriptTag.type = "text/javascript";
    document.getElementById('bodyContent').append(scriptTag);
});

function renderPage(page, sectionToScroll) {
    if (page === "homepage") {
        document.getElementById(`${page}`).style.display = "block";
        document.getElementById(`checkoutpage`).style.display = "none";
        // $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    if (page === "checkoutpage") {
        $(window).scrollTop(0);
        if(sectionToScroll === "order_summary") {
            setTimeout(() => {
                $('html,body').animate({scrollTop: $("#order_summary").offset().top}, 1000);
            }, 100);
        } else {
            $(window).scrollTop(0);
        }
        document.getElementById(`${page}`).style.display = "block";
        document.getElementById(`homepage`).style.display = "none";
    }

}

var checkoutData = [];
var cartData = {};
// checkoutData.filter = function () {
//     Array.prototype.filter.apply(this, arguments);
//     // processF(arguments);
// };

// checkoutData.push = function (args) {
//     if(!args.quantity) {
//         args.quantity = 1;
//     }
//     console.log("args --> ", args);
//     console.log("checkoutData --> ", checkoutData);
//     checkoutData.forEach(v => console.log(v));
//     let filteredData = checkoutData.map((item) => {
//         console.log(args.sku)
//         console.log(item.sku)
//         if(item.sku !== args.sku) {
//             console.log("push")
//             item.quantity = 1;
//             return item;
//         } else {
//             console.log("pull");
//             item.quantity = item.quantity + 1;
//             return undefined;
//         }
//     });
//     console.log("filteredData --> ", filteredData);

//     Array.prototype.push.apply(this, [args]);
//     processQ(arguments);
// };