function AppViewModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");

    this.fullName = ko.computed(function() {
        return this.firstName() + " " +this.lastName();
    },this);
}

ko.applyBindings(new AppViewModel());