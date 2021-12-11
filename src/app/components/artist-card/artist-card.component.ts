import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {
  @Output('profileClick')
  private _profileClick: EventEmitter<void> = new EventEmitter<void>();
  @Input()
  artistName: string = "Artist Name";
  @Input()
  artistImg: string = "./assets/img/stunner.png"
  @Input()
  profession: string = "artist"
  @Input()
  latestArtistry: {
    imgUrl: string,
    title: string,
    url: string
  }[] = [
      {

        imgUrl: 'https://i.ytimg.com/vi/ZlmDwjgQ4L4/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLA5B-kHG-4FBebBovC9-dsF8MH-wg',
        title: 'SK TUMMYGUN - NKALAKATHA | OFFICIAL MUSIC VIDEO',
        url: 'https://www.youtube.com/watch?v=ZlmDwjgQ4L4'
      },
      {

        imgUrl: './assets/img/dinnytm-chosenone-vid.png',
        title: 'Chosen One - Dinny TM | Official Music Video',
        url: 'https://www.youtube.com/watch?v=tiGdCu82izQ'
      }
    ];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Emits an event for profile click
   *
   * @return {*}  {void}
   * @memberof ArtistCardComponent
   */
  profileClick(): void {
    return this._profileClick.emit();
  }
}
