//Task 2.1
let dates = [new Date()];

//Task 2.2
dates.push(new Date(2018, 11, 8, 21, 0, 0));

//Task 2.3
let datesDays = dates.map(date => [new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(), date.getDay()]);
let datesString = dates.map(date => (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '.' + 
                                    (date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '.' +
                                     date.getFullYear());
console.log(datesString);
for (let index in datesDays) {
    console.log(datesDays[index]);
}


//Task 2.4
let daysOfTheWeek = ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота'];
let formattedDates = [];
for (let index in dates) {
    formattedDates[index] = 'Дата: ' + datesString[index] + ', час ' + dates[index].toLocaleTimeString({}, { hour12: false }) +
                            ', ' + daysOfTheWeek[datesDays[index][1]] + ', ' + datesDays[index][0] + 'дни';
}

for (let formattedDate of formattedDates) {
    console.log(formattedDate);
}
