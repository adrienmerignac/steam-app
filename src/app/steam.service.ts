import { SteamSpyGame, GameDetails } from './models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';

@Injectable()
export class SteamService {

  constructor(private http: HttpClient) { }

  public getTop100In2Weeks(): Observable<SteamSpyGame[]> {
    return this.http.get<SteamSpyGame[]>('/spy/api.php?request=top100in2weeks')
      .mergeMap(res => Object.keys(res).map(k => res[k]))
      .toArray();
  }

  public getGameDetails(appId: number): Observable<GameDetails> {
    return this.http.get<GameDetails>(`/store/api/appdetails/?appids=${appId}`)
      .mergeMap(res => Object.keys(res).map(k => res[k].data));
  }
}
