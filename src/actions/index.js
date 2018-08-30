import axios from 'axios';


const API_KEY='3894161ab32bfbad0a9186c2779b0ec4';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER='FETCH_WEATHER';
export function fetchWeather(city){
  const url=`${ROOT_URL}&q=${city},US`;
  const request=axios.get(url);

  return {
    type:FETCH_WEATHER,
    payload:request
  };
}
