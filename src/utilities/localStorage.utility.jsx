import { useDispatch } from 'react-redux';
import { createUser } from '../redux/states/user';
export const persistLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify({ ...value }));
};

export const clearLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const getStore = (key) => {
  //const data = localStorage.getItem(key);
  const dispatcher = useDispatch();
  dispatcher(createUser(JSON.parse(localStorage.getItem(key))));

}
