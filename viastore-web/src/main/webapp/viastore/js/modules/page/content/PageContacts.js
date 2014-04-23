/**
 * Created by SNSukhanov on 11.04.14.
 */

APP.contacts = (function(module){
    var view = {},

        _el = '.main-content',
        _template = 'contacts/content',
        _partials = [],
        _config = {

        },

        _render = function(){

        };

    view.init = function(){
        TemplateManager.get({mainTemplate:_template, partials:_partials}, function (tmp) {
            var html = tmp(Tools.extend(_config));
            $(_el).html(html);
            _render();
        });
    };

    return view;
})(APP);