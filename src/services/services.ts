/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 * */

import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";

/**
 * @returns interface for implements ApiService class
 */
export interface IHttpClient {
  get<T>(parameters: IHttpClientRequestParameters<T>): Promise<T>;
  post<T>(parameters: IHttpClientRequestParameters<T>): Promise<T>;
  put<T>(parameters: IHttpClientRequestParameters<T>): Promise<T>;
  delete<T>(parameters: IHttpClientRequestParameters<T>): Promise<T>;
}

/**
 * @returns paramater for every request ()
 */
export interface IHttpClientRequestParameters<T> {
  url: string;
  requiresToken: boolean;
  payload?: T;
}

export class ApiService implements IHttpClient {
  /**
   *
   * get data
   * @param parameters
   * @returns response object from api with reflect typeof T
   *
   */
  get<T>(parameters: IHttpClientRequestParameters<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, payload, requiresToken } = parameters;
      const options: AxiosRequestConfig = {
        headers: {}
      };
      if (requiresToken) {
        const token = "";
        options.headers.RequestVerificationToken = token;
      }

      axios
        .get(url, options)
        .then((response: any) => {
          //return val
          resolve(response);
        })
        .catch((response: any) => {
          reject(response);
        });
    });
  }

  /**
   *
   * @param parameters
   * @returns response from api with typedof T
   *
   */
  post<T>(parameters: IHttpClientRequestParameters<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, requiresToken, payload } = parameters;
      const options: AxiosRequestConfig = {
        headers: {}
      };

      if (requiresToken) {
        const token = "";
        options.headers.RequestVerificationToken = token;
      }
      axios
        .post(url, payload, options)
        .then((response: any) => {
          resolve(response);
        })
        .catch((response: any) => {
          reject(response);
        });
    });
  }
  put<T>(parameters: IHttpClientRequestParameters<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {});
  }
  delete<T>(parameters: IHttpClientRequestParameters<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {});
  }
}
