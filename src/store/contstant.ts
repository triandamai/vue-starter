/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 *
 * Type for everything used in this project
 */
export interface Item {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  qty: string;
}
export interface ItemCart {
  item: Item;
  quantity: number;
  total: number;
}
export interface ItemsCart {
  items: Array<Item>;
  itemscart: Array<ItemCart>;
  isEmpty: boolean;
  totalPay: number;
}

export interface User {
  id: string;
  name: string;
  username: string;
  password: string;
  token: string;
}

export interface Token {
  token: string;
  expired: string;
}
/**
 * @param user
 * @param token
 * @returns data from sessionStorage
 * */

export const KEY_USER = "xxzzAabbb";
export const KEY_TOKEN = "zxAbzzz";
const setUser = (user: User) => {
  window.sessionStorage.setItem(KEY_USER, JSON.stringify(user));
};
const getUser = () => {
  return JSON.parse(window.sessionStorage.getItem(KEY_USER) ?? "") ?? null;
};

const dropUser = () => {
  window.sessionStorage.removeItem(KEY_USER);
};

const setToken = (token: Token) => {
  window.sessionStorage.setItem(KEY_TOKEN, JSON.stringify(token));
};
const getToken = () => {
  return JSON.parse(window.sessionStorage.getItem(KEY_TOKEN) ?? "") ?? null;
};
const dropToken = () => {
  window.sessionStorage.removeItem(KEY_TOKEN);
};

export { setUser, getUser, dropUser, setToken, getToken, dropToken };
