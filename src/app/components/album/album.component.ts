import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  album: any;

  constructor(private SpotifyService: SpotifyService, private activatedRoute: ActivatedRoute) { }
 
  //dapatka album id dari spotifyservice
  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((map) => {
        this.SpotifyService.getAlbum(map.get('id'))
          .subscribe(album => {
            this.album = album;
          });
      });
  }

}
