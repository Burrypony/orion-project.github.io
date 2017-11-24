$("documents").ready(function() {
  if ($(window).width() < 480) {
    $(".box__second-photo").find(".slick-track").addClass("w100per");
  };

  $('.box__main-photo').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.box__second-photo',
    nextArrow: '<img src="img/arrow_right-white.svg" class="slick-next"></img>',
    prevArrow: '<img src="img/arrow_left-white.svg" class="slick-prev"></img>',
    draggable: false,
  });
  $('.box__second-photo').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.box__main-photo',
    focusOnSelect: true,

  });
  $(".box").on("click", ".slick-arrow", function() {
    console.log("231456ewfwe");
  });
  $(".slick-next").click(function() {
    $(".box__second-photo").find(".slick-track").css("transform", "translate3d(0px, 0px, 0px)");
  });
  $(".slick-prev").click(function() {
    $(".box__second-photo").find(".slick-track").css("transform", "translate3d(0px, 0px, 0px)");
  });
  $(".box__main-photo").on('touchmove', function() {
    $(".box__second-photo").find(".slick-track").css("transform", "translate3d(0px, 0px, 0px)");
  });
  $(".box__main-photo").on('slidesToScroll', function() {
    $(".box__second-photo").find(".slick-track").css("transform", "translate3d(0px, 0px, 0px)");
  });
  $(".box__main-photo").on('animate', function() {
    $(".box__second-photo").find(".slick-track").css("transform", "translate3d(0px, 0px, 0px)");
  });
  $(".box__main-photo").animate(function() {
    $(".box__second-photo").find(".slick-track").css("transform", "translate3d(0px, 0px, 0px)");
  });
  // if (slick-track.style.transition = "transform500ms") {
  //   $(".box__second-photo").find(".slick-track").css("transform", "translate3d(0px, 0px, 0px)");
  // };
});
