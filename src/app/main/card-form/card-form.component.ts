import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Card} from '../models/card.model';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  @Output() cardCreation = new EventEmitter<Card>();
  @ViewChild('inputDescription') descriptionInputRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  cardInfos(title): void {
    if (title.value !== '') {
      const newCard = new Card(title.value, false);
      this.cardCreation.emit(newCard);
      title.value = '';
    }
  }

}
