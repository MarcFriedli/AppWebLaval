const token = 'f3717f155f05c4fb';

const myHeaders = new Headers();

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

export function getLocalisation() {
  const myRequest = new Request(`http://api.wunderground.com/api/${token}/geolookup/q/autoip.json`, myInit);
  return fetch(myRequest)
    .then(response => response.json)
    .then(json => json.location)
}

export function getWeather() {
  return getLocalisation().then(location => {
    let country = location.country_name;
    let city = location.city;
    return new Request(`http://api.wunderground.com/api/${token}/geolookup/conditions/forecast/q/${country}/${city}.json`, myInit);
  }).then(fetch.bind(this))
}
