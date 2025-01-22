mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhaWtzb2hhaWxoYXNhbiIsImEiOiJja3ZieG04Z3IyZGVuMnRva3J2eXUzdjhwIn0.Kfajc_GzsT-vWhJEGFNTlg';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([25.2048, 55.2708])
}

const geojson = {
  "count": 5000,
  "overflow": true,
  "next": "https://api.predicthq.com/v1/events/?country=AE&limit=10&offset=10",
  "previous": null,
  "results": [{
      "relevance": 0.0,
      "id": "YsnzEGVVs7TPTQ5dUQ",
      "title": "International Apparel & Textile Fair",
      "description": "",
      "category": "expos",
      "labels": [
        "clothing",
        "expo",
        "fashion"
      ],
      "rank": 74,
      "local_rank": 80,
      "aviation_rank": 58,
      "phq_attendance": 15000,
      "entities": [{
        "name": "Dubai World Trade Centre",
        "type": "venue",
        "formatted_address": "Sheikh Zayed Road\nDubai\nUnited Arab Emirates",
        "entity_id": "TNsPxFmpGqeSkbFSpr5x9T"
      }],
      "duration": 201600,
      "start": "2021-11-28T06:00:00Z",
      "end": "2021-11-30T14:00:00Z",
      "updated": "2021-09-21T12:00:19Z",
      "first_seen": "2021-05-14T12:36:20Z",
      "timezone": "Asia/Dubai",
      "location": [
        55.2888063,
        25.2271847
      ],
      "geo": {
        "geometry": {
          "type": "Point",
          "coordinates": [
            55.2888063,
            25.2271847
          ]
        }
      },
      "scope": "locality",
      "country": "AE",
      "place_hierarchies": [
        [
          "6295630",
          "6255147",
          "290557",
          "292224",
          "7289825"
        ],
        [
          "6295630",
          "6255147",
          "290557",
          "292224",
          "292223"
        ]
      ],
      "state": "active",
      "brand_safe": true,
      "private": false
    },
    {
      "relevance": 0.0,
      "id": "9BgYjRArwxFJcUt9j8",
      "title": "GCC Government and Business Organizations Golden Jubilee Conference",
      "description": "",
      "category": "conferences",
      "labels": [
        "business",
        "conference"
      ],
      "rank": 44,
      "local_rank": 52,
      "aviation_rank": 0,
      "phq_attendance": 500,
      "entities": [],
      "duration": 32400,
      "start": "2021-11-28T05:00:00Z",
      "end": "2021-11-28T14:00:00Z",
      "updated": "2021-09-26T04:04:05Z",
      "first_seen": "2020-11-24T10:37:13Z",
      "timezone": "Asia/Dubai",
      "location": [
        55.277776,
        25.202791
      ],
      "geo": {
        "geometry": {
          "type": "Point",
          "coordinates": [
            55.277776,
            25.202791
          ]
        }
      },
      "scope": "locality",
      "country": "AE",
      "place_hierarchies": [
        [
          "6295630",
          "6255147",
          "290557",
          "292224",
          "7289825"
        ],
        [
          "6295630",
          "6255147",
          "290557",
          "292224",
          "292223"
        ]
      ],
      "state": "active",
      "brand_safe": true,
      "private": false
    },
    {
      "relevance": 0.0,
      "id": "5BRoo9DqydX5BP8BBp",
      "title": "UOWD - Open Day",
      "description": "Open Day - UOWD",
      "category": "conferences",
      "labels": [
        "conference",
        "education",
        "family"
      ],
      "rank": 0,
      "local_rank": 0,
      "aviation_rank": null,
      "phq_attendance": null,
      "entities": [{
        "name": "University of Wollongong in Dubai",
        "type": "venue",
        "formatted_address": "Block 5, 14 & 15 Dubai Knowledge Park\nDubai\nDubayy\nUnited Arab Emirates",
        "entity_id": "39yvTcR7GSuHtxaCBDveJBU"
      }],
      "duration": 10800,
      "start": "2021-11-27T15:00:00Z",
      "end": "2021-11-27T18:00:00Z",
      "updated": "2021-10-27T12:26:25Z",
      "first_seen": "2021-10-27T12:22:52Z",
      "timezone": "Asia/Dubai",
      "location": [
        55.1628301,
        25.101547
      ],
      "geo": {
        "geometry": {
          "type": "Point",
          "coordinates": [
            55.1628301,
            25.101547
          ]
        }
      },
      "scope": "locality",
      "country": "AE",
      "place_hierarchies": [
        [
          "6295630",
          "6255147",
          "290557",
          "292224",
          "6691113"
        ],
        [
          "6295630",
          "6255147",
          "290557",
          "292224",
          "292223"
        ]
      ],
      "state": "active",
      "brand_safe": true,
      "private": false
    },
    {
      "relevance": 0.0,
      "id": "6oNvZ3yqoBGxJc6DYg",
      "title": "Division 1 - Gulf Heroes vs Al Taawon",
      "description": "",
      "category": "sports",
      "labels": [
        "soccer",
        "sport"
      ],
      "rank": 74,
      "local_rank": 100,
      "aviation_rank": 0,
      "phq_attendance": 16592,
      "entities": [{
        "name": "The Sevens Stadium",
        "type": "venue",
        "formatted_address": "",
        "entity_id": "dGaxGngw7W2dtMrdrPmMuW"
      }],
      "duration": 0,
      "start": "2021-11-27T12:40:00Z",
      "end": "2021-11-27T12:40:00Z",
      "predicted_end": "2021-11-27T14:30:00Z",
      "updated": "2021-10-26T07:26:59Z",
      "first_seen": "2021-10-04T21:50:30Z",
      "timezone": "Asia/Dubai",
      "location": [
        55.4651618,
        24.9947022
      ],
      "geo": {
        "geometry": {
          "type": "Point",
          "coordinates": [
            55.4651618,
            24.9947022
          ]
        }
      },
      "scope": "locality",
      "country": "AE",
      "place_hierarchies": [
        [
          "6295630",
          "6255147",
          "290557",
          "292224",
          "290624"
        ],
        [
          "6295630",
          "6255147",
          "290557",
          "292224",
          "292223"
        ]
      ],
      "state": "active",
      "brand_safe": true,
      "private": false
    },
    {
      "relevance": 0.0,
      "id": "Fr6cxqjJ2gXbdwd7XN",
      "title": "Division 1 - Masafi vs Al Hamriyah",
      "description": "",
      "category": "sports",
      "labels": [
        "soccer",
        "sport"
      ],
      "rank": 54,
      "local_rank": 60,
      "aviation_rank": 0,
      "phq_attendance": 1555,
      "entities": [{
        "name": "Masafi Stadium",
        "type": "venue",
        "formatted_address": "Masafi\nRas al Khaimah\nUnited Arab Emirates",
        "entity_id": "AJ9YWb8wJxDHyUFRtaBsXz"
      }],
      "duration": 0,
      "start": "2021-11-27T12:40:00Z",
      "end": "2021-11-27T12:40:00Z",
      "predicted_end": "2021-11-27T14:30:00Z",
      "updated": "2021-10-04T21:51:59Z",
      "first_seen": "2021-10-04T21:50:30Z",
      "timezone": "Asia/Dubai",
      "location": [
        56.171228885650635,
        25.315176314099507
      ],
      "geo": {
        "geometry": {
          "type": "Point",
          "coordinates": [
            56.171228885650635,
            25.315176314099507
          ]
        }
      },
      "scope": "locality",
      "country": "AE",
      "place_hierarchies": [
        [
          "6295630",
          "6255147",
          "290557",
          "291075",
          "291499"
        ]
      ],
      "state": "active",
      "brand_safe": true,
      "private": false
    },
    {
      "relevance": 0.0,
      "id": "6xkF8DGEMxntjHfD3A",
      "title": "Division 1 - Dibba Al Hisn vs Hatta",
      "description": "",
      "category": "sports",
      "labels": [
        "soccer",
        "sport"
      ],
      "rank": 47,
      "local_rank": 55,
      "aviation_rank": 0,
      "phq_attendance": 700,
      "entities": [{
        "name": "Dibba Al-Hisn Stadium",
        "type": "venue",
        "formatted_address": "Dibba Al-Hisn\nUnited Arab Emirates",
        "entity_id": "nZA6PVD2kza8KipmNfvZ3j"
      }],
      "duration": 0,
      "start": "2021-11-27T12:35:00Z",
      "end": "2021-11-27T12:35:00Z",
      "predicted_end": "2021-11-27T14:25:00Z",
      "updated": "2021-10-04T21:51:48Z",
      "first_seen": "2021-10-04T21:50:30Z",
      "timezone": "Asia/Dubai",
      "location": [
        56.26595377922058,
        25.609294083605757
      ],
      "geo": {
        "geometry": {
          "type": "Point",
          "coordinates": [
            56.26595377922058,
            25.609294083605757
          ]
        }
      },
      "scope": "locality",
      "country": "AE",
      "place_hierarchies": [
        [
          "6295630",
          "6255147",
          "290557",
          "292879",
          "292239"
        ]
      ],
      "state": "active",
      "brand_safe": true,
      "private": false
    },
    {
      "relevance": 0.0,
      "id": "EHtgXhwFzyyNfETtSK",
      "title": "Division 1 - Al Jazira Al Hamra vs Al Ramms",
      "description": "",
      "category": "sports",
      "labels": [
        "soccer",
        "sport"
      ],
      "rank": 54,
      "local_rank": 58,
      "aviation_rank": 0,
      "phq_attendance": 1555,
      "entities": [{
        "name": "Al Jazirah Al Hamra Stadium",
        "type": "venue",
        "formatted_address": "Al Jazirah Al Hamra\nUnited Arab Emirates",
        "entity_id": "dyxF9dsvLM7HtshVKKVtZ6"
      }],
      "duration": 0,
      "start": "2021-11-27T12:35:00Z",
      "end": "2021-11-27T12:35:00Z",
      "predicted_end": "2021-11-27T14:25:00Z",
      "updated": "2021-10-04T21:51:48Z",
      "first_seen": "2021-10-04T21:50:30Z",
      "timezone": "Asia/Dubai",
      "location": [
        55.80047249794006,
        25.70515764049144
      ],
      "geo": {
        "geometry": {
          "type": "Point",
          "coordinates": [
            55.80047249794006,
            25.70515764049144
          ]
        }
      },
      "scope": "locality",
      "country": "AE",
      "place_hierarchies": [
        [
          "6295630",
          "6255147",
          "290557",
          "291075",
          "291794"
        ],
        [
          "6295630",
          "6255147",
          "290557",
          "291075",
          "291074"
        ]
      ],
      "state": "active",
      "brand_safe": true,
      "private": false
    },
    {
      "relevance": 0.0,
      "id": "CG4Uenmw2TeTpXetSf",
      "title": "Trade Mission to Dubai Expo (Focus: Luxury goods and services)",
      "description": "The Scottish Chambers of Commerce network is pleased to invite applications from Scottish businesses for a trade mission to Dubai Expo.",
      "category": "expos",
      "labels": [
        "expo"
      ],
      "rank": 0,
      "local_rank": 0,
      "aviation_rank": null,
      "phq_attendance": null,
      "entities": [],
      "duration": 597600,
      "start": "2021-11-27T09:00:00Z",
      "end": "2021-12-04T07:00:00Z",
      "updated": "2021-10-19T07:51:05Z",
      "first_seen": "2021-10-19T07:50:54Z",
      "timezone": "Asia/Dubai",
      "location": [
        55.1600651,
        24.966401
      ],
      "geo": {
        "geometry": {
          "type": "Point",
          "coordinates": [
            55.1600651,
            24.966401
          ]
        }
      },
      "scope": "locality",
      "country": "AE",
      "place_hierarchies": [
        [
          "6295630",
          "6255147",
          "290557",
          "292224",
          "292223"
        ]
      ],
      "state": "active",
      "brand_safe": true,
      "private": false
    },
    {
      "relevance": 0.0,
      "id": "7pm7X43niSBoziLVou",
      "title": "Festival of Schools - Victory Heights Primary School",
      "description": "Join us for free family fun educational event",
      "category": "festivals",
      "labels": [
        "education",
        "family",
        "festival"
      ],
      "rank": 0,
      "local_rank": 0,
      "aviation_rank": null,
      "phq_attendance": null,
      "entities": [],
      "duration": 10800,
      "start": "2021-11-27T05:00:00Z",
      "end": "2021-11-27T08:00:00Z",
      "updated": "2021-10-15T06:39:58Z",
      "first_seen": "2021-10-15T06:39:35Z",
      "timezone": "Asia/Dubai",
      "location": [
        55.2226377,
        25.0351416
      ],
      "geo": {
        "geometry": {
          "type": "Point",
          "coordinates": [
            55.2226377,
            25.0351416
          ]
        }
      },
      "scope": "locality",
      "country": "AE",
      "place_hierarchies": [
        [
          "6295630",
          "6255147",
          "290557",
          "292224",
          "292223"
        ]
      ],
      "state": "active",
      "brand_safe": true,
      "private": false
    },
    {
      "relevance": 0.0,
      "id": "ym5e2UVkLTtmL6AJ9w",
      "title": "Arising Sub Sahara Africa Investment Conference & Awards",
      "description": "",
      "category": "conferences",
      "labels": [
        "business",
        "conference"
      ],
      "rank": 44,
      "local_rank": 51,
      "aviation_rank": 0,
      "phq_attendance": 500,
      "entities": [{
        "name": "Dubai World Trade Centre",
        "type": "venue",
        "formatted_address": "Sheikh Zayed Road\nDubai\nUnited Arab Emirates",
        "entity_id": "TNsPxFmpGqeSkbFSpr5x9T"
      }],
      "duration": 32400,
      "start": "2021-11-27T05:00:00Z",
      "end": "2021-11-27T14:00:00Z",
      "updated": "2021-09-30T13:02:37Z",
      "first_seen": "2021-05-14T12:28:11Z",
      "timezone": "Asia/Dubai",
      "location": [
        55.2888063,
        25.2271847
      ],
      "geo": {
        "geometry": {
          "type": "Point",
          "coordinates": [
            55.2888063,
            25.2271847
          ]
        }
      },
      "scope": "locality",
      "country": "AE",
      "place_hierarchies": [
        [
          "6295630",
          "6255147",
          "290557",
          "292224",
          "7289825"
        ],
        [
          "6295630",
          "6255147",
          "290557",
          "292224",
          "292223"
        ]
      ],
      "state": "active",
      "brand_safe": true,
      "private": false
    }
  ]
};


