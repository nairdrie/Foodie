import React from 'react';
import {
    Text
} from 'react-native';



class ExploreRestaurants extends React.Component {

    getSuggestions(lat, lng, rad) {
        console.log("test");
        const axios = require('axios');

        axios.get('http://localhost:3000/getRestaurantSuggestions', {
            params: {
                location:lat+','+lng,
                radius:rad
            }
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
        /*
        axios.post('http://localhost:3000/addRestaurantToFav', {
            firstName: 'Finn'
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
        */
      }

    
      componentDidMount() {
        if ("geolocation" in navigator) {
            console.log("Location available.");
            var _this = this;
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
                _this.getSuggestions(position.coords.latitude, position.coords.longitude, 1000);
              });

          } else {
            console.log("App needs location to find suggestions.");
          }
      }

    render() {
        return <Text> Tap on restaurants you like.</Text>;
    }


}
export default ExploreRestaurants;