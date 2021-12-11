import { Artist } from './../models/artist.model';
import { Injectable } from '@angular/core';

/**
 * Artist Modal Service
 *
 * @export
 * @class ArtistModalService
 */
@Injectable({
  providedIn: 'root'
})
export class ArtistModalService {
  private _artist: Artist;
  /**
   * Creates an instance of ArtistModalService.
   * @memberof ArtistModalService
   */
  constructor() { }
  /**
   * Assigns artist to show on modal - [Will switch to ArtistID when Artist service is enhanced]
   *
   * @param {Artist} artist
   * @memberof ArtistModalService
   */
  public viewArtistModal(artist: Artist): void {
    this._artist = artist;
  }
  /**
   * Hides showing artist modal
   *
   * @memberof ArtistModalService
   */
  public hideArtistModal(): void {
    this._artist = undefined;
  }
  /**
   * Gets viewed artist
   *
   * @readonly
   * @type {Artist}
   * @memberof ArtistModalService
   */
  public get artist(): Artist { return this._artist; }
}
