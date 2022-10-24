export const getGroupingForcastData = (data) => {
    const data_days = [];

    let curr_day = data[0].dt_txt.split(' ')[0];
    let timeOfDay = [];

    for (let obj of data) {

        let data_curr_day = obj.dt_txt.split(' ')[0];

        if (data_curr_day === curr_day)
            timeOfDay.push(obj);
        else {
            data_days.push(timeOfDay);
            curr_day = obj.dt_txt.split(' ')[0];
            timeOfDay = [];
        }
    }
    return data_days;
}