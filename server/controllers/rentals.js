const Rental = require('../models/rental');

exports.getRentals = (req, res) => {
    Rental.find((error, foundRentals) => {
        if (error) { 
            return Rental
                .sendError(res, { statusCode: 422, errorMessage: 'Cannot retrieve rental data' })
        }

        return res.json(foundRentals);
    });
}

exports.getRentalById = (req, res) => {
    const rentalId = req.params.rentalId;
    Rental.findById(rentalId, (error, foundRentals) => {
        if (error) {
           return Rental
                .sendError(res, { statusCode: 422, errorMessage: 'Cannot retrieve rental data' })
        }

        return res.json(foundRentals);
    });
}

exports.createRental = (req, res) => {
    const rentalData = req.body;
    
    Rental.create(rentalData, (error, createdRental) => {
        if (error) {            
            return Rental
                .sendError(res, { statusCode: 422, errorMessage: 'Cannot post rental data' })
        } 
        
        return res.json({message: `Rental with id ${createdRental._id} was added`});
    })    
}

// exports.deleteRental = (req, res) => {
//     const rentalId = req.params.rentalId;
//     const rentalIndex = rentals.findIndex(x => x._id === rentalId);
//     rentals.splice(rentalIndex,1);
//     return res.json({message: `Rental with id ${rentalId} was deleted`});
// }

// exports.updateRental = (req, res) => {
//     const rentalToUpdate = req.body;
//     const rentalId = req.params.rentalId;
//     const rentalIndex = rentals.findIndex(x => x._id === rentalId);

//     rentals[rentalIndex].title = rentalToUpdate.title;
//     rentals[rentalIndex].city = rentalToUpdate.city;ewwwwww

//     return res.json({message: `Rental with id ${rentalId} was updated`});
// }