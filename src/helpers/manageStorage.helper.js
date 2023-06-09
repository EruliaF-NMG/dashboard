import { authTokenStorageKey } from '../config/core.config';

const setToLocalStorage = (key, contentArray) => {
  try {
    localStorage.setItem(key, JSON.stringify(contentArray));
    return true;
  } catch (ex) {
    return false;
  }
};

const setAuthData = (contentArray) => {
  return setToLocalStorage(authTokenStorageKey, contentArray);
};

const getFromLocalStorage = (key) => {
  try {
    let data = localStorage.getItem(key);
    return JSON.parse(data);
  } catch (ex) {
    return false;
  }
};

const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (ex) {
    return false;
  }
};

const logoutUser = () => {
  return removeFromLocalStorage(authTokenStorageKey);
};

const checkUserINLocalStorage = () => {
  try {
    let data = getFromLocalStorage(authTokenStorageKey);
    if (data) {
      return { status: true, result: data };
    } else {
      return { status: false };
    }
  } catch (ex) {
    return { status: false };
  }
};

export {
  setToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
  checkUserINLocalStorage,
  setAuthData,
  logoutUser,
};