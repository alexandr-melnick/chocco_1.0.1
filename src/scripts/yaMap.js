(function () {
  let myMap;

  const init = () => {
    myMap = new ymaps.Map('map', {
      center: [45.040142, 38.976306],
      zoom: 13,
      controls: []
    });

    const coords = [
      [45.059712, 38.942032],
      [45.013383, 38.959208],
      [45.065794, 39.034386],
      [45.030992, 39.037991]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
      draggable: false,
      iconLayout: 'default#image',
      iconImageHref: 'images/icon/mark.png',
      iconImageSize: [30, 42],
      iconImageOffset: [-3, -42]
    });

    coords.forEach(coord => {
      myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
  };

  ymaps.ready(init);
})();