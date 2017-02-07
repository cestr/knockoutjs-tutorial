function SeatReservation(name, initialMeal) {
    var self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);
    self.formatterPrice = ko.computed(function () {
        var price = self.meal().price;
        return price ? "$" + price.toFixed(2) : "None";   
    }, this);
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

    self.addSeat = function () {
        self.seats.push(new SeatReservation("", self.availableMeals[1]));
    }

    self.removeSeat = function (seat) {
        self.seats.remove(seat);
    }

    self.totalSurcharge = ko.computed(function () {
        var total = 0;
        for (var i = 0; i < self.seats().length; i++) {
            total += self.seats()[i].meal().price;
        }
        return total;
    });
}

ko.applyBindings(new ReservationsViewModel());