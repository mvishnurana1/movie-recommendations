function formatDateToDDMMYYYY(date) {
    // Extract day, month, and year from the Date object
    let day = String(date.getDate()).padStart(1, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Note: Months are zero-based
    const year = date.getFullYear();

    // Combine components to form the desired format
    const formattedDate = `${year}-${month}-${day}`;
  
    return formattedDate;
}

// 'YYYY-MM-DD'
// return string format 'dd-mm-yyyy'
function addYearsToDate(originalDate, yearsToAdd) {
    // Create a new Date object to avoid modifying the original date
    const originalYear = originalDate.getFullYear();
    const date = originalDate.getDate();
    const originalMonth = originalDate.getMonth() + 1;

    // Add the number of specified years
    const changedYear = originalYear + yearsToAdd;
    
    return new Date(changedYear, originalMonth, date);
}

function numberToMonth(number) {
    switch (number) {
        case 1:
            return 'Jan';
        case 2:
            return 'Feb';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'Aug';
        case 9:
            return 'Sep';
        case 10:
            return 'Oct';
        case 11:
            return 'Nov';
        case 12:
            return 'Dec';
        default:
            return '';                                     
    }
}


export { addYearsToDate, formatDateToDDMMYYYY, numberToMonth };
