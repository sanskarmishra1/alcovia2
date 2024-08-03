$(document).ready(function(){
    // $(window).on('scroll',function(){
    //     var scroll = $(window).scrollTop(); 
    //     // console.log(scroll);
    //     // if (scroll === 450 || scroll === 946) {
    //     //   resetCounters();
    //     //   updateCounters();
    //     // }
    // })

    // Counter for "About Us"
    const counters = document.querySelectorAll('.count');
    const speed = 200;
    
    // const resetCounters = () => {
    //   counters.forEach((counter) => {
    //       counter.innerText = '0'; // Reset counter text to 0
    //   });
    // };
    // Function to update all counters
    const updateCounters = () => {
        counters.forEach((counter) => {
            const updateCount = () => {
                const target = parseInt(counter.getAttribute('data-target'));
                const count = parseInt(counter.innerText);
                const increment = Math.trunc(target / speed);

                if (count < target) {
                    counter.innerText = count + increment;
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };
    updateCounters();


    // mouse-hover for button
    const $button = $('.submit');
    $button.on('mouseover', function() {
        $(this).css('background-color', 'green');
    });
    $button.on('mouseout', function() {
        $(this).css('background-color', '');
    });

    // for testimonial carousel
const multipleItemCarousel = document.querySelector("#testimonialCarousel");

if (window.matchMedia("(min-width:576px)").matches) {
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: false,
  });

  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();

  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      console.log("next");
      scrollPosition = scrollPosition + cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    }
  });
  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition = scrollPosition - cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    }
  });
} else {
  $(multipleItemCarousel).addClass("slide");
}
// Who are we animation trigger
  // Check if element is in viewport
  // const isElementInView = (el) => {
  //     const rect = el.getBoundingClientRect();
  //     return (
  //         rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0
  //     );
  // };

  // // Function to handle scroll
  // const handleScroll = () => {
  //     const aboutUsSection = document.querySelector('.about-us');

  //     if (isElementInView(aboutUsSection)) {
  //         aboutUsSection.classList.add('animate');
  //     }
  // };

  // // Initial check
  // handleScroll();

  // // Listen for scroll events
  // $(window).on('scroll', handleScroll);


})
