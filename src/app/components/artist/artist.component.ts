import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import {Artist} from '../../../../Artist';
import {Album} from '../../../../Album';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: any;
  albums: Album[];
  constructor(private spotifyService: SpotifyService, private activatedRoute: ActivatedRoute) { }

  //dapatkan artist dan album id dari spotifyservice
  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((map) => {
        this.spotifyService.getArtist(map.get('id'))
          .subscribe(artist => {
          this.artist = artist;
          });
        this.spotifyService.getAlbums(map.get('id'))
          .subscribe((albums: any) => {
            console.log(albums);
            this.albums = albums.items;
          });
    });
  }



}
