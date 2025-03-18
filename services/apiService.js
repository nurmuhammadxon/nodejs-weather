import { getKeyValue, TOKEN_DISTIONARY } from './storageServices.js';
import axios from 'axios';

const getIcons = icon => {
  switch (icon.slice(0, -1)) {
    case '01':
      return '☀️';
    case '02':
      return '🌤️';
    case '03':
      return '☁️';
    case '04':
      return '🌥️';
    case '09':
      return '🌧️';
    case '10':
      return '🌦️';
    case '11':
      return '⛈️';
    case '13':
      return '❄️';
    case '50':
      return '🌫️';
    default:
      return '❓';
  }
};

const getWeather = async (city) => {
  try {
    const token = await getKeyValue(TOKEN_DISTIONARY.token);
    if (!token) {
      throw new Error("API doesn't exist, use -t [API_KEY] to save token");
    }

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: token,
        lang: "en",
        units: "metric"
      }
    });

    return data;
  } catch (error) {
    throw new Error("Failed to fetch weather data. Check your city name or API key.");
  }
};

export { getWeather, getIcons };
