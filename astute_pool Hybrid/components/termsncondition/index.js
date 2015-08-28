'use strict';

app.termsncondition = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_termsncondition
// END_CUSTOM_CODE_termsncondition
(function(parent) {
    var termsnconditionModel = kendo.observable({
        fields: {
            tnc2: '',
            tnc1: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('termsnconditionModel', termsnconditionModel);
})(app.termsncondition);

// START_CUSTOM_CODE_termsnconditionModel
// END_CUSTOM_CODE_termsnconditionModel