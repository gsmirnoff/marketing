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
            var wrap = $('<div/>').append(html);
            for(var i=0; i<_settings.content.length; i++){
                Tools.generator.add(_settings.content[i], view);
            }
        },

    //TODO: hard code!!!!!!
        _updateSettings = function(){
            var obj = {
                template:'zeus',
                title:'Bla bla',
                content:[]
            };
           for(var i=0; i<_settings.content.length; i++){
               _settings.content[i].template = 'prometheus';
           }
           _settings.content.push(obj);
        };

    view.showContent = function(){

    };

    view.saveConfig = function(options){
        _el = options.el;
        _template = options.template;
        _settings.content = options.settings;
    };

    view.init = function(options){
        view.saveConfig(options);
        _updateSettings();
        _render();
    };

    return view;
})(APP, TEMPLATES);