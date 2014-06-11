/**
 * Created by SNSukhanov on 25.04.14.
 */

APP.prometheus = (function(module){
    var view = {},
        _el,
        _template = 'prometheus',
        _settings,

        _render = function(){
            TemplateManager.get({mainTemplate:_template, partials:[]}, function(tmp){
                var html = tmp(Tools.extend(_settings));
                $(_el).html(html);
            });
        };

    view.saveConfig = function(options){
        _el = options.el;
        _template = options.template;
        _settings = options.settings;
    };

    view.init = function(options){
        view.saveConfig(options);
        _render();
    };

    return view;
})(APP);