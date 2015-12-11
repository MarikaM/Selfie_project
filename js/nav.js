$('#close-panel').click(function()){
    $(this).find('img').toggleClass('plus');
    $('.site-manu').slideToggle(400);
});