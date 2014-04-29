/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 04.04.14
 * Time: 12:56
 * To change this template use File | Settings | File Templates.
 */

APP.header = (function(module){
    var view = {},
        _el,
        _template,
        _settings = {
            brand:'resources/images/logo.png'
        },

        _render = function(){
            TemplateManager.get({mainTemplate:_template, partials:[]}, function(tmp){
                var html = tmp(Tools.extend(_settings));
                $(_el).html(html);
            });
        },

        _loadNavigation = function(){
            REQUEST.initRequest({
                url:''
            }, 'GET', 'json');
        };

    view.saveConfig = function(options){
        _el = options.el;
        _template = options.template;
        _settings.header = options.settings;
    };

    view.init = function(options){
        view.saveConfig(options);
        _render();
    };

    return view;
})(APP);