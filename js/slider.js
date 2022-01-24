const settings  = {autoplay: true, speed: 3000, autoplaySpeed: 3000, slidesToShow: 1, adaptiveHeight: false,
    slidesToScroll: 1, dots: false, arrows: false, mobileFirst: true, centerMode: true, variableWidth: true, variableHeight: true,

    responsive: [
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 4,
            centerMode: false      
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 5,
            centerMode: true     
        }
    },
    {
        breakpoint: 1000,
        settings: "unslick"
    }
]
}

const sl = $('.projects__slider').slick(settings);

$(window).on('resize', function() {
if( $(window).width() > 420 &&  !sl.hasClass('slick-initialized')) {
    sl.slick(settings);
} 
});



const settings2  = {autoplay: true, speed: 3000, autoplaySpeed: 3000, slidesToShow: 1, adaptiveHeight: true,
    slidesToScroll: 1, dots: false, arrows: false, mobileFirst: true, centerMode: true, variableWidth: true, variableHeight: true,
    responsive: [
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        
    },
    {
        
    },
]
}


const st = $('.companies-slider').slick(settings2);

$(window).on('resize', function() {
if( $(window).width() > 420 &&  !sl.hasClass('slick-initialized')) {
    st.slick(settings2);
} 
});
