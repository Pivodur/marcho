$(function(){

   $(".blog-page__slider").slick({
      infinite: false,
      prevArrow: '<button type="button" class="slick-prev"><svg width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g><path d="M 0.332031 6.382812 C -0.109375 6.722656 -0.109375 7.277344 0.332031 7.621094 L 5.957031 11.996094 C 6.394531 12.335938 7.109375 12.335938 7.546875 11.996094 C 7.988281 11.652344 7.988281 11.097656 7.546875 10.757812 L 2.71875 7 L 7.542969 3.242188 C 7.984375 2.902344 7.984375 2.347656 7.542969 2.003906 C 7.105469 1.664062 6.390625 1.664062 5.953125 2.003906 L 0.328125 6.378906 Z M 0.332031 6.382812 "/></g></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g><path d="M 8.667969 6.382812 C 9.109375 6.722656 9.109375 7.277344 8.667969 7.621094 L 3.042969 11.996094 C 2.605469 12.335938 1.890625 12.335938 1.453125 11.996094 C 1.011719 11.652344 1.011719 11.097656 1.453125 10.757812 L 6.28125 7 L 1.457031 3.242188 C 1.015625 2.902344 1.015625 2.347656 1.457031 2.003906 C 1.894531 1.664062 2.609375 1.664062 3.046875 2.003906 L 8.671875 6.378906 Z M 8.667969 6.382812 "/></g></svg></button>'
   })

   $(".product-tabs__top-item").on("click", function(e) {
      e.preventDefault();
      $(".product-tabs__top-item").removeClass("product-tabs__top-item--active");
      $(this).addClass("product-tabs__top-item--active");
      $(".product-tabs__content-item").removeClass("product-tabs__content-item--active");
      $($(this).attr('href')).addClass("product-tabs__content-item--active")
   })

   $(".product-slide__thumbs").slick({
      asNavFor: '.product-slide__big',
      draggable: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      focusOnSelect: true,
   })
   $(".product-slide__big").slick({
      asNavFor: '.product-slide__thumbs',
      draggable: false,
      arrows: false,
      fade: true
   })

   $(".shop-content__filter-btn").on("click", function(){
      $(".shop-content__filter-btn").removeClass("shop-content__filter-btn--active")
      $(this).addClass("shop-content__filter-btn--active")
   })

   $(".button-list").on("click", function(){
      $(".products-item").addClass("product-item--list")
      $(".shop-content").addClass("shop-content--list")
   })

   $(".button-grid").on("click", function(){
      $(".products-item").removeClass("product-item--list")
      $(".shop-content").removeClass("shop-content--list")
   })

   $(".shop-content__select, .product-filter__num").styler()

   $(".filter-price__input").ionRangeSlider({
      type: "double",
      prefix: $,
      hide_from_to: true, 
      hide_min_max: true,
      onStart: function (data) {
         $(".filter__price-from").text(data.from);
         $(".filter__price-to").text(data.to);
      }, 
      onChange: function (data) {
         $(".filter__price-from").text(data.from);
         $(".filter__price-to").text(data.to);
     },

   })
   $('.top-slider__inner').slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000
   })
   $(".stars").rateYo({
      starWidth: "16px",
      normalFill: "#ccccce",
      ratedFill: "#ffc35b",
      readOnly: true,
    });

    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      
      return {
        total,
        days,
        hours,
        minutes,
        seconds
      };
    }
    
    function initializeClock(id, endtime) {
      const clock = document.querySelector('.promo__clock');
      const daysSpan = clock.querySelector('.promo__days');
      const hoursSpan = clock.querySelector('.promo__hours');
      const minutesSpan = clock.querySelector('.promo__minutes');
      const secondsSpan = clock.querySelector('.promo__seconds');
    
      function updateClock() {
        const t = getTimeRemaining(endtime);
    
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
    
      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
    }
    
    const deadline = $('.promo__clock').attr('data-time');
    initializeClock('.promo__clock', deadline);
});