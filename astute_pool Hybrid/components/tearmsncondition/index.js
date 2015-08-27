'use strict';

app.tearmsncondition = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_tearmsncondition
// END_CUSTOM_CODE_tearmsncondition
(function(parent) {
    var tearmsnconditionModel = kendo.observable({
        fields: {
            checkbox1: '',
            tearmscondition1: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('tearmsnconditionModel', tearmsnconditionModel);
})(app.tearmsncondition);

// START_CUSTOM_CODE_tearmsnconditionModel
// END_CUSTOM_CODE_tearmsnconditionModel