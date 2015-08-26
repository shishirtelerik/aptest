'use strict';

app.userdetails = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_userdetails
// END_CUSTOM_CODE_userdetails
(function(parent) {
    var userdetailsModel = kendo.observable({
        fields: {
            sameaddress: '',
            country: '',
            currentstate: '',
            currentcity: '',
            locality: '',
            cureentaddress2: '',
            addres: '',
            address: '',
            tel: '',
            username: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('userdetailsModel', userdetailsModel);
})(app.userdetails);

// START_CUSTOM_CODE_userdetailsModel
// END_CUSTOM_CODE_userdetailsModel