import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../../Artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr: string;
  searchRes: Artist[];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  searchMusic() {
    this.spotifyService.searchMusic(this.searchStr).subscribe((res: any) => {
      this.searchRes = res.artists.items;
    });
  }
}
