import {getGroupingForcastData} from "./getGroupingForcastData";

export const getClosestTime = (fiveDays_weather_data) => {
    const grouped_data = getGroupingForcastData(fiveDays_weather_data);
    const max_length = grouped_data[0].length ;
    const closet_time = grouped_data[0][Math.min(1, max_length-1)].dt_txt.split(' ')[1];
    const closet_time_data = grouped_data.map(day => day.filter(time => time.dt_txt.split(' ')[1] === closet_time)[0]);

    for (let counter = 0; counter < closet_time_data.length; ++counter) {
        closet_time_data[counter] = {...closet_time_data[counter], day_index: counter}
    }

    return closet_time_data;
}