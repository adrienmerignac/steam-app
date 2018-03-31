import { SteamSpyGame } from './../models';
import { Component, OnInit } from '@angular/core';
import { SteamService } from './../steam.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  games: SteamSpyGame[];

  constructor(private steamService: SteamService, private router: Router) { }

  ngOnInit() {
    this.steamService.getTop100In2Weeks().subscribe(results => {
      console.log('games', results);
      this.games = results;
    });
  }

  public goToDetail(id: number) {
    console.log(id);
    this.router.navigate(['/details', id]);
  }

}
