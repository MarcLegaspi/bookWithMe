import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
    selector: 'bwm-rental-detail',
    templateUrl: './rental-detail.component.html',
    styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
    rental: Rental;

    constructor(private route: ActivatedRoute, private rentalService: RentalService) { }

    ngOnInit(): void {
        // console.log(this.route.snapshot.params.rentalId); or
        this.route.params.subscribe(params => {

            const rentalId = params.rentalId;
            this.rentalService.getRentalById(rentalId)
                              .subscribe(res => {
                this.rental = res;
            });
        });

    }
}
