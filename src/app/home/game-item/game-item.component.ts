import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {

  @Input() appid: number;
  @Input() rank: number;
  @Input() name: string;
  @Input() publisher: string;
  @Input() developer: string;
  @Input() owners: number;

  @Output() select = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  goToDetail(id: number) {
    this.select.emit(id);
  }
}
