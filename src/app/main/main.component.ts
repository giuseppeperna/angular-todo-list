import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() linkName = 'An Item';
  cards = [];

  constructor() { }

  ngOnInit(): void {
  }

  addCard(card: any): void {
    this.cards.push(card);
    console.log(this.cards);
  }

  deleteCard(index: number): void {
    this.cards.splice(index, 1);
  }

}
