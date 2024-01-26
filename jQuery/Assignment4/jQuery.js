$(document).ready(function(){
$(".header").click(function(){
    $(this).css("background-color","red" )
});
$(".sidebar").click(function(){
    $(".sidebar-p").text("Leftbar");
});
$(".extracontent").click(function(){
    $(".maincontent").fadeOut();
});
});
