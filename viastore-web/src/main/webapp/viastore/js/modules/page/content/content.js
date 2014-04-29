/**
 * Created by SNSukhanov on 25.04.14.
 */

APP.content = (function(module){
    var view = {},
        _el,
        _template,
        _settings = {

        },

        _render = function(){
            TemplateManager.get({mainTemplate:_template, partials:[]}, function(tmp){
                var html = tmp(Tools.extend(_settings));
                $(_el).html(html);
            });
        };

    view.saveConfig = function(options){
        _el = options.el;
        _template = options.template;
        _settings.content = options.settings;
    };

    view.init = function(options){
        view.saveConfig(options);
        _render();
    };

    return view;
})(APP);