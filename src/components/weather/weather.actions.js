import * as Api from '../../utilities/api';
import config from '../../config/config';

export const fetchWeather = (city) => {
  return Api.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},us&mode=json&appid=${config.openWeatherMap.API_KEY}`)
    .then((response) => {
      return Object.assign({}, {
        city: city,
        forecast: response.list
      })
    });
};
