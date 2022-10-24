import {months} from "../data/months";
import {days} from "../data/days";

export const getCurrentDay = () => {
    const current = new Date();
    const month_word = current.toUTCString().split(' ')[2];
    const current_month = months.filter(m => m.summary === month_word)[0].name;
    const day_word = current.toUTCString().split(' ')[0].split(',')[0];
    const current_day_word = days.filter(d => d.summary === day_word)[0].name;
    const current_day_num = current.toUTCString().split(' ')[1];

    return {current_day_word, current_day_num, current_month}
}