$(function () {
    $("#bodyContent").load("/views/body.html");
    var scriptTag = document.createElement('script');
    scriptTag.src = "/assets/js/custom.js";
    scriptTag.type = "text/javascript";
    document.getElementById('bodyContent').append(scriptTag);
});
