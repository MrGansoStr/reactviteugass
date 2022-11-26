import { useDispatch } from 'react-redux';
import { createUser } from '../redux/states/user';
import { storageKeys } from './../models/StorageKeys';


export const persistLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify({ ...value }));
  localStorage.setItem(storageKeys.ACCESSTOKEN, value.accessToken);
};

export const clearLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const getStore = (key) => {
  //const data = localStorage.getItem(key);
  const dispatcher = useDispatch();
  dispatcher(createUser(JSON.parse(localStorage.getItem(key))));

}

export const getLocalStorage = (key) => {
  return (localStorage.getItem(key));
}