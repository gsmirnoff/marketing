/**
 * Created by SNSukhanov on 11.04.14.
 */

APP.about = (function(module){
    var view = {},

        _el = '.main-content',
        _template = 'about/content',
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