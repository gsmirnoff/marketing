/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 04.04.14
 * Time: 16:10
 * To change this template use File | Settings | File Templates.
 */

APP.index = (function(module){
    var view = {},

        _template = 'content',
        _el = '.main-content',
        _partials = ['index/head', 'index/projectItem', 'index/contacts'],
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