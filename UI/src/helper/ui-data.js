import {
    latest,
    nintiesCar,
    retroCar,
} from '../assets';
import { formatDateToDDMMYYYY } from './date';

export const cars = [
{
    alt:'retro-car',
    gteTime: '1970-01-01',
    imgSrc: retroCar,
    lteTime: '1950-01-01',
    width: '200px',
}, 
{
    alt:'ninties-car',
    gteTime: '1980-01-01',
    imgSrc: nintiesCar,
    lteTime: '1960-01-01',
    width: '200px',
},  
{
    alt:'latest-car',
    gteTime: formatDateToDDMMYYYY(new Date()),
    imgSrc: latest,
    lteTime: '1980-01-01',
    width: '200px',
}];

export const cinemaCultures = [{
    color: '#5D9C59',
    text: 'Yes',
}, {
    color: '#DF2E38',
    text: 'No',
}];

export const colors = [{
    color: '#22092C',
}, {
    color: '#3E3232',
}, {
    color: '#872341',
}, {
    color: '#BE3144',
}, {
    color: '#F05941',
}, {
    color: '#F4CE14',
}];
