/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 04.04.14
 * Time: 17:14
 * To change this template use File | Settings | File Templates.
 */

APP.Banner = (function(module){
    var view = {},

        _template = 'banner',
        _partials = [],
        _el = '.banner',
        _settings = {

        },

        _render = function(){

        };

    view.init = function(){
        TemplateManager.get({mainTemplate:_template, partials:_partials}, function (tmp) {
            var html = tmp(Tools.extend(_settings));
            $(_el).html(html);
            _render();
        });
    };

    return view;
})(APP);