// loader js
$(window).on("load", function () {
  $(".loader-container").delay(300).fadeOut(1000);
});

// Header Fixed
let header = document.querySelector('.page-navbar');
header.classList.toggle('scroll', window.scrollY > 48);

window.addEventListener('scroll', function(){
  header.classList.toggle('scroll', window.scrollY > 48);
});

// Active Link
$(".page-navbar .links .link").each(function () {
  $(this).removeClass('active')
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
  }
});


// SideBar
$('.side-open').on('click', function(){
  $('.links').addClass('active');
  $('.overlay-m').fadeIn(600);
});

// $('.side-user-open').on('click', function(){
//   $('.sidebar').addClass('active');
//   $('.overlay-m').fadeIn(600);
// });

// $('.close').on('click', function(){
//   $('.links').removeClass('active');
//   $('.overlay-m').fadeOut(500);
// });

$('.overlay-m').on('click', function(){
  $('.links').removeClass('active');
  // $('.sidebar').removeClass('active');
  $(this).fadeOut(500);
});


// dropDown stopPropagation
$(".dropdown-menu").click(function(e){
  e.stopPropagation();
});


let isRtl = $('html[lang="ar"]').length > 0;

// Normal Select To
$(".select").select2({
dir: isRtl ? "rtl" : "ltr",
minimumResultsForSearch: Infinity,
});