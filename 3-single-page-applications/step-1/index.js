function WebmailViewModel() {
    // Data
    var self = this;

    // $data 
    self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    self.chosenFolderId = ko.observable();
    
    // Behaviours
    self.goToFolder = function(folder) {
        self.chosenFolderId(folder);
    }
}

ko.applyBindings(new WebmailViewModel());