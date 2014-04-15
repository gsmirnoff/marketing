/**
 * Created by SNSukhanov on 15.04.14.
 */

APP.FormSession = (function(module){
    var view = {},

        _el = '.form-admin',
        _template = 'session/form',
        _partials = [],
        _config = {

        },

        _render = function(){

        },

        _session = function(auth){
            APP.initRequest({
                url:config.auth,
                data:JSON.stringify({
                    name:auth.name,
                    password:auth.password
                }),
                success:_success,
                error:_error
            }, 'POST');
        },

        _success = function(data){

        },

        _error = function(error){
           if(error.status == 503){
              var errorWrap = $('<div/>').addClass('server-error');
               $(_el).html(errorWrap);
               APP.ServerError.init();
           }
        },

        _done = function(){

        },

        _handlers = function(){
            $('#submit').on('click', function(event){
                var form = $(event.currentTarget).parent();
                var data = {
                    name:form.find('#name').val(),
                    password:form.find('#password').val()
                };

                _session(data);
            });
        };

    view.init = function(){
        TemplateManager.get({mainTemplate:_template, partials:_partials}, function (tmp) {
            var html = tmp(Tools.extend(_config));
            $(_el).html(html);
           _handlers();
        });
    };

    return view;
})(APP);