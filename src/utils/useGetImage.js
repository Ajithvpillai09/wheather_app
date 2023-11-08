import { WIND,CLOUDS,DRIZZLE,HUMIDITY,MIST,RAIN,SNOW,CLEAR } from "../assets/images";
function getImage(weatherCondition) {
    switch (weatherCondition) {
      case 'Wind':
        return WIND;
      case 'Clouds':
        return CLOUDS;
      case 'Clear':
        return CLEAR;
      case 'Drizzle':
        return DRIZZLE;
      case 'Humidity':
        return HUMIDITY;
      case 'Mist':
        return MIST;
      case 'Rain':
        return RAIN;
      case 'Snow':
        return SNOW;
      default:
        return CLOUDS;
    }
  }

  export default getImage