import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";

export interface IHttpClient {
  get<T>(parameters: IHttpClientRequestParameters<T>): Promise<T>;
  post<T>(parameters: IHttpClientRequestParameters<T>): Promise<T>;
  put<T>(parameters: IHttpClientRequestParameters<T>): Promise<T>;
  delete<T>(parameters: IHttpClientRequestParameters<T>): Promise<T>;
}
export interface IHttpClientRequestParameters<T> {
  url: string;
  requiresToken: boolean;
  payload?: T;
}
export interface IHttpResponse<T> {
  statusCode: number;
  message: string;
  payload?: T;
}
export class ApiService implements IHttpClient {
  get<T>(parameters: IHttpClientRequestParameters<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {});
  }
  post<T>(parameters: IHttpClientRequestParameters<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {});
  }
  put<T>(parameters: IHttpClientRequestParameters<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {});
  }
  delete<T>(parameters: IHttpClientRequestParameters<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {});
  }
}
