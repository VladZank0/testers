ymaps.ready(function () {
    init();
});

let cords = [56.007483,92.839807];

function init(){
  if(document.querySelector('#map')){
    let map = new ymaps.Map("map", {
      center: cords,
      zoom: 15,
      // behaviors: ['multiTouch']
    });
    function createPlacemark(cords){
        let placemark = new ymaps.Placemark(cords, { balloonContentBody: 'Название объекта <br> Рейтинг: 4.5'}, {
            iconLayout: 'default#image',
            // iconImageHref: 'images/main-page/map_placemark.png',
            iconImageSize: [66, 71],
            iconOffset: [-26, -26],
            // balloonContent: content,
            // iconContent: name,
            iconLayout: squareLayout,
      });
      map.geoObjects.add(placemark); //добавляю метку на карту
    }
    createPlacemark(cords);
    map.controls.remove('geolocationControl'); 
    map.controls.remove('searchControl'); 
    map.controls.remove('trafficControl'); 
    map.controls.remove('typeSelector'); 
    map.controls.remove('fullscreenControl'); 
    map.controls.remove('zoomControl'); 
    map.controls.remove('rulerControl'); 
    map.behaviors.disable(['scrollZoom']);
  }
  
}
