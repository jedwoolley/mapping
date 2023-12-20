const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-74.5, 40],
    zoom: 9
  });

  map.on('load', () => {
    map.addLayer({
      id: 'rpd_parks',
      type: 'fill',
      source: {
        type: 'vector',
        url: 'mapbox://mapbox.3o7ubwm8'
      },
      'source-layer': 'RPD_Parks',
      layout: {
        visibility: 'visible'
      },
      paint: {
        'fill-color': 'rgba(61,153,80,0.55)'
      }
    });
  });