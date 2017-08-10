$(document).ready(function() {

    // Menu
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
            $(this.hash).hide();
        });
        $(this).on('click', 'a', function(e){
            $active.removeClass('active');
            $content.hide();
            $active = jQuery(this);
            $content = jQuery(this.hash);
            $active.addClass('active');
            $content.show();
            e.preventDefault();
        });
    });

    //편의정보 슬라이드 탭
    $('.convenience-tab.tabs').carouFredSel({
        scroll: {
            items: 1,
            duration: 300
        },
        items: {
            visible: {
                max: 4
            }
        },
        prev: '.slide-prev',
        next: '.slide-next',
        auto: false
    });

    $('.footer-notice').carouFredSel({
        direction: 'up',
        align: 'center',
        visible: 1,
        play: true, // play automatically
        scroll: {
            pauseOnHover: true,
            easing: 'swing' // linear, swing, quadratic, cubic or elastic
        }
    });

});

// Select Bo
function selectboxEvent(target) {
    var $this = $(target),
        str = $this.val();
    $this.parent().children('.selectbox-value').text(str);
}