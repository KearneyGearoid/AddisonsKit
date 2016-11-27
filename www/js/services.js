angular.module('starter.services', [])

.factory('Doctors', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var doctors = [{
     id: 1,
     name: "Bons Tralee",
     doctorname: "Dr. Ted Hansen",
     street: "Strand Street ",
     state :'Tralee Kerry',
     city:'Kerry',
     image:'http://sportysnetwork.com/airfacts/wp-content/blogs.dir/13/files/2015/12/doctor-facing-amera.jpg',
     lat:52.269609,
     lon:-9.713111,
     phone: "(066) 43423423",
     waitTime: '2 Months',
     hours: {
      weekdays: "9am - 5pm",
      weekends: "9am - 5pm"
    }
  },
  {
    id: 2,
    name: "Mercy Hospital ",
    street: "Henry Street Cork City",
    state :'Cork',
    city:'Cork',
    image:'https://nyoobserver.files.wordpress.com/2016/08/screen-shot-2016-08-24-at-11-01-59-am.png?w=635',
    lat:51.8986744,
    lon:-8.4849214,
    phone: "(065) 3423423",
    waitTime: '3 Months',
    hours: {
     weekdays: "9am - 5pm",
     weekends: "9am - 5pm"
   }
  },
  {
    id: 3,
    name: "Frankfort Urgent Care",
    street: "123 Main Street",
    state :'Kentucky',
    city:'Frankfort',
    image:'http://sportysnetwork.com/airfacts/wp-content/blogs.dir/13/files/2015/12/doctor-facing-amera.jpg',
    lat:38.195070,
    lon:-84.878694,
    phone: "(999) 999-9999",
    fax: "(999) 999-9999",
    waitTime: 15,
    hours: {
     weekdays: "9am - 5pm",
     weekends: "9am - 5pm"
   }
  },
  {
    id: 4,
    name: "Frankfort Urgent Care",
    street: "123 Main Street",
    state :'Kentucky',
    city:'Frankfort',
    image:'http://sportysnetwork.com/airfacts/wp-content/blogs.dir/13/files/2015/12/doctor-facing-amera.jpg',
    lat:38.195070,
    lon:-84.878694,
    phone: "(999) 999-9999",
    fax: "(999) 999-9999",
    waitTime: 15,
    hours: {
     weekdays: "9am - 5pm",
     weekends: "9am - 5pm"
   }
  },
  {
    id: 1,
    name: "Frankfort Urgent Care",
    street: "123 Main Street",
    state :'Kentucky',
    city:'Frankfort',
    image:'http://sportysnetwork.com/airfacts/wp-content/blogs.dir/13/files/2015/12/doctor-facing-amera.jpg',
    lat:38.195070,
    lon:-84.878694,
    phone: "(999) 999-9999",
    fax: "(999) 999-9999",
    waitTime: 15,
    hours: {
     weekdays: "9am - 5pm",
     weekends: "9am - 5pm"
   }
  }];

  return {
    all: function() {
      return doctors;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < doctors.length; i++) {
        if (doctors[i].id === parseInt(chatId)) {
          return doctors[i];
        }
      }
      return null;
    }
  };
})

.factory('$geo', function($window) {

  /**
 * @ngdoc method
 * @name $geo#getCurrentPosition
 *
 * @description
 * Gets the current position of the device.
 *
 * @param {function} success
 * A callback function that takes a Position object as its sole input
 * parameter.
 *
 * @param {function} error
 * An optional callback function that takes a PositionError object as its sole
 * input parameter.
 */
  var getCurrentPosition = function(success, error) {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000, // 5 seconds (5 * 1000)
      maximumAge: 300000 // 5 minutes (5 * 60 * 1000)
    };

    $window.navigator
           .geolocation
           .getCurrentPosition(success, error, options);
  };

  /**
 * @ngdoc method
 * @name $geo#getDistanceInMiles
 *
 * @description
 * Gets the distance, in miles, between two coordinates.
 *
 * @param {number} lat1 Latitude for first coordinate
 * @param {number} lon1 Longitude for first coordinate
 * @param {number} lat2 Latitude for second coordinate
 * @param {number} lon2 Longitude for second coordinate
 *
 * @returns {number} A number representing the distance between the given
 *                   coordinates in miles.
 */
  var getDistanceInMiles = function(lat1, lon1, lat2, lon2) {
    var earthRadiusInKm    = 6371;
    var earthRadiusInMiles = earthRadiusInKm * 0.621;

    var lat = lat2 - lat1; // Difference of latitude
    var lon = lon2 - lon1; // Difference of longitude

    // Vertical distance
    var disLat = (lat * Math.PI * earthRadiusInMiles) / 180;

    // Horizontal distance
    var disLon = (lon * Math.PI * earthRadiusInMiles) / 180;

    // Total distance (calculated by Pythagore: a^2 + b^2 = c^2)
    return Math.sqrt(Math.pow(disLat, 2) + Math.pow(disLon, 2));
  };

  return {
    getCurrentPosition: getCurrentPosition,
    getDistanceInMiles: getDistanceInMiles
  };
});
