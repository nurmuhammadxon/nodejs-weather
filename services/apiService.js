import { getKeyValue, TOKEN_DISTIONARY } from './storageServices.js';
import axios from 'axios';

const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DISTIONARY.token);
  if (!token) {
    throw new Error("API doesn't exist, -t [API_KEY] for saving token");
  }

  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: token,
      lang: "en",
      units: "metric"
    }
  })

  return data

};

export { getWeather };
