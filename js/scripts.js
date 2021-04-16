$(document).ready(function () {
    //Handle click on paging links
    $('.tm-paging-link').click(function (e) {
        e.preventDefault();

        var page = $(this).attr('id');
        $('.tm-gallery-page').addClass('hidden');
        $('#tm-gallery-page-' + page).removeClass('hidden');
        $('.tm-paging-link').removeClass('active');
        $(this).addClass("active");
    });
});
$(document).ready(function () {
    $(".covid").hide();
    $(".covid-btn").click(function () {
        $(".covid").toggle();
    });
});