import { GameDetails } from './../models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SteamService } from '../steam.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  game: GameDetails;

  constructor(private route: ActivatedRoute, private steamService: SteamService) {
    this.route.params.subscribe(res => {
      console.log(res.id);

      this.steamService.getGameDetails(res.id).subscribe(results => {
        console.log('game', results);
        this.game = results;
      });
    });
  }

  ngOnInit() {
  }
}
