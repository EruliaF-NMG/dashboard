import { _get } from "./lodash.wrappers";

/**
 * Check value is empty
 * @param {Any} value 
 * @returns {boolean}
 */
const isEmpty = (value) => {
  if(value === null || value === undefined || value.length === 0 ) return true;
  return false;
}

/**
 * @description get from inputs for form validation
 * @param {Object|Array} formValue form data list
 * @param {string} key form value key
 */
const getInputsForValidate = (formValue, key) => {
    let value = _get(formValue, key, '');
  
    switch (typeof value) {
      case 'string': {
        value = value.trim();
        break;
      }
      default: {
        break;
      }
    }
    return value;
};

/**
 * decode JWT and extract data
 * @param {String} token 
 * @returns 
 */
const decodeJWT = (token) => {
  let base64Url = token.split('.')[1];
  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

/**
 * @description date object to string
 * @param {Object|String} dateObject Date object
 * @param {String} format date format
 */
const dateToString = (date, format = 'yyyy-mm-dd') => {
  const dateObject = new Date(date);
  switch (format) {
    case 'yyyy-mm-dd':
      return `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${dateObject.getDate().toString().padStart(2, '0')}`;
    case 'yyyy_mm_dd':
      return `${dateObject.getFullYear()}_${(dateObject.getMonth() + 1)
        .toString()
        .padStart(2, '0')}_${dateObject.getDate().toString().padStart(2, '0')}`;
    case 'h:i a':
      // eslint-disable-next-line no-case-declarations
      let hours = dateObject.getHours();
      // eslint-disable-next-line no-case-declarations
      const minutes = dateObject.getMinutes();
      // eslint-disable-next-line no-case-declarations
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours %= 12;
      hours = hours || 12;
      return `${hours
        .toString()
        .padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    default:
      return date;
  }
};

const calculatePercentage=(lastValue,newValue)=>{
  return Math.abs((Number(lastValue)-Number(newValue)/Number(newValue))*100).toFixed(2);
}

export {
    getInputsForValidate,
    decodeJWT,
    dateToString,
    isEmpty,
    calculatePercentage
}