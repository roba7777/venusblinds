/*! Causer-Project */
$('#projectCarousel').carousel({
  interval: false,
})
$('.project-carousel .project-item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
    	next = $(this).siblings(':first');
  	}
    
    next.children(':first-child').clone().appendTo($(this));
  }
});
/*!Causer-product-A*/
$('#productCarousel').carousel({
    interval: false,
});
// handles the carousel thumbnails
$('[id^=carousel-selector-a-]').click( function(){
  var id_selector = $(this).attr("id");
  var id = id_selector.substr(id_selector.length -1);
  id = parseInt(id);
  $('#productCarousel').carousel(id);
  $('[id^=carousel-selector-a-]').removeClass('selected');
  $(this).addClass('selected');
});

// when the carousel slides, auto update
$('#productCarousel').on('slid', function (e) {
  var id = $('.item.active').data('slide-number');
  id = parseInt(id);
  $('[id^=carousel-selector-a-]').removeClass('selected');
  $('[id=carousel-selector-a-'+id+']').addClass('selected');
});
/*!Causer-product-B*/
$('#productCarouselB').carousel({
    interval: false,
});
// handles the carousel thumbnails
$('[id^=carousel-selector-b-]').click( function(){
  var id_selector = $(this).attr("id");
  var id = id_selector.substr(id_selector.length -1);
  id = parseInt(id);
  $('#productCarouselB').carousel(id);
  $('[id^=carousel-selector-b-]').removeClass('selected');
  $(this).addClass('selected');
});

// when the carousel slides, auto update
$('#productCarouselB').on('slid', function (e) {
  var id = $('.item.active').data('slide-number');
  id = parseInt(id);
  $('[id^=carousel-selector-b-]').removeClass('selected');
  $('[id=carousel-selector-b-'+id+']').addClass('selected');
});
/*!Causer-product-C*/
$('#productCarouselB').carousel({
    interval: false,
});
// handles the carousel thumbnails
$('[id^=carousel-selector-c-]').click( function(){
  var id_selector = $(this).attr("id");
  var id = id_selector.substr(id_selector.length -1);
  id = parseInt(id);
  $('#productCarouselC').carousel(id);
  $('[id^=carousel-selector-c-]').removeClass('selected');
  $(this).addClass('selected');
});

// when the carousel slides, auto update
$('#productCarouselC').on('slid', function (e) {
  var id = $('.item.active').data('slide-number');
  id = parseInt(id);
  $('[id^=carousel-selector-c-]').removeClass('selected');
  $('[id=carousel-selector-c-'+id+']').addClass('selected');
});
/*!Causer-product-D*/
$('#productCarouselD').carousel({
    interval: false,
});
// handles the carousel thumbnails
$('[id^=carousel-selector-d-]').click( function(){
  var id_selector = $(this).attr("id");
  var id = id_selector.substr(id_selector.length -1);
  id = parseInt(id);
  $('#productCarouselD').carousel(id);
  $('[id^=carousel-selector-d-]').removeClass('selected');
  $(this).addClass('selected');
});

// when the carousel slides, auto update
$('#productCarouselD').on('slid', function (e) {
  var id = $('.item.active').data('slide-number');
  id = parseInt(id);
  $('[id^=carousel-selector-d-]').removeClass('selected');
  $('[id=carousel-selector-d-'+id+']').addClass('selected');
});



/*! News-Project */
$('#newsCarousel ').carousel({
  interval: false,
})
$('.news-carousel .news-item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<1;i++) {
    next=next.next();
    if (!next.length) {
    	next = $(this).siblings(':first');
  	}
    
    next.children(':first-child').clone().appendTo($(this));
  }
});
/*! News-Project4 */
$('#newsCarousel4 ').carousel({
  interval: false,
})
$('.news-carousel-4 .news-item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
    	next = $(this).siblings(':first');
  	}
    
    next.children(':first-child').clone().appendTo($(this));
  }
});
/*! Tap menu*/
$('#myTab a').hover(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
/*! Select*/
$('.dimensions-width').select2();
$('.dimensions-length').select2();
