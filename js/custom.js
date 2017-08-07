$(document).ready(function() {

    $(".menu > li > a").on({
        'mouseenter focusin': function() {
            $(this).closest("li").siblings().find('.open').stop().stop().stop().fadeTo(50, 0, function() {
                $(this).hide().removeClass('open');
            });
            $(this).siblings('.menu-child').show().addClass('open').stop().stop().fadeTo(100, 1);
        },
        'focusout mouseleave': function() {
            $(this).siblings('.menu-child').fadeTo(50, 0, function() {
                $(this).hide().removeClass('open');
            });
        }
    });
    $(document)
        .on('mouseenter', '.menu-child.open', function(){
            $(this).stop().stop().fadeTo(50, 1);
        })
        .on('mouseleave', '.menu-child.open', function(){
            $(this).fadeTo(50, 0, function(){ $(this).hide().removeClass('open');});
        });

    // Tab
    $('.tabs').each(function() {
        var $active, $content, $links = $(this).find('a');
        $active = jQuery($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
        $active.addClass('active');
        $content = $($active[0].hash);
        $links.not($active).each(function () {
            jQuery(this.hash).hide();
        });
        jQuery(this).on('click', 'a', function(e){
            $active.removeClass('active');
            $content.hide();
            $active = jQuery(this);
            $content = jQuery(this.hash);
            $active.addClass('active');
            $content.show();
            e.preventDefault();
        });
    });

});

// Select Box
function selectboxEvent(target) {
    var $this = $(target),
        str = $this.val();
    $this.parent().children('.selectbox-value').text(str);
}