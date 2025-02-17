import  dayjs from 'dayjs';


export  const formattedDate= (newDate)=> { return formatISODateToString(newDate, 'MMMM D, YYYY h:mm A')}

//format from isodate to readble format
export const formatISODateToString = (newDate) =>{
  
  return dayjs(newDate).format('YYYY-MM-DD');
}


//const isoDate = '2023-10-15T14:30:00Z'



//calculate difference in months between todat and one given date
const date = '2023-01-15'
export const differenceInMonths=(date) =>{
    const now = dayjs(); 
    const newDate = dayjs(date); 
    const diffInMonths = now.diff(newDate, 'month');
     
      return diffInMonths;
  }
//export default differenceInMonths;
 
//console.log( monthsDifference,"months ago");

//Have a function for converting date formats to appear like "Thursday, January 21, 2023"


export const newFormattedDate=(newDate) => dayjs(newDate).format('ddd ,D MMMM , YYYY ')
//console.log("Full Formatted Date :",newFormattedDate);


// Have a function for converting date formats to appear like "01/21/2023"

export const shortFormattedDate=(newDate) => dayjs(newDate).format('D / MM / YYYY ')
//console.log("short Formatted Date :",shortFormattedDate);