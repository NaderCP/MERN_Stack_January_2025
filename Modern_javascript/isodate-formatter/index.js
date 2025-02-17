import {formattedDate} from './utils/formatDate.js'
import {differenceInMonths} from './utils/formatDate.js'
import {newFormattedDate}from './utils/formatDate.js'
import {shortFormattedDate}from './utils/formatDate.js'



const isoDate = '2023-10-15T14:30:00Z';
const format1 = formattedDate(isoDate)
console.log(format1);

const diff = differenceInMonths('2023-01-15');
console.log(diff,'months ago');

const format2= newFormattedDate(isoDate)
console.log(format2);

const format3= shortFormattedDate(isoDate)
console.log(format3);

