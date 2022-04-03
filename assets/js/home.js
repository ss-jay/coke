$(function () {
    $("#bodyContent").load("/coke/views/body.html");
    var scriptTag = document.createElement('script');
    scriptTag.src = "/coke/assets/js/custom.js";
    scriptTag.type = "text/javascript";
    document.getElementById('bodyContent').append(scriptTag);
});
