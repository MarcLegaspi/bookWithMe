import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Rental } from 'src/app/rental/shared/rental.model';

@Component({
  selector: 'bwm-rental-card',
  templateUrl: './rental-card.component.html',
  styleUrls: ['./rental-card.component.scss']
})
export class RentalCardComponent implements OnInit {
  @Input() rental: Rental;
  // @Input() childData;
  // @Output() childDataChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  // changeData() {
  //   this.childData = 100;
  //   this.childDataChange.emit(this.childData);
  // }
}
