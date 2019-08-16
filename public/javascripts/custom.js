$(document).ready(function () {
    $('#nav li a').click(function () {
        alert("hi");
        $('#nav li').removeClass();
        $($(this).attr('href')).addClass('active');
    });
});