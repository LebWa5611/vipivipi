$(document).ready(function() {
    /** Elevating logistics selection */
    $('.selection-item').each(function(index){
        let selected = $(this);
        selected.hover(function(){
            $('.selection-item').removeClass('active')
            selected.addClass('active');
            $('.elevating-logistics .image img').removeClass('active')
            $('.elevating-logistics .image img').eq(index).addClass('active')
        })
    })
    /** Industries slider */
    $('.industries .tabs .tab-item').each(function(index){
        let selected = $(this);
        selected.click(function(){
            $('.industries .tabs .tab-item').removeClass('active')
            selected.addClass('active');
            $('.industries .background img').removeClass('active')
            $('.industries .background img').eq(index).addClass('active')
            $('.industries .content .content-item').removeClass('active')
            $('.industries .content .content-item').eq(index).addClass('active')
        })
    })
    /** Menu */
    if (window.location.pathname === '/') {
        $('#menu-main-menu li').eq(0).addClass('active')
        $('#menu-main-menu-1 li').eq(0).addClass('active')
    }
    /** DatePicker */
    $('input[type="date"]').on('click', function () {
        this.showPicker(); // Trigger the datepicker programmatically
    });
    /** Contact us form Tabs */
    $('.contact-forms .tabs h3').click(function(){
        $('.contact-forms .tabs h3').removeClass('active-tab');
        $(this).addClass('active-tab');
        let index = $('.contact-forms .tabs h3').index(this);
        $('.contact-forms .tabs-content .tab').removeClass('active-tab');
        $('.contact-forms .tabs-content .tab').eq(index).addClass('active-tab');
    })
    /** Mobile menu */
    if($('.burger').length > 0){
        $('.burger').click(function(e) {
            e.preventDefault();
            $('body').toggleClass('overflow-hidden')
            $('.mobile-menu').toggleClass('active')
            $('.burger div').removeClass('active')
            if($('body').hasClass('overflow-hidden')){
                $('.burger .burger_close').addClass('active')
            } else {
                $('.burger .burger_open').addClass('active')
            }
        })
    }

    /** Sticky header */
    function checkScroll() {
        var headerHeight = $('header').outerHeight();
        if ($(window).scrollTop() > (headerHeight + 30)) {
            $('body').addClass('scrolled');
        } else {
            $('body').removeClass('scrolled');
        }
    }
    checkScroll();

    /** Window Events */
    $(window).resize(function() {

    });
    $(window).scroll(function() {
        checkScroll();
    });
    /** select2 init */
    if($('select').length > 0){
        $('select').select2({
            minimumResultsForSearch: -1
        });
    }
});