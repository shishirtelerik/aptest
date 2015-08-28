'use strict';

app.documents = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_documents
// END_CUSTOM_CODE_documents
(function(parent) {
    var documentsModel = kendo.observable({
        fields: {
            username3: '',
            username2: '',
            username1: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('documentsModel', documentsModel);
})(app.documents);

// START_CUSTOM_CODE_documentsModel
// END_CUSTOM_CODE_documentsModel