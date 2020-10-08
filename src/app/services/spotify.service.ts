import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ParamMap} from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class SpotifyService {
  private searchURL: string;
  private artistURL: string;
  private albumsURL: string;
  private albumURL: string;
  private token = 'BQC2165oUmOPTJcDyL7RNq8hzfRf7R4iXsQB-LZrLI1xkul9HVmBpKfIID9j_2Yrv1I88GH2i7nyIaVwtbnwqqlEAKlD1f2r8_W4OXaeF9mAFPDZCsXR9D444S6V2AsODU4rnGgHaAw8qcOME48UO1cgrugbz_U';
  
  constructor(private http: HttpClient) { }

  searchMusic(str: string, type = 'artist') {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token);
    this.searchURL = 'https://api.spotify.com/v1/search?q=' + str + '&type=' + type + '&market=US&offset=0&limit=20';
    return this.http.get(this.searchURL, {headers});
  }

  getArtist(id: string) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token);
    this.artistURL = 'https://api.spotify.com/v1/artists/' + id;
    return this.http.get(this.artistURL, {headers});
  }

  getAlbums(artistId: string) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token);
    this.albumsURL = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
    return this.http.get(this.albumsURL, {headers});
  }

  getAlbum(albumId: string) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token);
    this.albumURL = 'https://api.spotify.com/v1/albums/' + albumId;
    return this.http.get(this.albumURL, {headers});
  }
} 
