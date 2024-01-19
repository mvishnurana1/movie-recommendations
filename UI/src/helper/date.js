function formatDateToDDMMYYYY(date) {
    // Extract day, month, and year from the Date object
    const day = String(date.getDate()).padStart(2, '0');
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
  

export { addYearsToDate, formatDateToDDMMYYYY };


// 19-01-2024

// 1-01-1950 - 1-01-1970
// 1-01-1960 - 1-01-1980
// 01-01-1980 - 19-01-2024
