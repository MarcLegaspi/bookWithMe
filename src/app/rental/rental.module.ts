import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalListingComponent } from './rental-listing/rental-listing.component';
import { RentalComponent } from './rental.component';
import { CommonModule } from '@angular/common';
import { RentalService } from './shared/rental.service';
import { RentalCardComponent } from '../shared/rental-card/rental-card.component';
import { HttpClientModule } from '@angular/common/http';

import { UpperCasePipe } from '../shared/pipes/uppercase.pipe';

const routes: Routes = [
    {
        path: 'rentals',
        component: RentalComponent,
        children: [
            { path: '', component: RentalListingComponent },
            { path: ':rentalId', component: RentalDetailComponent },
        ]
    }
];

@NgModule({
    declarations: [
        RentalDetailComponent,
        RentalListingComponent,
        RentalComponent,
        RentalCardComponent,
        UpperCasePipe,
    ],
    providers: [
        RentalService
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        HttpClientModule
    ]
})

export class RentalModule {}
