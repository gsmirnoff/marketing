/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 04.04.14
 * Time: 12:56
 * To change this template use File | Settings | File Templates.
 */

APP.Header = (function(module){
    var view = {},

        _template = 'header',
        _partials = ['header/brand', 'header/navigation'],
        _el = '.main-header',
        _settings = {
            brand:config.imagesFolder + '/logo.png'
        },

        _render = function(){
            var nav = $('ul.nav-list');
           Tools.location(nav);
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