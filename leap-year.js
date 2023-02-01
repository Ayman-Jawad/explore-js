function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder == 0) {
        // console.log('your year was a leap year', year);
        return true;
    }
    else {
        // console.log('you year was not a leap year', year)
        return false;
    }
}
// isLeapYear(1340);
// isLeapYear(1923);

const isMyYearLeapYear = isLeapYear(1937);
console.log('my year:', isMyYearLeapYear);
const isHerYearLeapYear = isLeapYear(1964);
console.log('Her year:', isHerYearLeapYear)