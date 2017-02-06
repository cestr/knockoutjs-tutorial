function SeatReservation(name,initialMeal) {
    var self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);
}
function ReservationsViewModel() {
    var self = this;
    
    // Non-editable catakig data - would come from the server
    self.availableMeals = [{
        mealName: "standard (sandwich)",
        price: 0
    }, {
        mealName: "Premium (lobster)",
        price: 34.95
    }, {
        mealName: "Ultimate (whole zebra)",
        price: 0
    }];

    // Editable data
    self.seats = ko.observableArray([
        new SeatReservation("Steve", self.availableMeals[0]),
        new SeatReservation("Bert", self.availableMeals[1])
    ]);

    self.addSeat = function() {
        self.seats.push(new SeatReservation("",self.availableMeals[1]));
    }

}

ko.applyBindings(new ReservationsViewModel());