import { ArtistModalService } from './../services/artist-modal.service';
import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artist.model';
import { ArtistsService } from '../services/artists.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(protected _ArtistsService: ArtistsService, protected _ArtistModalService: ArtistModalService) { }

  ngOnInit(): void {
    this._ArtistsService.getArtists();
  }
  /**
   *Get's a list of active artists
   *
   * @readonly
   * @type {Artist[]}
   * @memberof LandingPageComponent
   */
  get artists(): Artist[] { console.log(this._ArtistsService.artists); return this._ArtistsService.artists }
  /**
   * Show's artist's modal
   *
   * @param {Artist} artist
   * @memberof LandingPageComponent
   */
  showArtistModal(artist: Artist): void {
    this._ArtistModalService.viewArtistModal(artist);
  }
  /**
   * Hide's artist's modal
   *
   * @memberof LandingPageComponent
   */
  hideArtistModal(): void {
    this._ArtistModalService.hideArtistModal();
  }

}
