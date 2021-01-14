$(function(){
    // fixed botton fadein
    const fixedButton = $('#fixed_menu');
    fixedButton.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            fixedButton.fadeIn();
        } else {
            fixedButton.fadeOut();
        }
    });

    // adjust spn footer menu
    $(window).on('load scroll resize', function(){
        const scrollTop = $(window).scrollTop();
        const scrollMax = $(document).height() - window.innerHeight;

        if(scrollTop >= scrollMax){
            $('#fixed_menu').css('bottom','3%');
        }else{
            $('#fixed_menu').css('bottom','0');
        }

    });
});
