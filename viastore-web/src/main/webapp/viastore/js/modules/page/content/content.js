/**
 * Created by SNSukhanov on 25.04.14.
 */

APP.content = (function(module, template){
    var view = {},
        _el = '.main-content',
        _template = 'home',
        _settings = {
            title:'Главная'
        },

        _render = function(){
            template.setTemplate({
                template:_template,
                next:_loadPage,
                settings:_settings
            }, 'loadTemplate');
        },

        _loadPage = function(html){
            $(_el).html(html);
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
})(APP, TEMPLATES);