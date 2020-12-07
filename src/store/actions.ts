/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 */
import { ApiService } from "../services/services";
import { Item, User } from "./contstant";
let service: ApiService = new ApiService();

/**
 *
 * @param data
 * @returns data user and auth token then save to sessionStorage if needed
 */

const authUser = (data: any) => {
  service
    .post<User>({ url: "", payload: data, requiresToken: false })
    .then(res => {})
    .catch(err => {});
};

const fetchItem = (data: any) => {
  service
    .get<Item>({ url: "", requiresToken: false, payload: data })
    .then(res => {})
    .catch(err => {});
};

export { authUser, fetchItem };
