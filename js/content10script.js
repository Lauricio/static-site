/*(function($) {
    $(function() {
        // Focus state for append/prepend inputs
        $('.input-prepend, .input-append').on('focus', 'input', function() {
            $(this).closest('.control-group, form').addClass('focus');
        }).on('blur', 'input', function() {
            $(this).closest('.control-group, form').removeClass('focus');
        });
       
        (function(el) {
            $(window).resize(function() {
                if (!$('> img', el).hasClass('ani-processed2')) {
                    el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight() - parseInt(el.css('padding-bottom'), 10));
                }
            }).scroll(function() {
                if (!$('> img', el).hasClass('ani-processed2')) {
                    if ($(window).scrollTop() >= el.data('scrollPos')) {
                        $('> img', el).addClass('ani-processed2');
                        $('.box', el).each(function(idx) {
                            $(this).delay(idx * 100).animate({
                                fake : 0
                            }, 1, 'linear', function() {
                                $(this).addClass('ani-processed2');
                            });
                        });
                    }
                }
            });
        })($('.content-10CMS'));
    });

    $(window).load(function() {
        $('html').addClass('loaded');
        $(window).resize().scroll();
    });
})(jQuery);

*/