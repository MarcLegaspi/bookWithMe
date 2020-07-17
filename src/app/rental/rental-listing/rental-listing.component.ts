import { Component, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.model';
import { RentalService } from '../shared/rental.service';
import { IRental, AppStorage } from '../shared/rental.interface';

@Component({
    selector: 'bwm-rental-listing',
    templateUrl: './rental-listing.component.html',
    styleUrls: ['./rental-listing.component.scss']
})
export class RentalListingComponent implements OnInit, IRental {
    rentals: Rental[] = [];
    constructor(private rentalService: RentalService) {

    }

    someData = 'Some Data';
    isLoaded = false;
    // parentData = 10;

    implementMe(): string {
        return '';
    }

    ngOnInit(): void {
        const appStorage = new AppStorage<number>();
        appStorage.addItem(4);
        appStorage.addItem(5);
        appStorage.addItem(6);

        const item = appStorage.getItem(0);
        const items = appStorage.displayItems();

        this.rentalService.getRental().subscribe((rentals: Rental[]) => {
            this.rentals = rentals;
        });
    }

    // changeParentData(value: number)
    // {
    //     this.parentData = value;
    // }
}
