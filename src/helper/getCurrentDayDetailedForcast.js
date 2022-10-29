const currentDayForecast = data => [
    {
        name: {en: 'feels like', fa: 'احساس واقعی'},
        value: data.main.feels_like,
        unit: '°C',
    },
    {
        name: {en: 'humidity', fa: 'رطوبت'},
        value: data.main.humidity,
        unit: '%',
    },
    {
        name: {en: 'wind speed', fa: 'سرعت باد'},
        value: Math.round(data.wind.speed),
        unit: 'm/s',
    },
    {
        name: {en: 'air pressure', fa: 'فشار هوا'},
        value: data.main.pressure,
        unit: 'hPa',
    },
    {
        name: {en:'max temp', fa: 'بیشترین دما'},
        value: Math.round(data.main.temp_max),
        unit: '°C',
    },
    {
        name: {en: 'min temp', fa: 'کمترین دما'},
        value: Math.round(data.main.temp_min),
        unit: '°C',
    },
];

export default currentDayForecast;