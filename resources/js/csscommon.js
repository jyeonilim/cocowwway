$(document).ready(function() {

    // Content Scroll
    var contentScroll = (function () {
        var windowHeight = $(window).height();
        var headHeight = $('.header').outerHeight(true);
        var footHeight = $('.footer').outerHeight(true);
        $('.iframe-content').height(windowHeight-(headHeight+footHeight));
        $('.content').height(windowHeight);
    });
    $(document).ready(contentScroll);
    $(window).resize(contentScroll);

    $('.quick-search a').on('click',function () {
        $(this).toggleClass('active');
        $('.search-box').toggleClass('show');
        return false;
    });
    $('.quick-user a').on('click',function () {
        $('.user-box').toggle();
        return false;
    });
    $('.user-box .btn-close').on('click',function () {
        $('.user-box').hide();
        return false;
    });

    // Menu
    $(".menu > li > a").on({
        'mouseenter': function(e) {
            var hasMenu = $(this).next().hasClass('menu-child');
            if(hasMenu === true) {
                e.preventDefault();
                $(this).closest("li").siblings().find('.open').stop().stop().stop().fadeTo(50, 0, function() {
                    $(this).hide().removeClass('open');
                    $(this).parent().removeClass('menu-child-after');
                    console.log('1');
                });

                $(this).siblings('.menu-child').show().addClass('open').stop().stop().fadeTo(100, 1);
                $(this).parent().addClass('menu-child-after');
                console.log('너냐');
            }
            return false;
        },
        'mouseleave': function() {
            $(this).siblings('.menu-child').fadeTo(50, 0, function() {
                $(this).hide().removeClass('open');
                $(this).parent().removeClass('menu-child-after');
                console.log('뭐냐');
            });
        }
    });
    $(document)
        .on('mouseenter', '.menu-child.open', function(){
            $(this).stop().stop().fadeTo(50, 1);
            console.log('4');
        })
        .on('mouseleave', '.menu-child.open', function(){
            $(this).fadeTo(50, 0, function(){ $(this).hide().removeClass('open');});
            $(this).parent().removeClass('menu-child-after');
            console.log('5');
        });
    $('.btn-all-menu').on('click',function () {
        $('.all-menu-box').toggle();
        return false;
    });
    $('.all-menu .btn-close').on('click',function () {
        $('.all-menu-box').hide();
        return false;
    });

    // 푸터 하단 결재작성 레이어 띄우기
    $('.write-approval > a').on('click',function () {
        $('.write-approval-box').toggle();
        return false;
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

    //편의정보 탭
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

    //업무지원
    $('.work-support-head li').on('click',function () {
        var $this = $(this);
        $this.parent().children().removeClass('active');
        $this.addClass('active');
    });
    $(document).mouseup(function (e) {
        if(!$('.my-quick-box').is(e.target)&&$('.my-quick-box').has(e.target).length===0) {
            $('.work-support-head li').removeClass('active')
            $('.work-support-head li:first-child').addClass('active');
            $('.my-quick-box').hide();
        }
    });

    // 하단 공지사항
    $('.footer-notice').carouFredSel({
        direction: 'up',
        align: 'center',
        visible: 1,
        play: true,
        scroll: {
            pauseOnHover: true,
            easing: 'swing'
        }
    });

    $('.board-list .author').on('click', function () {
        var $target = $('.user-profile-box'),
            offset = $(this).offset(),
            windowHeight = $(window).height(),
            boxHeight = $target.outerHeight(true);
        $target.removeClass('reverse').show();
        var itemWidth = $('.user-account-link').outerWidth(true);
        $target.css({'top':offset.top+25,'left':offset.left+70,'width':itemWidth+2,'margin-left':-itemWidth/2});
        if(offset.top+boxHeight>windowHeight) {
            $target.addClass('reverse').css({'top':offset.top-(boxHeight+5)});
        }
        $('.content').scroll(function() {
            $target.fadeOut(300);
        });
    });

    // 레이어 이외 영역 클릭시 닫힘
    $(document).mouseup(function (e) {
        if(!$('.layer-wrap').is(e.target)&&$('.layer-wrap').has(e.target).length===0) {
            $('.layer-wrap').hide();
        }
    });

    // Tooltip
    $('.tooltip a').on('mouseover',function() {
        var target = $('.tooltip-box'),
            offset = $(this).offset(),
            windowHeight = $(window).height(),
            boxHeight = $(target).outerHeight(true);
        $(target).removeClass('reverse');
        $(target).stop(true,true).fadeIn(300).css({'top':offset.top+25,'left':offset.left-14,'width':300});
        if(offset.top+boxHeight>windowHeight) {
            $(target).addClass('reverse').css({'top':offset.top-(boxHeight+5)});
        }
    }).on('mouseleave',function() {
        $('.tooltip-box').fadeOut(300);
    });
    $('.schedule-divide .tooltip a').on('mouseover',function() {
        $('.tooltip-box').css('width',250);
    });

    // $('.left').parent('.content-inner').css('padding-right',0); //서버에서만 사용 개발 소스 입히면서 남아있는 패딩때문에
    // Left Tree Scroll
    var leftScroll = (function () {
        var contentHeight = $('.content-inner').height(),
            headHeight = $('.left-head').outerHeight(true),
            footHeight = $('.left-foot').outerHeight(true),
            hasMail = $('.left-head div').hasClass('mail-type');
        if(hasMail===true) {
            $('.left-body').height(contentHeight-((headHeight+5)+footHeight));
            $("#tree_area").height($('.left-body').height());
        } else  {
            $('.left-body').height(contentHeight-((headHeight+3)+footHeight));
            $("#tree_area").height($('.left-body').height());
        }
    });
    $(document).ready(leftScroll);
    $(window).resize(leftScroll);

    $('.btn-hidden-view.bcc-view').on('click', function () {
        $(this).toggleClass('on');
        $('.item-bcc').toggleClass('on');
    });
    $('.btn-hidden-view.attach-view').on('click', function () {
        $(this).toggleClass('on');
        $('.attach-box').toggleClass('on');
    });

    // 서브페이지 컨텐츠 스크롤
    var pageScroll = (function () {
        var hasSubMenu = $('.page-menu').attr('class'),
            windowHeight = $(window).height(),
            contentHeight = $('.border-box').outerHeight(true),
            titleHeight = $('.page-title').outerHeight(true),
            menuHeight = $('.page-menu').outerHeight(true);
        if(hasSubMenu === 'page-menu') {
            $('.iframe-content').height(contentHeight-((titleHeight+3)+(menuHeight+2)));
        } else {
            $('.page-content').height(contentHeight-titleHeight+3);
        }
        $('.mail-configuration').height(windowHeight);
    });
    $(document).ready(pageScroll);
    $(window).resize(pageScroll);

    // 메일 환경설정 스크롤 메뉴
    $('.page-menu').carouFredSel({
        responsive: true,
        scroll: {
            items: 1,
            duration: 300
        },
        items: {
            visible: 8
        },
        prev: '.slide-prev',
        next: '.slide-next',
        auto: false
    });

    // 메일 환경설정 서명관리 미리보기
    $('.btn-sign-preview').on('click',function () {
        $('.sign-preview').toggle();
    });

    // 일정관리 스크롤
    var calendarScroll = (function () {
        var hasWeekly = $('.calendar-wrap').hasClass('weekly'),
            calendarHeight = $('.calendar-wrap').height();
        if(hasWeekly === true) {
            $('.schedule-list-wrap').height((calendarHeight/2)-1);
            $('.sat+td .schedule-list-wrap,.sun+td .schedule-list-wrap').height((calendarHeight/4)-1);
        } else {
            $('.schedule-list-wrap').height((calendarHeight/5)-20);
        }
    });
    $(document).ready(calendarScroll);
    $(window).resize(calendarScroll);

});

// Select Box
function selectboxEvent(target) {
    var $this = $(target),
        str = $this.val();
    $this.parent().children('.selectbox-value').text(str);
}

// Layer
function layerOpen(layer) {
    var $this = $(layer);
    // $this.css("top", Math.max(0, $(window).scrollTop() + 50) + "px").show();
    $this.show();
    return false;
}
function layerClose(layer) {
    var $this = $(layer);
    $this.closest('.layer-wrap').hide();
    return false;
}