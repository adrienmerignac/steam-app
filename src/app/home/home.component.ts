import { Observable } from 'rxjs/Observable';
import { SteamGame } from './../models';
import { Component, OnInit, OnChanges } from '@angular/core';
import { SteamService } from './../steam.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  games: any[] = [];
  filteredGames: any[] = [];
  search: FormControl;

  constructor(private steamService: SteamService, private router: Router) {
    this.steamService.getAllGames().subscribe(games => {
      this.games = games;
    });

    this.search = new FormControl();
    this.search.valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe((value) => {
        const valueLower = value.toLowerCase();
        if (valueLower.length > 2) {
          this.filteredGames = this.games.filter(game => {
            const nameLower = game.name.toLowerCase();
            return nameLower.indexOf(valueLower) !== -1;
          });
        }
      });
  }

  public goToDetail(id: number) {
    this.router.navigate(['/details', id]);
  }

}


