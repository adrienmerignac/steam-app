import { GameDetails, SteamGame } from './models';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/map';

@Injectable()
export class SteamService {

  constructor(private http: HttpClient) { }

  public getAllGames(): Observable<any[]> {
    return this.http.get<any>('/assets/games.json').map(response => response.applist.apps);
  }

  public getGameDetails(appId: number): Observable<GameDetails> {
    return this.http.get<GameDetails>(`/store/api/appdetails/?appids=${appId}`)
      .mergeMap(res => Object.keys(res).map(k => res[k].data));
  }
}
