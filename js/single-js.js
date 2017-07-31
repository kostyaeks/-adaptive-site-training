//Скрипт для кнопки возврата в начало
  $(document).ready(function(){
  $("#back-top").hide();
  $(function () {
  $(window).scroll(function () {
  if ($(this).scrollTop() > 250) {
      $('#back-top').fadeIn();
  } else {
      $('#back-top').fadeOut();
      }
  });
  $('#back-top a').click(function () {
  $('body,html').animate({
      scrollTop: 0
      }, 400);
        return false;
        });
      });
  });
// Скрипт для установки карты с вытекающими параметрами(установка маркера, отмена скролинга при попадании, адаптивность)
function initialize() {
    var myLatlng = new google.maps.LatLng(55.75756644078924,37.61954162195628),
    mapOptions = {
        zoom: 16,
        center: {
         lat: parseFloat(55.7566647078924),
        lng: parseFloat(37.63099162195628)
        },
        scrollwheel: false,
        scaleControl: false, 
        mapTypeId: google.maps.MapTypeId.ROADMAP
        }
var map = new google.maps.Map(document.getElementById('map'), mapOptions),
contentString = 'Some address here..',
infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 500
});

var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Тутачки мы!",
    map: map
});

google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
});

google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(position);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

// Скрипт для проподания placeholder при фокусе на форме
$(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });