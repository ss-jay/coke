$(function () {
    $("#bodyContent").load("/coke//views/body.html");
    $("#checkoutcart").load("/coke//views/checkout.html");
    var scriptTag = document.createElement('script');
    scriptTag.src = "/coke/assets/js/custom.js";
    scriptTag.type = "text/javascript";
    document.getElementById('bodyContent').append(scriptTag);
});

function renderPage(page) {
    if(page === "homepage") {
        document.getElementById(`${page}`).style.display = "block";
        document.getElementById(`checkoutpage`).style.display = "none";
    } 
    
    if(page === "checkoutpage") {
        console.log(page)
        document.getElementById(`${page}`).style.display = "block";
        document.getElementById(`homepage`).style.display = "none";
    }
    
}