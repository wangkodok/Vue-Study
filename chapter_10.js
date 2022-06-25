// http request
const url = 'https://api.covid19api.com/country/south-korea/status/confirmed?from=2022-06-01T00:00:00Z&to=2022-06-25T00:00:00Z';
const corona = fetch(url).then((res) => {
    return res.json()
}).then((data) => console.log(data));