function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 10
  })

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  });
  map.addControl(directions, 'top-left');



  // add markers to map
  for (const feature of geojson.results) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';
    // make a marker for each feature and add it to the map
    new mapboxgl.Marker(el)
      .setLngLat(feature.geo.geometry.coordinates)
      .setPopup(
        new mapboxgl.Popup({
          offset: 30
        }) // add popups
        .setHTML(
          `<h3>${feature.title}</h3>
          <table>
             <tr>
               <th><img src="https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-HD.png" width="25" height="25"/></th>
               <th>${feature.country}</th>
            </tr>
            <tr>
              <th><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74iXIpzqCgsfWlfV2nGFZM-XYZocXnarGbtu9bOnWUzHP1cHQ_C5GLgVvPkuO10oYNME&usqp=CAU" width="20" height="20"/></th>
              <th><p>${feature.start}</p></th>
           </tr>
           <tr>
           <th><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_HD7NwftRGOh6u8w0nmVCNte4-7LGDvKhQ&usqp=CAU" width="20" height="20"/></th>
           <th><p>${feature.labels}</p></th>
          </tr>
          <tr>
          <th><img src="https://png.pngtree.com/png-vector/20190725/ourmid/pngtree-vector-signal-icon-png-image_1578065.jpg" width="20" height="20"/></th>
          <th><p>Local Rank: ${feature.local_rank} </p></th>
         </tr>
         </table>`
        )
      )
      .addTo(map);
  }


}
