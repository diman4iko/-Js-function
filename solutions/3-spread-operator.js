const months = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'
  ];
  
  function formatDate(date) {
    const month = months[date[1] - 1];
    return `${month} ${date[2]}, ${date[0]}`;
  }
  
 
  export default function datesFormatted(...dates) {
    return dates.map(formatDate);
  }