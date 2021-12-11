import { environment } from './../../environments/environment';
import { Artist } from './../models/artist.model';
import { Injectable } from '@angular/core';
import { HttpClientService } from '../util/http-client.service';
/**
 * Artists API service
 *
 * @export
 * @class ArtistsService
 */
@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  private _artists: Artist[];
  private ARTISTS: string = 'assets/json/artist-data.json';
  /**
   * Creates an instance of ArtistsService.
   * @param {HttpClientService} _HttpClientService
   * @memberof ArtistsService
   */
  constructor(private _HttpClientService: HttpClientService) { }
  /**
   *API subscribe call to retrieve artist data
   *
   * @memberof ArtistsService
   */
  public getArtists(): void {
    const url = `${environment.apiBaseUrl}${this.ARTISTS}`;
    this._HttpClientService.get<Artist[]>(url).subscribe((artists) => {
      if (artists) {
        this._artists = artists;
      }
    });
  }
  /**
   *Returns a list of artists retrieved from artists API
   *
   * @readonly
   * @type {Artist[]}
   * @memberof ArtistsService
   */
  get artists(): Artist[] { return this._artists; }
}
