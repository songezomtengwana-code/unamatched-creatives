import { Artist } from './../../models/artist.model';
import { ArtistModalService } from './../../services/artist-modal.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-modal',
  templateUrl: './artist-modal.component.html',
  styleUrls: ['./artist-modal.component.scss']
})
export class ArtistModalComponent implements OnInit {
  @Output()
  private close: EventEmitter<void> = new EventEmitter<void>();

  constructor(protected _ArtistModalService: ArtistModalService) { }

  ngOnInit(): void {
  }
  /**
   * Get active artist
   *
   * @readonly
   * @type {Artist}
   * @memberof ArtistModalComponent
   */
  get activeArtist(): Artist {
    return this._ArtistModalService.artist;
  }
  /**
   * Generates an artistry string from artistry list
   *
   * @param {string[]} artistry
   * @return {*}  {string}
   * @memberof ArtistModalComponent
   */
  getArtistry(artistry: string[]): string {
    var result: string = '';
    artistry?.forEach((_artistry: string) => {
      result += `${_artistry}/`;
    });
    if (result?.endsWith('/')) {
      result = result.substr(0, result?.length - 1)
    }
    return result;
  }

  closeArtistModal(): void {
    this._ArtistModalService.hideArtistModal();
    return this.close.emit();
  }
}
