/**
 * Created by SNSukhanov on 30.06.14.
 */

PLATFORM.models.user = function User(options){
    var view = this,

        _settings = {
            firstName:options.firstName || 'First name',
            lastName:options.lastName || 'Last name',
            middleName:options.middleName || 'Middle name',
            location:options.location || 'Location',
            organization:options.organization || 'Company',
            login:options.login || 'Login',
            email:options.email || 'email@email.com',
            gender:options.gender || 'Male',
            projects:options.projects || {}
        },


        _set = function(attr, value){
            _settings[attr] = value;
        },

        _get = function(attr){
            return _settings[attr];
        };

    view.init = function(){
        return {
            set:_set,
            get:_get
        };
    };
};