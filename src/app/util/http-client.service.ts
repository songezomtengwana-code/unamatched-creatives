import { RestParameter } from './models/rest-parameter.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestParameterType } from './models/rest-parameter-type.enum';
import { Observable } from 'rxjs';
/**
 *HttpClient service for angular
 * v0.0.0 -
 * built by Ekasi Innovation
 *
 * @export
 * @class HttpClientService
 */
@Injectable({
  providedIn: 'root'
})

export class HttpClientService {
  /**
   * Creates an instance of HttpClientService.
   * @param {HttpClient} _HttpClient
   * @memberof HttpClientService
   */
  constructor(private _HttpClient: HttpClient) { }
  /**
   * An observable HTTP GET Method
   * @url the url to envoke.
   * @parameters The parameters to add to the HTTP Client Call.
   *
   * @return An `Observable` from the HTTP GET envoked
  */
  public get<TResponse>(url: string, parameters?: RestParameter[]): Observable<TResponse> {
    url = this.replaceRouteParams(url, parameters);
    url = this.addQueryParams(url, parameters);
    var headers: HttpHeaders = this.getHttpHeaders(parameters);
    return this._HttpClient.get<TResponse>(url, { headers: headers });
  }
  /**
   * An async Http GET method
   *
   * @url the url to envoke.
   * @parameters The parameters to add to the HTTP call.
   *
   * @return A `Promise` from the HTTP GET envoked
  */
  public getAsync<TResponse>(url: string, parameters?: RestParameter[]): Promise<TResponse> {
    url = this.replaceRouteParams(url, parameters);
    url = this.addQueryParams(url, parameters);
    var headers: HttpHeaders = this.getHttpHeaders(parameters);
    return this._HttpClient.get<TResponse>(url, { headers: headers }).toPromise();
  }
  /**
   * An Observable Http PUT method
   *
   * @url the url to envoke.
   * @body The body to parse to the HTTP call.
   * @parameters The parameters to add to the HTTP call.
   *
   * @return An `Observable` from the HTTP GET envoked
  */
  public post<TResponse, TRequest>(url: string, body: TRequest, parameters?: RestParameter[]): Promise<TResponse> {
    url = this.replaceRouteParams(url, parameters);
    url = this.addQueryParams(url, parameters);
    var headers: HttpHeaders = this.getHttpHeaders(parameters);
    return this._HttpClient.post<TResponse>(url, body, { headers: headers }).toPromise();
  }
  /**
   * An async Http PUT method
   *
   * @url the url to envoke.
   * @body The body to parse to the HTTP call.
   * @parameters The parameters to add to the HTTP call.
   *
   * @return A `Promise` from the HTTP GET envoked
  */
  public postAsync<TResponse, TRequest>(url: string, body: TRequest, parameters?: RestParameter[]): Promise<TResponse> {
    url = this.replaceRouteParams(url, parameters);
    url = this.addQueryParams(url, parameters);
    var headers: HttpHeaders = this.getHttpHeaders(parameters);
    return this._HttpClient.post<TResponse>(url, body, { headers: headers }).toPromise();
  }
  /**
   * An Observable Http PUT method
   *
   * @url the url to envoke.
   * @body The body to parse to the HTTP call.
   * @parameters The parameters to add to the HTTP call.
   *
   * @return An `Observable` from the HTTP GET envoked
  */
  public put<TResponse, TRequest>(url: string, body: TRequest, parameters?: RestParameter[]): Promise<TResponse> {
    url = this.replaceRouteParams(url, parameters);
    url = this.addQueryParams(url, parameters);
    var headers: HttpHeaders = this.getHttpHeaders(parameters);
    return this._HttpClient.put<TResponse>(url, body, { headers: headers }).toPromise();
  }
  /**
   * An async Http PUT method
   *
   * @url the url to envoke.
   * @body The body to parse to the HTTP call.
   * @parameters The parameters to add to the HTTP call.
   *
   * @return A `Promise` from the HTTP GET envoked
  */
  public putAsync<TResponse, TRequest>(url: string, body: TRequest, parameters?: RestParameter[]): Promise<TResponse> {
    url = this.replaceRouteParams(url, parameters);
    url = this.addQueryParams(url, parameters);
    var headers: HttpHeaders = this.getHttpHeaders(parameters);
    return this._HttpClient.put<TResponse>(url, body, { headers: headers }).toPromise();
  }
  /**
   * An observable HTTP GET Method
   * @url the url to envoke.
   * @parameters The parameters to add to the HTTP Client Call.
   *
   * @return An `Observable` from the HTTP GET envoked
  */
  public delete<TResponse>(url: string, parameters?: RestParameter[]): Observable<TResponse> {
    url = this.replaceRouteParams(url, parameters);
    url = this.addQueryParams(url, parameters);
    var headers: HttpHeaders = this.getHttpHeaders(parameters);
    return this._HttpClient.delete<TResponse>(url, { headers: headers });
  }
  /**
   * An async Http GET method
   *
   * @url the url to envoke.
   * @parameters The parameters to add to the HTTP call.
   *
   * @return A `Promise` from the HTTP GET envoked
  */
  public deleteAsync<TResponse>(url: string, parameters?: RestParameter[]): Promise<TResponse> {
    url = this.replaceRouteParams(url, parameters);
    url = this.addQueryParams(url, parameters);
    var headers: HttpHeaders = this.getHttpHeaders(parameters);
    return this._HttpClient.delete<TResponse>(url, { headers: headers }).toPromise();
  }
  /**
   * Appends query parameters passed to url
   *
   * @url the url to envoke.
   * @parameters The parameters to add to the URL.
   *
   * @return A `url` with query parameters concatenated
  */
  private addQueryParams(url: string, parameters: RestParameter[]): string {
    if (url && parameters) {
      parameters?.forEach((parameter: RestParameter) => {
        url += `?${parameter?.name}=${parameter?.value}`;
      });
    }
    return url;
  }
  /**
   * Appends route parameters passed to url
   *
   * @url the url to envoke.
   * @parameters The parameters to add to the URL.
   *
   * @return A `url` with query parameters concatenated
  */
  private replaceRouteParams(url: string, parameters: RestParameter[]): string {
    if (url && parameters) {
      parameters?.forEach((parameter: RestParameter) => {
        if (RestParameterType.path === parameter?.type) {
          url = url.replace(`:${parameter?.name}`, parameter?.value);
        }
      })
    }
    return url;
  }

  /**
   * Creates http headers from parameters passed
   *
   * @parameters The parameters to add to the HTTPHeaderes.
   *
   * @return A `url` with query parameters concatenated
  */
  private getHttpHeaders(parameters: RestParameter[]): HttpHeaders {
    var headers: HttpHeaders;
    if (parameters) {
      headers = new HttpHeaders();
      parameters?.forEach((parameter: RestParameter) => {
        if (RestParameterType.header === parameter?.type) {
          headers?.append(parameter?.name, parameter?.value);
        }
      });
    }
    return headers;
  }
}
