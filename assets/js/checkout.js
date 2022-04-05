
$(document).ready(function () {
    $('#minus').click(function () {
        var $input = $('#counter_input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('#plus').click(function () {
        var $input = $('#counter_input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

function expandMore() {
    event.target.classList.toggle("hide");
    $("#description_details").show();
    let boxHeight = document.getElementById("tnc").offsetHeight;
    $("#description_details").css('height', boxHeight);
}

function viewDiscount() {
    event.target.classList.toggle("hide");
    $("#offers_parent_container").show();    // $("#offers_parent_container").toggle("hide");
    
    let boxHeight = document.getElementById("offers_height_box").offsetHeight;
    $("#offers_parent_container").css('height', boxHeight);
}

function hideDiscount() {
    $("#offers_parent_container").css('height', 0);
    $("#view_more").show();
}

$('.expand-button').on('click', function () {
    $('.special-text').toggleClass('-expanded');
    if ($('.special-text').hasClass('-expanded')) {
        $('.expand-button').html('Collapse Content');
    } else {
        $('.expand-button').html('Continue Reading');
    }
});