function WebmailViewModel() {
    // Data
    var self = this;

    // $data 
    self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    self.chosenFolderId = ko.observable();
    self.chosenFolderData = ko.observable();
    
    
    // Behaviours
    self.goToFolder = function(folder) {
        self.chosenFolderId(folder);
        $.get('//learn.knockoutjs.com/mail',{ folder: folder}, self.chosenFolderData);
    }

    // Show inbox by default
    self.goToFolder();
}

ko.applyBindings(new WebmailViewModel());