var myMap;

ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [34.831948, -111.768365],
        zoom: 8,
        controls: [] },
        {
        suppressMapOpenBlock: true
    });
     myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Седона'
            }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [27, 27]
        }),
    myMap.geoObjects
        .add(myPlacemark);
}
