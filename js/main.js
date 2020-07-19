$(document).ready(function(){
	$('.t-special .owl-carousel').owlCarousel({
    loop:true,
    margin:29,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.clients .owl-carousel').owlCarousel({
    loop:true,
    margin:8,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

 $('.happy-client .owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

   $('.gallery .owl-carousel').owlCarousel({
    margin:0,
    loop:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoWidth:true,
    items:4
})
});