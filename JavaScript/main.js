
$(document).ready(function()
{

$("#ietf").click(function()
{
    $(".ietf").slideToggle();
    $(".icann, .w3c").hide();
});

$("#icann").click(function()
{
    $(".icann").slideToggle();
    $(".ietf, .w3c").hide();
});

$("#w3c").click(function()
{
    $(".w3c").slideToggle();
    $(".icann, .ietf").hide();
});

});